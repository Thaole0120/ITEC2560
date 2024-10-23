// Define the URL for fetching ISS location data
let url = 'https://api.wheretheiss.at/v1/satellites/25544';

// Select HTML elements to display ISS latitude, longitude, and the fetch time
let issLat = document.querySelector('#iss-lat');
let issLong = document.querySelector('#iss-long');
let timeIssLocationFetched = document.querySelector('#time');

// Set the update interval for fetching data (10 seconds)
let update = 10000;

// Define the maximum number of failed attempts to fetch data
let maxFailedAttempts = 3;
let issMarker; // Variable to store the ISS marker on the map

// Create a custom icon for the ISS marker
let icon = L.icon({
    iconUrl: 'iss_icon.png', 
    iconSize: [50, 50],      
    iconAnchor: [25, 25]     
});

// Initialize the map, centered at coordinates [0, 0] with a zoom level of 1
let map = L.map('iss-map').setView([0, 0], 1);

// Add OpenStreetMap tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// Call the ISS function initially with the maximum number of failed attempts
iss(maxFailedAttempts);

// Function to fetch and display the ISS location
function iss(attempts) {
    // Check if attempts are exhausted
    if (attempts <= 0) {
        alert('Failed to contact ISS server after several attempts.');
        return; 
    }

    // Fetch ISS data from the API
    fetch(url)
        .then(res => {
            return res.json(); // Parse the response as JSON
        })
        .then((issData) => {
            console.log(issData); // Log the fetched data for debugging

            // Extract latitude and longitude from the fetched data
            let lat = issData.latitude;
            let long = issData.longitude;

            // Update the HTML elements with the fetched coordinates
            issLat.innerHTML = lat;
            issLong.innerHTML = long;

            // Check if the ISS marker already exists on the map
            if (!issMarker) {
                // If not, create a new marker at the fetched coordinates
                issMarker = L.marker([lat, long], { icon: icon }).addTo(map);
            } else {
                // If it exists, update its position to the new coordinates
                issMarker.setLatLng([lat, long]);
            }

            // Display the time when the data was fetched
            let now = Date();
            timeIssLocationFetched.innerHTML = `This data was fetched at ${now}`;
        })
        .catch((err) => {
            attempts = attempts - 1; // Decrease the number of attempts on error
            console.log('ERROR!', err); // Log the error for debugging
        })
        .finally(() => {
            // Retry fetching the data after the specified update interval
            setTimeout(iss, update, attempts);
        });
}


// Initialize an array of animals
let animals = ['lion', 'tiger', 'cheetah'];

// Print the entire array
console.log(animals);

// Print the animal at index 1 (second position)
console.log(animals[1]); // Outputs: tiger

// Print the animal at index 1000 (out of bounds, returns undefined)
console.log(animals[1000]); // Outputs: undefined

// Add 'giraffe' at index 3
animals[3] = 'giraffe';
console.log(animals); // Outputs: ['lion', 'tiger', 'cheetah', 'giraffe']

// Print the animal at index 5 (undefined as it hasn't been assigned)
console.log(animals[5]); // Outputs: undefined

// Change the animal at index 1 to 'zebra'
animals[1] = 'zebra';
console.log(animals[1]); // Outputs: zebra

// Add 'elephant' to the end of the array
animals.push('elephant');
console.log(animals); // Outputs: ['lion', 'zebra', 'cheetah', 'giraffe', 'elephant']

// Remove the last animal from the array and store it in lastAnimal
let lastAnimal = animals.pop();
console.log(lastAnimal); // Outputs: elephant
console.log(animals); // Outputs: ['lion', 'zebra', 'cheetah', 'giraffe']

// Add 'deer' to the beginning of the array
animals.unshift('deer');
console.log(animals); // Outputs: ['deer', 'lion', 'zebra', 'cheetah', 'giraffe']

// Remove the first animal from the array and store it in firstAnimal
let firstAnimal = animals.shift();
console.log(firstAnimal); // Outputs: deer
console.log(animals); // Outputs: ['lion', 'zebra', 'cheetah', 'giraffe']

// Reverse the order of the animals in the array
animals.reverse();
console.log(animals); // Outputs the array in reverse order

// Sort the animals in alphabetical order
animals.sort();
console.log(animals); // Outputs: sorted array

// Get the number of animals in the array
let numberOfAnimals = animals.length;
console.log(numberOfAnimals); // Outputs the length of the array

// Check if 'walrus' is in the array and print its index
console.log(animals.indexOf('walrus')); // Outputs: -1 (not found)

// If 'walrus' is not in the array, print a message
if (animals.indexOf('walrus') == -1) {
    console.log('walrus is not in the array'); // Outputs: walrus is not in the array
}

// Check if 'cheetah' is in the array and print a message
if (animals.includes('cheetah')) {
    console.log('cheetah is in the array'); // Outputs: cheetah is in the array
}

// Join the array elements into a single string separated by ' * '
console.log(animals.join(' * ')); // Outputs: joined string

// Print each animal's name in uppercase (note: missing parentheses for toUpperCase)
animals.forEach(function(animal) {
    console.log(animal.toUpperCase()); // Outputs: each animal in uppercase
});

// Print the length of each animal's name
animals.forEach(function(animal) {
    console.log(animal.length); // Outputs: length of each animal name
});

// Add 'alligator' to the end of the array
animals.push('alligator');

// Create an array to store the lengths of animal names
let animalNameLength = [];
animals.forEach(function(animal) {
    let length = animal.length; // Get the length of the current animal's name
    animalNameLength.push(length); // Add the length to the animalNameLength array
});

// Print the array of animal name lengths
console.log(animalNameLength); // Outputs: lengths of each animal name

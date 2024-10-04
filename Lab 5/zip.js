function cityStateAAddress(city, state) {
    let address = city + state.toUpperCase() // wi to WI
    return address
}

console.log(cityStateAAddress(' Minneapolis', 'mn'))
let address = cityStateAAddress('Seatle', 'WA')
console.log(address)


function isMinnesotaZip(code) {
    //All MN zip are between these: 55001 and 56763
    if (code >= 55001 && code <=56763) {
        return true
    } else {
        return false
    }
}

function validGPA(gpa){
    return gpa >= 0 && gpa <=4
}

console.log(validGPA(5))
console.log(validGPA(3))


console.log(isMinnesotaZip('55403'))
console.log(isMinnesotaZip('55001'))
console.log(isMinnesotaZip('56764'))
console.log(isMinnesotaZip('99999999999'))
console.log(isMinnesotaZip('-1'))


let className = 'Web Programming'
let classCode = 2560
let department = 'ITEC'

console.log(`This class is ${department} ${classCode} ${className}`)


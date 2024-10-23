let takenCSharp = false
let takenJava = true
if (takenCSharp || takenJava) {
    console.log('You meet the pre-requisites for Android')
}else {
    console.log('You must take C# or Java')
}


let age = 35
let usCitizenTime = 35
let stateOfResidence = 'Wisconsin'
let stateWantToRepresent = 'Minnesota'

if (age >= 30 && usCitizenTime >=9 && stateOfResidence == stateWantToRepresent){
    console.log(' You are eligible to be a senator')
} else {
    console.log('Sorry, you are not eligible')
}

// salsy values - undefined 
if ('' === 0){
    console.log('the same!')
}else {
    console.log('not the same')
}
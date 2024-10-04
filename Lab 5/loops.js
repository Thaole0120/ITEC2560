let birds = ['Owl', 'Robin', 'Eagle']
console.log(birds)

birds.forEach( function(bird,index){
    //repeat once for each object in array
    // function will be called for each object in the array
    console.log(bird.toUpperCase())
})
//Tradition for loop
for (let x = 0 ; x < birds.length ; x ++) {
    let bird = birds[x]
    console.log(bird.toUpperCase())
}


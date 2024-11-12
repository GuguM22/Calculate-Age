let fname = prompt('Enter your name');
// let currentYear = Number(prompt('Enter the current year'));
let birthYear = Number(prompt('Enter Your birth year')); 

let currentYear = new Date().getFullYear();
console.log(currentYear);



  
 {   alert('Hi ' + fname +" you are " + (currentYear-birthYear +'years old'))
}

if  (currentYear-birthYear){
    console.log(currentYear-birthYear );
    
 alert( alert('Hi ' + fname +" you are " + (currentYear-birthYear +'years old')))
}
else {
    alert('Hi ' + fname +" you have entered an invalid date ")
}
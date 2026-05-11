// variables: a named memory location
// data types
let name = 'Ali'; //strings
let age = 20 //integer
let city = 'Lahore'
let marks = 78.9 //float
let pass_status = true; //boolean
const roll_num = '1A'
// const roll_num = '1B'

// output
console.log(name);
console.log(age);
console.log(city);

// Operators
let num1 = 10
let num2 = 3

// arithmetic Operators
console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)
console.log(num1 % num2)

// assigment operators
// num1 = num1 + 2

num1 += 2 //12
num1 -= 2 //10
num1 *= 3 //30

// comparison operators
// console.log(num1 > num2)
// console.log(num1 < num2)

// logical operators
// console.log(2 == 2 && 2 > 4)
// console.log(2 == 2 || 2 > 4)


// w3schools, programiz, geeksforgeeks

// functions

// function definition
function greet(){
    // function block
    console.log('Hi, Javascript functions')
}
// function calling
greet()

// function with parameters and arguments
function addValues(a , b){ //parameters
    // console.log(a + b)
    return a + b
}
console.log(addValues(5, 10)) //arguments
let sum = addValues(4, 3) //stored the returned value
console.log(sum)

// -------------

function divideValues(x, y){
    return x / y
}
console.log(divideValues(sum, 2))

// arrays

let student = 'Abdullah'

let students = ['Ahmed', 'Faizan', 'Abdullah']
console.log(students)

// length and indexing
console.log(students.length)

console.log(students[0])
console.log(students[1])
let st3 = students[2]
console.log(st3)

// methods
students.push('Adil')
console.log(students)


// Javscript array methods 


// HTML JS DOM

// document.getElementById('text').innerText = 'Hello Javascript'
// document.querySelector('h1').innerText = 'Hello Javascript'

// function addText(){
//     document.querySelector('h1').innerText = 'Hello Javascript'
// }
// function addStyling(){
//     document.querySelector('h1').style.color = 'red'
// }

function toggleClass(){
    document.querySelector('h1').classList.toggle('hidden')
}

// // adding some text
// document.getElementById('btn').addEventListener('click', addText)
// // adding some styles
// document.getElementById('btn2').addEventListener('click', addStyling)
// changing visibillity
document.getElementById('btn3').addEventListener('click', toggleClass)


// user input

let output = document.getElementById('output')
function inputValue(){
   let val = document.getElementById('input').value 
   output.innerText = val
   output.style.color = 'red'
}

document.getElementById('btn4').addEventListener('click', inputValue)
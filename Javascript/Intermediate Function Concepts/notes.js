//* Three ways to create strings: 
// 1. using double quotes => "hello"
// 2. using single quotes => 'hindi'
// 3. using backtick => `hindi`

// we can also create template strings using backtick which is otherwise known as string interpolation
// for example:

let username = "deepak"
//console.log(`username is:  ${username}`)

//* String Concatination
// dono string to add karke ek single string dena as output 

let s1 = "deepak"
let s2 = " kumar"
//console.log(s1+s2)

//* Concat function which will take two arguments 
const firstname = "deepak"
//console.log(firstname.concat(" ","kumar"))

//* uppercase and lowercase
// console.log(s1.toUpperCase())
// console.log(s1.toLowerCase())

//* In javascript functions are first class citizens
// in javascript function can be returned from a function 
// and can be passed as an argument to another function 

function getData(){
    let username = "deepak"
    console.log(username)
}

function getAllData(getData){
    getData()
    console.log('getData is called')
   
}

getAllData(getData)

// function anotherFunction(){
//     return x;
// }

// function x(){
//     return 10
// }
// const data = anotherFunction()()
// console.log(data)





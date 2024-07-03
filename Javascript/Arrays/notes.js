//* Arrays: 
// Array is a special type of object in JS that can store one or more than one 
// value of diffrent types of datatypes.
// Array are hetrogenous because we can store diffrent diffrent type of datatypes in an array
// JS Arrays are 0 based index matlab eska positioning 0 se start hoga and yeah jo position hota hai yeah internally key banta hai.
// so indexing concept is available in Array. 
// i can fetch the value based on the index. 
// yeah jo indexs hote hein yeah sab hamare logical thinking ke liye otherwise actaul mein memory mein kya hote hein address hote hein

// ham access ke saath saath update bhi kar sakhte hein.


let arr = [] // empty array creation
let arr2 = ['hello', true, -1, 10, 'deepak']

console.log(arr2[0])

arr2[0] = 'kana hela ba' // updating the value od index 0

arr2[10] = ['kolkata']
console.log(arr2[10])
// see what i have done here i added a value to the position 10 but 
// so it will be added directedly on index 10. 
// but what will happen from 5-9 index, it will be placed with an empty-item
// and if you want to access those values from index 5-9 then we will get undefined for that. 

console.log(arr2)

//* Another way for creating array with new key word. 

const arr3 = new Array(10,20,30,40) // this will also give us an Array as Ouput. 
console.log(arr3)


const arr4 = new Array(4)
console.log(arr4) 
// Output: 
//---------
//[ <4 empty items> ]
// yahan meine ek single value diya hai array banane ke liye but in result mujhe 
// utna seize ka array mil raha hai aur har single element mein mujhe undefined hi milega 
// aggar mein access karunga toh 

// par aggar meine multiple element use karke banaunga jaise meine line number 31 mein banaya hai 
// toh mujhe ek propery array array with actual values without getting undefined (in sort un elements ke saath ek array milega)

const array5 = new Array(5).fill('hello')
console.log(array5)

// yahan pe mujhe 5 length ki array milega aur sab mein hello dikhne ko milega

//* find length in an array.
let arr6 = [1,2,3,4,5,6]
console.log(arr6.length)

//* push element into an array that too in the last. 

arr6.push(7)
console.log(arr6)

//* remove the element from an array

arr6.pop()
console.log(arr6)

//* shift jo starting mein se element ko remove kar dega. 
//* unshift jo starting mein se element ko add kar dega.

arr6.shift()
console.log(arr6)

arr6.unshift(1)
console.log(arr6)

//* indexof in array 
console.log(arr6.indexOf(100))
// aggar hai toh proper index milega aur aggar nahi hai toh -1 milega

//* reverse => we can reverse the complete array. 
console.log(arr6.reverse())
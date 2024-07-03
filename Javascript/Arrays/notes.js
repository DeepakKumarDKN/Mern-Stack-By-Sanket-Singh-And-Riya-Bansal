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


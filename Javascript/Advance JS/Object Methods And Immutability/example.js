// let products = {
//     name: 'I Phone 15',
//     company: 'Apple',
//     price: 125000,
//     quantity: 5
// }

// //* this will only give us keys.
// console.log(Object.keys(products))

// //* this will only give us values
// console.log(Object.values(products))

// //* Immutability: doesnt allow to do modidicitions
// //* mutability : allow us to do modifications

// // why do we need immutability: 
// // There are a lot of places in programming where immutability becomes extremely important
// // lets say we have a DB Connection, there are very less chasses where we want to 
// // update the configuration of this DB Connection. Most of the time once the configuration 
// // object is setup we don't want to change it, this is a good example of immutability 
// // requirement


// //Pros:
// // Make important configuration non-modifiable.

// //Cons: 
// // if we have a const based initialization for objects then it doesnot make the object fully 
// // immutable. 

// // we will be able to add some key value pairs and also we can change the value of a key. 
// // Example: 

// const obj= {
//     name:'deepak',
//     city: 'cuttack'
// }

// obj.name="deepak kumar"
// console.log(obj) // { name: 'deepak kumar', city: 'cuttack' } 
// // so its very clear than we can change its value and also we can add sone new key value pair

// obj.location = "CDA Sector 9"

// console.log(obj) // { name: 'deepak kumar', city: 'cuttack', location: 'CDA Sector 9' }

// // Notes: 
// // so i can change its value as well as i add some more key value pair. 
// // so its clear that it is not baheving fully immutable because const works well with variable
// // const mainly stops the reassignment 
// // so if we do the reassignment of the object again then we will get an error. 


// // for example: 
// //obj = {
//     name :"rahul",
//     //city : 'cuttack'
// //}

// console.log(obj) // this is not allowed re assignment is not allowed



// //const username = "deepak"
// username = "rahul" // not allowed we will get an TypeError i.e Assignment to a const variable.
// console.log(username)

// // Notes: 
// // Objects store hote hein Heap memeory mein 
// // variable store hote hein stack memory mein



// let product = {
// 	name : 'IPhone 14',
// 	company: 'Apple',
// 	quantity: 5,
// 	price: 125000,
// 	waranty: "2 years"
// }

// keys:
// console.log(Object.entries(product).length)
// console.log(Object.keys(product).length)
// console.log(Object.values(product).length)

// const userName = "rahul";
// const userName = "netra"
// console.log(userName)

// const product = {
// 	name : 'IPhone 14',
// 	company: 'Apple',
// 	quantity: 5,
// 	price: 125000,
// 	waranty: "2 years"
// }
// product.name = "Samsung 15",
// product.company = "Samsung"

// console.log(product)

const product = {
    userName : 'deepak',
    productName: 'Laptop Mac Book Pro',
    price: 150000,
    quantity: 1
}

Object.freeze(product)
product.version = "Latest"
product.userName = "deepak_kumar"
console.log(product)

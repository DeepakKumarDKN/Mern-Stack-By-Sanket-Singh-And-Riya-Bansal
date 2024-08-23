```JS
let product = {
	name : 'IPhone 14',
	company: 'Apple',
	quantity: 5,
	price: 125000
	waranty: "2 years"
}
```
So this is an object and an object can have a lot of key and value pairs but in an object the key cannot be duplicate so it has to be unique but the values can be duplicate.

## Object.keys()

if we want to access all the keys from an object then we can use a inbuilt function 
**==`Object.keys(objectname)`==**

This method takes an argument and the argument is the object name itself
in this example my object name is ==**product**==
```JS
let product = {
	name : 'IPhone 14',
	company: 'Apple',
	quantity: 5,
	price: 125000
	waranty: "2 years"
}

// keys:
console.log(Object.keys(product))

```
it returns an array of strings and each array represent an unique key.
```JS
['name', 'company', 'quantity', 'price', 'waranty' ]
```

## Object.values()

The get all the values from an object we have to use **==`Object.values(objectname)`==**
This will also give us an array of strings. 
```JS
console.log(Object.values(product))
['name', 'company', 'quantity', 'price', 'waranty' ]
```

## Object.entries()
There is an inbuilt function which can give us both values and key from an object
==**`Object.entries(objectname)

This gives us an array of array where 0th index is for key and the 1st index is for value
like the other two methods this one will also take one argument and the argument is the object name

```JS
console.log(Object.entries(product))
[
  [ 'name', 'IPhone 14' ],
  [ 'company', 'Apple' ], 
  [ 'quantity', 5 ],      
  [ 'price', 125000 ],    
  [ 'waranty', '2 years' ]
]
```
## how can we check the number of key value pairs in an object.?


We have to find the length of an key and value pairs otherwise just get the keys or value using `Object.keys(product) or Object.values(product)` and then find the length
```JS
console.log(Object.entries(product).length)
console.log(Object.keys(product).length)
console.log(Object.values(product).length)
```
we can use any one of them we get the same result.

### Mutability and Immutability in JS Objects

So in every programming languages we will get to see mutability and immutability concepts

mutable mean we can do changes it allow us to do the changes lets say for an example we created a variable and initialize a value to it and later on if we want to change the value of the same variable then this is called mutable. 

immutability mean where we cannot do the modifications, if you want to make an variable/object as immutable then instead of using let and `var` just use `const`
because `const` is something which doesn't allow us to change

it actually behave differently with variable and with objects lets get into it with an example. and one more thing if we are defining with the `const` then we have to initialize some value into it we just cannot keep it empty

```JS
const userName; not allowed
SyntaxError: Missing initializer in const declaration` 

```
we need to initialize some value into it otherwise we will get an error as

```JS
const userName = "deepak"
userName = "rahul" // this is not allowed
TypeError: Assignment to constant variable.

const userName = "netra"
SyntaxError: Identifier 'userName' has already been declared

```

so from the examples it is very clear that anything we declared with `const` we cannot update it we cannot do any changes to it. 

but it will behave different with object lets create an object with `const` and try to do some changes into it

```JS
const product = {
	name : 'IPhone 14',
	company: 'Apple',
	quantity: 5,
	price: 125000
	waranty: "2 years"
}
product.name = "Samsung 15"
product.company = "Samsung"

console.log(product)

{
  name: 'Samsung 15',
  company: 'Samsung',
  quantity: 5,       
  price: 125000,     
  waranty: '2 years' 
}
```

see the changes are getting reflected that's' what I am talking about 
`const` doesn't allow the reassignment if I will try to reassign then I will get same error
but here I am not doing any reassignment, I am just changing the value which are inside the object if I want to create a new object altogether with same object name then this is not allowed 

it is not allowed because `const` doesn't allow you to create a new reference , when we are created an object at that time we will create a reference so new reference us not allowed to create in `const` otherwise if you want to do any changes inside the object then it is okay.. 

for example 
```JS
const product = {
	name : 'IPhone 14',
	company: 'Apple',
	quantity: 5,
	price: 125000
	waranty: "2 years"
}

product = {
	name: 'Samsung 15',
	company: 'Samsung',
	quantity: 5,       
	price: 125000,     
	waranty: '2 years' 
}
```

now lets go more deeper there is something called heap and stack, Objects are stored in the heap memory and if we are defining a variable and inside the variable lets say we are saving some number or string that will get store inside the stack

The objects we are creating will get store inside the heap memory but the variable being used to create the object will get store inside the stack 

### Why do we need immutability
lets say for an example there is a DB Connection and there are very less cases where we want to update the configuration of DB Connection, Most of the time once the connection is established there is no need of changing it and this is a good example of immutability. 

### Can we make objects fully immutable:
Yes there are two methods with the help of which we can make it immutable. 
1. `Object.seal()` 
2. `Object.freeze()`


#### Object.seal()
This method takes one argument that is the object we want to make immutable. 
and it does not allow you to add new key value pair and it also not allow you to delete any key value pair from the object. 

```JS
const product = {
	userName : 'deepak',
    productName: 'Laptop Mac Book Pro',
    price: 150000,
    quantity: 1
}
Object.seal(product)
product.version = "Latest" // not allowed after using seal
product.userName = "deepak_kumar" //this is not allowed here
console.log(product)
// trying to add new key value pair.

Object.freeze(product)
product.version = "Latest" // not allowed
product.userName = "deepak_kumar" //this is allowed here
console.log(product)
// trying to change the existing value of a key value pair

Output: 
-------
{
  userName: 'deepak_kumar',
  productName: 'Laptop Mac Book Pro',
  price: 150000,
  quantity: 1
}

{
  userName: 'deepak',
  productName: 'Laptop Mac Book Pro',
  price: 150000,
  quantity: 1
}
```
**Note:** 
freeze is little bit different then seal with the help of seal I can change the value of an existing key value pair but freeze will not allow you to do that.` Object.freeze()` provide us highest level of immutability

we can also check whether the object is frozen or not by using `Object.isFrozen(objectname)` 
if it is frozen then we will get true else vice-versa


we can also check whether the object is sealed or not by using 
`Object.isSealed(objectname)`
if it is sealed we will get true else vice-versa



```JS
const obj = {
	x:10,
	y:20,
	fn: () => {
		console.log(this, this.x, this.y)
	}
}
```

here we have created an arrow function.
If we are using an arrow function we wont be able to find this inside the arrow function but this can be resolved using lexical scoping concept. 

```JS
obj.fn()
```
This will point out to the window object as we know we have defined an arrow function where this is not available so it will go one level up. 

Just look at the code is there this defined inside the fn function .? No 
So we will go one level up Scope Where it is pointing out to the global scope.
That's why `obj.fn()` will give us window object as Output.


#### Problem in current class implementation:
```JS
class Product{

	name;
	price;
	category;
	description;
	rating;

	addToCart(){
		console.log('Product added to the cart')
	}
	removeFromCart(){
		console.log('Product removed from the cart')
	}
	displayProduct(){
		console.log('Product Displayed')
	}
	buyProduct(){
		console.log('Product Brought')
	}
	
	
}
```

In current implementation we don't have any security on the `updation` of the values of data members in the class. 

After object creation anyone can just come and do the `updation` of the object outside of the class without any issues (`updation` of data members)

Just because of these a fundamental concept of OOPs is being violated i.e Encapsulation, in any case we should not be required to update the data members/ modify the data members of a class outside the class.

*==***Note**:**==
Sanket sir have never updated any data members of the class from outside the class in his entire coding journey

Why because our data members will be assigned/allocated/updated by any random value
`kyun kia aggar aisa hua ki koi bhi akke value ko update kar raha hai and that too without any issue tab toh code mien issue aa sakhta hai`

So to resolve this we can hide our data members from being accessed outside of the class
`ham hide kar sakhte hai ki woh(data members) class ke bahar se access na ho`

In JS we can make our data members private i.e. the data members will be accessible to read and update the data members only inside the class (`javascript mein ham apne data memebrs ko private kar sakhte hein eska matlab koi bhi akke bahar se kuch update ya change data members mein nahi kar sakhta jo bhi karna hai inside the class hi karna hai`)

To make a data member private we just need to add # before its declaration. 
```JS
class Product {
	#name,
	#price,
	#description
}
```
Hence, name price and description are now private, they cannot be accessed outside of the class (` na hi access kar paenge aur na hi read kar paenge`)

Example:
```JS
class Product {
    #name; name ko private rakha hua hai baki sab normal hai
    quantity;
    price
    
    constructor(productName, productPrice, productQuantity){
        this.#name = productName, 
        this.price = productPrice,
        this.quantity = productQuantity
    }
}

let iPhone = new Product('Iphone 14 Pro',90000, 23)
iPhone.name = "Samsung"
console.log(iPhone)
console.log()

Output for browser:
-------------------
1. name: "Samsung"  # ek naya variable ban gaya 
2. price: 90000
3. quantity: 23
4. #name: "Iphone 14 Pro" 
5. [[Prototype]]: 

Ouput in node:
--------------
Product { quantity: 23, price: 90000 }
name toh print bhi nahi ho rahe hein node pe. 
```



1. I tried of changing the name of the phone with name but it will create a new variable instead of changing the current name of the Product. 
2. If you are trying to console the product `[console.log(iPhone)]then we will get to see the #name (which i have done private)
3. so according to the private thing the particular data member(#name) is not accessible that's true I am getting the value just because I have console it, If I will access it individually then I wont be able to access it.
4. But i can access it inside the class
```JS
console.log(iPhone.#name)
// Property '#name' is not accessible outside class 'Product' because it has a private identifier.ts(18013)

// visual studio code mein aggar aap (iPhone.#name = "Samsung") karoge toh apko VS COode mein error milega but browser  mein apko koi error nahi milega. toho yeah dono jagah mein allage kaise kam kar raha hai. 

// according to the above explanation access nahi hona chahiye private variables
// par browser mein toh ho raha hai . Bhale hi Vs Code mein nahi ho raha hai par browser mein kyun ho raha hai uske bare mein baat karte hein ...
```

```JS
#getData(){
// private method
}
```

#### Accessing  variable/private variable inside the class
Private variable cant be access outside the class, But yes you can access it inside the class,
but you can access these private variable outside the class in the browser

**Accessing private variables inside the class**.
```JS
class Products {
	#name;
	price;
	#quantity;
	#description
}

productsInfo(){
		console.log(this.#name, this.#quantity, this.#description, this.price)
}
```
**Accessing private variables outside the class**
Private variables are not accessible outside the class
```JS
let iPhone = new Product('Iphone 14 Pro',90000, 23)
console.log(iPhone.#name) // not allowed to access outside the class
```

#### Getter and Setter methods
These methods are helpful for the user to get and set vales of our data members, This will also help us to write validation logic so that no one can allocate random values to our data members.


```JS
setPrice(p){
	if(p>this.#price){
		this.#price = p
	}else{
		console.log('Invalid price)
	}
}

getPrice(){
	return this.#price
}

iPhone.setPrice(80000)
```
##### Another short form for getter setter method
```JS
class Products {
	#name;
	price;
	#quantity;
	#description
}
constructor(productName, productPrice, productQuantity, productDescription){

	this.#name = productName,
	this.#price = productPrice,
	this.quantity = productQuantity,
	this.#description = productDescription
}
set description(d){
	if(d.length === 0){
		console.log('Invalid description')
		return;
	}else{
		this.#description = d
	}
}

get description(){
	return this.#description
}

let iPhone = new Product('IPhone',90000, 10, 'Iphone 14 Pro')
iPhone.description = "iPhone 14 pro max" // setter function call ho raha hai
console.log(iPhone.description) // getter function call ho raha hai
iPhone.productDetails()
```

In this method of setter and getter while updating using `set description(parameter mandatory)`
and from where we will get the parameter let me show you with an example:

`iPhone.description = "iPhone 14 pro max"` this `"iPhone 14 pro max"` will go inside the d and will act as a parameter.

```JS
iPhone.description = "iPhone 14 pro max"
iPhone.productDetails()
```
`iPhone.description = "iPhone 14 pro max"` will help us to access the setter and pass something as an argument to the setter function

In JavaScript every class we write is a wrapper over function,. In older version of JS `class` didin't exist, Hence to do the blue printing we used to have only functions

```JS
function Product(productName, productPrice, productQuantity){
	this.name = productName,
	this.proce = productPrice,
	this.quantity = productQuantity
	this.displayProduct = function(){
	console.log(this)

    }
}
let iPhone = new Product('Iphone',90000, 10)
a.displayProduct()
```

Now the above product function acts as a function constructor and it takes some parameters and uses this keyword to assign them. To call this constructor we do
```JS
let iphone = new Product('Iphone','90000','10')
console.log(iPhone)
```
here also I am calling function constructor of Product with new keyword, And the new keyword do the following steps: 
1. Create an empty Object. 
2. Assign the this keyword in the function constructor and pass the new Object into it. 
3. Do the prototype
4. If constructor returns a new object manually, It will return the same from the constructor else if no object is manually returned or a non object value is returned then we returns value of this from the constructor
in step 2 when we execute the constructor, we assign data members into it like name, price, quantity and execute member functions

but now-a-days function constructor is not used that much we will find this type of function constructor in old code/ legacy code


##### Static Variable
Static members is always associated with class not with Object. 
We can access static variable with the help of `className.youwanttoaccess`
We can never access static variable with the help of an object

```JS
class Product {
	static x = 10;
	constructor(name,price,quantity
		this.name = name;
		this.price = price;
		this.quantity = quantity
	by si
}

const data = new Product('iPhone',900000, 20)
console.log(data.x) // not accessible here. 

console.log(Product.x) // yes it is accessible

```

data is an object and Product is an class, the value of x here is accessible with the help of Product(class) not data(object)

I can also update the static value by simply writing: 
```JS
Product.x = 20 
console.log(Product.x) // 20
```

###### Is it required to make static variable as private
No it doesn't make any sense to make static variable as private
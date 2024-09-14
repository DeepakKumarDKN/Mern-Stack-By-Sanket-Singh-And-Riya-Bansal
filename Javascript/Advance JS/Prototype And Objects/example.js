// // // class Product{

// // // 	name;
// // // 	price;
// // // 	category;
// // // 	description;
// // // 	rating;

// // //     constructor(){
// // //         console.log('constructor called')
		
// // //     }

// // // 	addToCart(){
// // // 		console.log('Product added to the cart')
		
// // // 	}
// // // 	removeFromCart(){
// // // 		console.log('Product removed from the cart')
// // // 	}
// // // 	displayProduct(){
// // // 		console.log('Product Displayed')
// // // 	}
// // // 	buyProduct(){
// // // 		console.log('Product Brought')
// // // 	}
	
	
// // // }

// // // let vivo = new Product()
// // // console.log(vivo)

// // class Product{

	
// //     constructor(productName, productPrice, productCategory, productDescription, productRating){
// //         this.name = productName
// // 		this.price = productPrice
// // 		this.category = productCategory
// // 		this.description = productDescription
// // 		this.rating = productRating
// // 	}
	
// // }

// // let vivo = new Product('Vivo V40',41000,'Mobile','Sleek Design and Flagship Phone','4.9')
// // console.log(vivo)

// const obj = {
// 	a:20,
// 	b:30,
// 	fn : function(){
// 		console.log(`${obj.a}`)
// 	}	
// }

// let data = obj
// data.fn()


let obj = {
	x:1, 
	y:2,
	fn: function(){
		const printVariables = () => {
			console.log(this.x, this.y)
			console.log(x,y)
		}
		printVariables()

	const printVariables1 = () => {
		this.x=3
		this.y=4
		console.log(this.x, this.y)
		console.log(x,y)
	}
	printVariables1()
	}

}

obj.fn()

// in the above code we need to remobe console.log(x,y) line number 68 because 
// we havn't defined any x and y here we are just trying to access the key value pair
// same goes with line number 76 there also wehave to remove the line 

// now come to printVariables1 there the value of x inside the object will be  updated 
// because in line number 73,74 we are trying to update the value of x in line number 
// 63,64 and it will get updated also so we will get 3,4 as output
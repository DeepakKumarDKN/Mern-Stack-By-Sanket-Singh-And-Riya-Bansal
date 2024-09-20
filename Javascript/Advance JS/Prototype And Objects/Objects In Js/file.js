// const obj = {
//     x:10,
//     y:20,
//     data:function(){
//         const result = () => {
//             console.log(this.x)
//         }
//         result()

//     }
// }


// obj.data()

/**Example Explained in class how to make data members private */

// class Product {
//     #name;
//     quantity;
//     price
    
//     constructor(productName, productPrice, productQuantity){
//         this.#name = productName, 
//         this.price = productPrice,
//         this.quantity = productQuantity
//     }
// }

// let iPhone = new Product('Iphone 14 Pro',90000, 23)
// console.log(iPhone)

//**Writting some validation logic using getter and setter methods */

class Product {
    #name; //name , price ko private rakha hua hai baki sab normal hai
    quantity;
    #price
    #description

    constructor(productName, productPrice, productQuantity,productDescription){
        this.#name = productName;

        if(productPrice>0){
            this.#price=productPrice
        };
        this.#price = productPrice;
        this.quantity = productQuantity
        this.#description = productDescription
    }
    //settermethod
	setPrice(p){
		if(p> this.#price){
			this.#price = p
		}else{
			console.log(`Invalid price`)
		}
	}

    // setter method for quantity
    setQuantity(p){
        if(p> this.quantity){
            this.quantity = p
        }else{
            return
        }
    }

    //gettermethod
    displayProductPrice(){
        console.log(this.#price)
    }

    displayProductDetails(){
        console.log(this)
    }

    //Sort form of getter and setter method

    get description(){
        return this.#description
    }

    set description(d){
        this.#description = d
    }
}

let iPhone = new Product('deepak',8000, 10, 'iPhone phone he re baba')
iPhone.description = "hello"
iPhone.setQuantity(5)
iPhone.displayProductDetails()



class Product {
    #name
    #price
    quantity
    #description

    constructor(productName, productPrice, productQuantity, productDescription){
        this.#name = productName,
        this.#price = productPrice,
        this.quantity = productQuantity,
        this.#description = productDescription

    }

    productDetails(){
        console.log(` 
            Name: ${this.#name}, 
            Price: ${this.#price}, 
            Quantity: ${this.quantity}, 
            Description: ${this.#description}`
        )
    }

    // This is one way of changing the productName
    changeProductName(d){
        //this.#name = d
    }

    // changing the product name by using setter and getter

    set description(d){
       console.log('setter called')
       if(d.length === 0){
        console.log('Invalid description')
        return;
       }else{
        this.#description = d
       }
    }

    get description(){
        console.log('getter called')
        return this.#description
    }

    setProductQuantity(q){
        if(this.quantity > q){
            console.log("It's Too Less")
        }else{
            this.quantity = q
        }
    }

    // Changing price using setter and getter
    set price(p){
        this.#price = p
    }
    get price(){
        return this.#price
    }
    
}
 
let iPhone = new Product('IPhone',90000, 10, 'Iphone 14 Pro')
iPhone.description = "iPhone 14 pro max"
console.log(iPhone.description)
iPhone.productDetails()


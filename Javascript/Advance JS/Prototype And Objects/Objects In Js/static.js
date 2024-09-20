class Product {
    static #x = 10;

    constructor(name,price,quantity){
        this.name = name,
        this.price = price,
        this.quantity = quantity
        console.log(Product.x)
        
    }
}

let data = new Product('Iphone',20000, 10)

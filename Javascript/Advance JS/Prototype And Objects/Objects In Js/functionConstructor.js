function Product(productName, productPrice, productQuantity){
    this.name = productName,
    this.proce = productPrice,
    this.quantity = productQuantity
    
    this.displayProduct = function(){
        console.log(this)
    }

}


let a = new Product('Iphone',90000, 10)
a.displayProduct()
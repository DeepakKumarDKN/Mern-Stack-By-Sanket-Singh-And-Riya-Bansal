class Product {
    constructor(builder){
        this.name = builder.name;
        this.price = builder.price;
        this.category = builder.category;
        this.description = builder.description;
        this.rating = builder.rating
        console.log(builder)
        
    }
    
    

    setPrice(pr){
        console.log('Setter called', this.price)
        console.log(pr)
        if(pr > 0 && typeof pr === "number") {
            this.price = pr
        }    
       
    }
    getPrice(){
        console.log(this.price)
    }

}
const data = new Product({
    name :'iPhone',
    price : 90000,
    category : 'Electronics',
    description : 'Apple I Phone',
    rating : 4.5
})

data.setPrice(1000000)

data.getPrice()


class Product {
    #price;
    #name;
    #description; 

    constructor(builder){

        // validations before object creation

        this.name = builder.name;
        if(builder.price > 0 && typeof (builder.price) === 'number'){
            this.#price = builder.price
        }else{
            return {}
        }
        this.#description = builder.description
    }


    static get Builder(){
        class Builder {
            constructor(){
                this.name = "deepak",
                this.price = 90000,
                this.description = "IPhone 14 Pro Max"
            }

            setName(incommingname){
                this.name = incommingname;
                return this;
            }

            setPrice(incommingprice){
                this.price = incommingprice;
                return this
            }
            
            setDescription(incommingdesc){
                this.description = incommingdesc;
                return this
            }
            build(){
                return new Product(this)
            }
            
        }
        return Builder;
    }
}


const builder = new Product.Builder()
    .setName('Deepak Kumar Nayak')
    .setPrice(89088)
    .setDescription('Iphone 13 max pro')
    
console.log(p)
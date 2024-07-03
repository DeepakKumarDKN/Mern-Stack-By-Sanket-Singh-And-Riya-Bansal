// check for eqilaterial, Scalene, Isosceles Triangle. 
// given the side length of a traingle in the  form of values check if the given length is eqilaterial, Scalene, Isosceles Triangle.  

/**
 * Notes: 
 * Equilateral Triagle : all the sides are equal 
 * a=8, b=8, c=8
 * 
 * Isosceles Triangle : any of the two sides must be equal
 * a=8 , b=10, a=8
 * 
 * Scalene Triangle: All sides should be diffrent/ none of the sides are equal
 * a=2, b=4 , c=8
 */

let a = 7, b = 7, c =9

if(a==b && b==c && c==a){
    console.log('It is an equilateral Triangle')
}else if(a==b || b==c || c==a){
    console.log('It is an Isosceles Triangle')
}else{
    console.log('its a scalene Triangle')
}



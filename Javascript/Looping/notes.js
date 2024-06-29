/**
 * Bitwise Operator:
 * -----------------
 * bitwise and (&) 
 * ----------------
 * bitwise and 2 operands pe kam karega for example 5 and 6. 
 * aggar mein 5 and 6 liya hai toh toh 5 ka jo binary form hota hai us mein kam karega and us tarah 6 ka jo binary form hai usmein kam kiya jaega 
 * 
 * Binary form of 5 => 1 0 1
 * Binary form of 6 => 1 1 0 
 * 
 * 1 0 1
 * 1 1 0
 * ------
 * 1 0 0 => 4
 * 
 * Bitwise 0R:
 * -----------
 * 5 | 4
 * Binary form of 5 => 1 0 1
 * Binary form of 4 => 1 0 0
 * 
 * 1 0 1
 * 1 0 0
 * -----
 * 1 0 1 => 5
 * 
 * Bitwise XOR:
 * ------------
 * true true false 
 * true false true
 * false true true 
 * false false false
 * 
 * 5 ^ 4
 * Binary form of 5 => 1 0 1
 * Binary form of 4 => 1 0 1
 * 
 * 1 0 1
 * 1 0 0
 * -----
 * 0 0 1 => 1
 */

/**
 * Loops:
 * ------
 * for Loop: 
 * --------
 * for(let i=0; i<=2; i+=1){
 *      console.log(i)
 * }
 * 
 * while Loop:
 * -----------
 * let i=0
 * while(i<=10){
 *      console.log(i)
 *      i+=1
 * }
 * 
 * 
 * 
 */
let i=0;
do{
    
    console.log(i)
    i+=1
}while(i<=10)

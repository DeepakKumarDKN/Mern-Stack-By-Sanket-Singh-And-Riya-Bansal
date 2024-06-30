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
 * Unary Operator:
 * ----------------
 * let a = 1; 
 * console.log(a++) => this means it will first print the value of a which is 1 and then increase the value of a
 * console.log(a) => 2 here i will get the increment value of a. 
 * a++ => postfix (pehle use ho gaya and increment baad mein)
 * 
 * 
 * ++a => eska matlab hai prefix operator pehle increment hoga andd then ham usko use karte hein.
 */

/**
 * Break:
 * ------
 * break terminates the nearest loop immediately.
 * agger kisi bhi point of time pe aggar harama loop break ko hit hua then 
 * us case mein loop immediately exit out kar jaega.
 * 
 * lets discuss it properly with an example: 
 * -------------------------------------------
 * let i = 0;  
 * while(i<=10){
 *  if(i % 4 ==0){
 *      break;
 *  }
 * console.log(i)
 * i+=1
 * 
 * es example mein hamara nearest loop konsa hai, line number 83 se shuru hua hai nearest loop 
 * toh woh hame line number 83 wale loop se bahar nikal dega. 
}
 */

/**
 * Continue:
 * ---------
 * continue brings you back to the nearest loop.
 */

/**
 * Functions:
 * ----------
 * 
 */
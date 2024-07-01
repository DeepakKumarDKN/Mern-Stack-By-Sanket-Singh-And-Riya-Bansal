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
 * In sofware development a lot of times we have to resue our logics 
 * and whenever we reuse our logics we need to folow a principle called DRY.
 * 
 * DRY means Dont Repeat Yourself
 * 
 * supoose there are a bunch of statements which we have to use again and again in 
 * our program but instead of writting the same code again and again we can create 
 * a function which allows us no to repeat it but yes we call that function anytime
 * we required
 * 
 * this is a good way of writting the code
 * 
 * Function Statement: 
 * --------------------
 * 
 * function getName(){
 *  console.log('deepak')
 * }
 * 
 * This way of creating a function called function expression.
 * 
 * Function Expression: 
 * --------------------
 * Using function as a variable is called function expression. 
 * let a = function(){
 *  console.log('hello, deepak')
 * }
 * 
 * the major diffrence between these two functions is hoisting
 * can i call the function getName() even before creating it the answer is yes
 * but can i call a function  a() even before execution the answer is no .
 * 
 * during memory creation phase the function getName is being assigned some memory 
 * and that function is assigned to getName. 
 * 
 * but in case of function expression this b is treated like any other variable.
 * it is assigned undefined initrially untill the code hits the line 128 itself.
 * 
 * Function Declaration: 
 * ---------------------
 * Function statement is also known as function declaration. 
 * 
 * Anonymous Function: 
 * -------------------
 * A Function without a name is called Anonymous function 
 * anonymous function are used in a way where function are used as values. 
 * when i say values that mean we can assign it to a variable.
 * but in function statement we cannot use anonymous function. 
 * 
 * Named Function Expression: 
 * --------------------------
 * var b = function xyz(){
 *      console.log('b called')
 * }
 * 
 * Paremeter & Arguments: 
 * ----------------------
 * parameter are used during function defination: 
 * arguments are calling during function calling. 
 * 
 * function getName(name){
 *  console.log(name)
 * }
 * 
 * getName('deepak')
 * 
 * deepak is called arguments. 
 * name  is called parameter. 
 * i can also set a default parameter by writting name = "rahul"
 * let see this with an example:
 * 
 * function getname(name = "rahul"){
 *      console.log(name)
 * }
 * getname()
 * now it will console it rahul. 
 * 
 * 
 * First Class Function/ First Class Citizens:
 * -------------------------------------------
 * so why i am saying functions are first class function because i can pass a function 
 * as an argument to another function.
 * 
 * The ability to used function as an values is called first class functions and can be passed an an 
 * argument to another function and can be returned from the functions
 * 
 * if somebody will say functions are first class citizens that means he is referring to forst class functions
 * 
 * 
 * Example: 
 * ---------
 * function getData(name){
 *  name()
 * }
 * 
 * getData(function(){
 *  console.log('deepak')
 * })
 * 
    const user = function getData(printData){
        return printData();
    }

    function data(){
        console.log('deepak')
    }
    user(data)
 * 
 */

/**
 * Calling A function
 * -------------------
 * function greetingToEveryOne(){
 *      console.log('hello-One')
 *      console.log('Hello-Two')
 * }
 * 
 * greetingToEveryOne() => here i am calling a function 
 * greetingToEveryOne()
 * 
 * Note: i can call it multiple times this is what function is all about creating once 
 * and calling it as much time we want.
 * 
 * 
 * Program for Evan and Odd:
 * -------------------------
 * 
 * function findEvenOdd(num){
 * (num % 9 ===0) ? console.log('even') : console.log('odd')
 * }
 * findEvenOdd(9)
 * 
 * num => parameter (passed during function defination or placeholder variable that we mention during function defination)
 * 9 => argument (passed during function calling)
 * 
 * 
 */


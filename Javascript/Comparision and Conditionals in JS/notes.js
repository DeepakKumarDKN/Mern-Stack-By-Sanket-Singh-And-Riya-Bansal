/**
 * Comparision and Conditionls in JS:
 * -----------------------------------
 * Short Circuiting:
 * -----------------
 * And Operator:
 * -------------
 * and mein aggar pehle operand false hai toh koi farak nahi padhta hai answer hamesha false hi aaega.
 * in and operator if the 1st operator is true then it returns the second operator
 * agger first operator false hua then it doesnot check the second operator it always returns the 1st
 * 
 * 
 * true true true 
 * true false false 
 * false true false 
 * false false false 
 * 
 * console.log(10 && 20) => 20
 * console.log(10 && 0) => 0
 * console.log(0 && 10) => 0
 * console.log(0 && null) => 0
 * console.log(40 and null) => null
 * 
 * Or Operator
 * ------------
 * or operator mein aggar pehla operand true hua then it doesn't check the second it will always return the 1st operand 
 * or operator mein aggar pehle operator false hua then it check the second if it is true then we will get true otherwise we will get false.
 * console.log(10 || 20) => 10
 * console.log(0 || 20) => 20
 * console.log(10 || 0) => 10
 * 
 * 
 * Truthy and Falsy Values:
 * ------------------------
 * thse values which convert to true in the to boolean operation is called truthy values rest are false values: 
 * falsy value: null, undefined, +0, -0, false, " ". 
 * truthy vaues:  
 * 
 * Comparision Operator (<=, >= <, >, ==, ===):
 * ---------------------------------------
 * Abstract Equality Operator (==) => only checks if a and b are equal.
 * Here datatype is not checked thats why i am getting true instead of having the a as int and b as string still i am getting true.
 * and there is a reason behind it why because a is an int type so it wil convert the b to an nt type and it is being done by javascript 
 * we dont have to worry for that. 
 * 
 * aggar meine a mein string use kiya hota and b mein int use kiya hota for example 
 * let a = "10"
 * let b = 10 
 * console.log(a == b) => true 
 * 
 * es example mein b ko convert kiya jaega into string so the change is being done on basics of first operand.
 * 
 *  
 * 
 * Example for (==)
 * -----------------
 * 
 * let a = 10 
 * let b = "10" 
 * console.log(a == b) => true  
 * console.log(a === b) => false
 * 
 * 
 * Strict Equality Operator (===) => it not only checks equal are not but it will checks its datatype:
 * Strict equality will check for numbers as well as for datatype
 * 
 * Example for (===):
 * --------------
 * let a = 10 
 * let b = 10
 * 
 * console.log(a === b ) => true
 * 
 * Abstract not equals operator (!=)
 * ----------------------------------
 * console.log("10" != 10) => false
 * console.log("10" !== 10) => true
 * 
 * Note: Comparison Operator is otherwise called as relational operator.
 */


/**
 * Decission Making:
 * -----------------
 * In programming language we can take decession to do a particular task based on conditions
 * Condition ke hisab se ham koi particluar task ko perform karenge. 
 * 
 * for example: 
 * -----------
 * is user is logged in show him the netflix dashboard or show him the netflix loginpage
 * 
 * let isuserLogin = true;
 * let isPaidUser = true;
 * if(isuserLogin && isPaidUser){
 *      console.log('you will be redirected to nwtflix dashboard')
 * }else{
 *      console.log('please login in first')
 * }
 * 
 * 
 * let userSubscription = 'unsubscribe; 
 * if(userSubscription == 'unsubscribe){
 *      console.log('Show pricing page')
 * }else if(userSubscripion == 'super'){
 *      console.log('Only Hindi Content')
 * }else if(userSubscription == "premium"){
 *      console.log('show all content')
 * }
 * 
 * 
 */
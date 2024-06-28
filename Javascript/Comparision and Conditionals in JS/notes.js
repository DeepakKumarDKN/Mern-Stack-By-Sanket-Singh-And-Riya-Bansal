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
 * Here datatype is not checked thats why i am getting true because b is not int type its a string type.
 * 
 * 
 * 
 * Example for (==)
 * -----------------
 * 
 * let a = 10 
 * let b = "10" 
 * console.log(a == b) => true  
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
 */



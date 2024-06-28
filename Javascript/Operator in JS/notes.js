
//https://262.ecma-international.org/10.0/#sec-abstract-equality-comparison

/**
 * Differet Types of Datatype in js
 * ----------------------------------
 * Numbers mein ham integers ko store kar sakhte hai for example => 8, -10, 3.45, 33, 0
 * Important Note => Javascript mein ek -0 bhi exist karta hai jo ki usually python, c++, golang en sab languges mei hota nahi hai. 
 * 
 * null and undefined:
 * -------------------
 * yeah dono datatype hame sense of emptyness dete hein 
 * undefined is something which is declared but never-defined.
 * suppose there is a variable called x but i havent initialize any value to it. 
 * for example let a;
 * 
 * so here i have declared a variable called x but never assigned any value to it.
 * 
 * Null 
 * ----
 * null matllab khali. null reprsents no value or nothing
 * null aap manually define karenge like let a = null;
 * but undefined ko apko manually define karne ki jarurat nahi hai.
 * 
 * Undefined:
 * -----------
 * undefined is a very special keyword in javascript and it is not there in other languages
 * Javascript code is executed in a very diffrent way it creates a global execution context
 * and alocates memory to al the variables and functions even before a single line of code 
 * is executed, so undefined comes into picture here only. 
 * 
 * let a = 10; 
 * 
 * so here in even before this line gets executed (line number 32) javascript will 
 * allocate memory to a which is known as undefined;
 * 
 * undefined is like taking memory it is very diffrent then not-defined. 
 * suppose i want to acess a value of that variable which i havn't used in the entire program
 * this is called not-defined. (not defined is something which has not been allocated memory.)
 * 
 * 
 * 
 * undefined is not equal to empty, like its not taking any memory space or something 
 * but no its not like that it takes its own memory space its just like a placeholder 
 * which is kept for the timebeing untill and unless some value is assigned to it(variable)
 * till that point it will store its value called undefined. 
 * 
 * BigInt:
 * -------
 * Javascript mein aisa nahi hai ki ham koi aisa big number save  kar sakhte hein.
 * aggar bada number use karna hai toh hame use karna padega BigInt
 * 
 * soo aggar hame ek BigInt likhna hai toh hame last mein n ko append kar sakhte hain for ex.
 * let number = 123456789079663947569503038475472672890506867563782904785758n
 * 
 * aisa last mein n lagane se kya hoga woh pura ka pura number ko print karega. 
 * console.log(number)
 * 123456789079663947569503038475472672890506867563782904785758n
 * 
 * aggar hame chota number use karna hai as BigInt tab bhi ham kar sakhte hein. 
 * let numberTwo = 1234n
 * console.log(number) => 1234n 
 * 
 *
 * Objects:
 * -------
 * Aggar hame key or value ka data lo store karna hai toh ham use karenge objects
 * Example:
 * --------
 * let bioData = {
 *      name : 'deepak',
 *      gmail : 'deepaknnayak34@gmail.com',
 *      location: 'Kolkata'
 *    }
 * 
 * 
 * Primitive Datatype and Reference Datatype:
 * ------------------------------------------
 * 
 * Primitive Datatype:
 * -------------------
 * 
 * let num1 = 6;
 * let num2 = num1
 * 
 * console.log(num1) => 6
 * console.log(num2) => 6
 * 
 * num1++; 
 * 
 * console.log(num1) => 7
 * console.log(num2) => 6
 * 
 * 
 * Reference Datatype (array, objects):
 * --------------------
 * const arrayOne = [1,2,3,4]
 * const arrayTwo = arrayOne
 * 
 * console.log(arrayOne) => [1,2,3,4]
 * console.log(arrayTwo) =>  [1,2,3,4]
 * arrayOne.push(5)
 * 
 * suppose yahan pe meine koi changes kiye jaise ki meine 5 ko insert kiya hai arrayOne mein 
 * aab yahan pe kya hoga ki jo changes meine arrayOne mein kiya tha woh sare changes reflect honge 
 * arrrayTwo mein 
 * 
 * yaho hota hai main diffrence between primitive and reference datatype reference mein
 * arrayOne and arrayTwo dono ko same memmory location ko point out karenge esliye aggar meine 
 * arrayOne mein changes kiya woh sare changes reflect hua arrayTwo mein 
 * 
 * par promitive datatype jaise ki int, string es mein kya hoga aggar maine koi changes kiya num1 mein 
 * toh woh num2 mein reflect nahi hoga kyun ki dono ko allag allag memory location mila hua hai. 
 * 
 * Operators:
 * -----------
 * Arithmetic Operators:
 * ---------------------
 * 2+2 => 4 (2 and 3 are operand + is operator.)
 * 2-3 => -1
 * 2*3 => 6
 * 2/3 => gives quotient
 * 2%3 => 2 (remainder) 9%3 = 0(remainder)
 * 2**3 => 8
 * 
 * Assignment Operator (=, ===, >= <=):
 * ------------------------------------
 * == :  these operator help us to assign value toa variable
 * let a =10; 
 * 
 * Adding 20 to the variable a:
 * -----------------------------
 * a = a+20
 * a => 30
 * 
 * we can also write like a+=20 that means a = a+20
 * 
 * Substracting 20
 * ---------------
 * a-=20
 * a = a-20
 * 
 * Multplying 3:
 * --------------
 * a*=3;
 * a= a*3
 * 
 * Logic Gates(and, or, not ):
 * ---------------------------
 * and (&&)
 * or(||)
 * not(!)
 * 
 * these are called logical operators: 
 * --
 * and logical operator
 * ----------------------
 * and mein dono ko true hona padega , dono condition ko true hona padega otherwise false ho jaega
 * True True True
 * True False False
 * False True False
 * False False False
 * 
 * or logical operator:
 * ---------------------
 * or mein koi ek condition aggar true hoga toh true output milega. 
 * 
 * true true true
 * true false true
 * false true true
 * false flase false
 */



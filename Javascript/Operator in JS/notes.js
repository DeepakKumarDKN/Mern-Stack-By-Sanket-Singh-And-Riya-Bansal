
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
 */
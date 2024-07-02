/**
 * There are three main storage areas in a process:
 *
 * 1. Callstack
 * 2. Kernel Stack
 * 3. Heap Memory
 *
 * Heap Memory:
 * ------------
 * Jab bhi ham koi bhi objects banaenge woh sare objects jo runtime mein hota hai woh sare le sare
 * heap memory ko jaenege
 *
 * Heap Memory ek bahut hi bada wide pool of memmroy hai jismein objects bante hein
 * Heap mein jo bhi objects banenge runtime mein banenge.
 *
 * Kernel Stack:
 * ------------
 *
 * Callstack:
 * ----------
 * Callstack store function calls
 * aap kahin bhi kabhi bhi koi bhi function aggae call karoge toh callstack mein uski ek entry add ho jaegi.
 *
 * every entry added in the callstack by the function call is called as stack frame
 * and stack frame mein hamare functions se related sara data hota hai
 * Callstack is based on the principle of last in first out(LIFO)
 * top se add hoga and remove bhi top se hi hoga
 * Callstack mein function ke bare mein data store hoga
 *
 * Note: aggar function koi value ko return karta hai toh jahan se call hua hoga wahin pe return hoga.
 * aur haan return kiya gaya value ko hame kahin na kahin save karta padhtha hai foe example
 * ek variable mein save karenge and usko console karenge for getting specefic result
 *
 * par aggar hame return nahi kiya manually toh kya hoga..??
 * we will get undefined and it will be returned by JS Automatically.
 *
 * example of getting undefined:
 * ------------------------------
 * function test(){
 *     let x = 10;
 *     x+=2
 * }
 * const ans = test()
 * console.log(ans)
 *
 * solution for notgetting undefined:
 * -------------------------------------
 * function test(){
 *     let x = 10;
 *     return x+=2
 * }
 * const ans = test()
 * console.log(ans)
 *
 * Function with parameters:
 * -------------------------
 * function add(x,y){
 *      return x+y
 * }
 * console.log(add(10,40))
 *
 * i can also perform the same thing with the help of default parameters.
 * its okay of we donot pass any arguments, still we can get the output as
 * 30 though we are using defailt parameter.
 *
 * Example:
 * ---------
 *
 * function add(x=10,y=20){
 *  return x+y
 * }
 * add()
 *
 * Note: But what will happen if i pass both default parameter and arguments at the same time
 * so the preference will be given to the arguments we have passed. lets see this with an example:

function add(x = 10, y = 20) {
  return x + y;
}
console.log(add(40, 70));

* So now my output will be 110 not 30 because we have already passed the arguments. 
* so this is how it works if we pass the arguments as well as default parameters
* we will get the output based on the arguments not default parameters
* and if we are passing any default parameters then we will get the output 
* based on the default parameters. 
* 
*/
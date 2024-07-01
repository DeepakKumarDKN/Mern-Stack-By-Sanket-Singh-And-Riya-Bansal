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
 */
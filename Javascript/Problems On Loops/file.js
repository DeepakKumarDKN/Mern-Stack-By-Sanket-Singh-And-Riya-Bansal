// let isLogin = false;
// let isSubscription = true;
// let isQuaility = true;
// let isPremium = false;

// if(isLogin){
//     console.log('Welcome Deepak')
//     if(isSubscription){
//         if(isQuaility){
//             if(isPremium){
//                 console.log('Start Watch Newely Added Movies')
//             }else{
//                 console.log('You Need To take Premium to watch Newely Added Movies You Can Watch Old Movies')
//             }
//         }else{
//             console.log('Please Take a subscription of Rs.1200 for m0re Clarity')
//         }
//     }else{
//         console.log('Please take a subscription to Wtach')
//     }

// }else{
//     console.log('Please Login')
// }

// let i=0;
// while(i<=10){
//     console.log(i)
//     i+=1
// }

// let i =0;
// let sum =0;
// while(i<=10){
//     sum+=i;
//     i+=1;

// }
// console.log(sum)

// print the numbers from 20 to 1 n decreasing order using while loop;
// let i = 20;
// while(i>=1){
//     console.log(i)
//     i-=1
// }

// prime number
// ------------
// function isPrime(x){

//     for(let i=2; i<=x-1; i++){
//         if(x%i==0){
//             console.log(`${x} not a prime number`)
//             return false
//         }
//     }
//     console.log(`${x} is a prime number`)
// }

// isPrime(11)

// Pattern Printing Questions:
// example :
//--------
// * * * *
// * * * *
// * * * *

// in this example there are 4 rows and in each row we have 4 stars:

/** 
function patternOne(n){
    
    for(let i=1; i<=n; i++){
        let stars = ""

        for(let j=1; j<=n; j++){
            stars+="* "
        }
        console.log(stars)
    }
}

patternOne(4)
*/

/** 
 * pattern Two question: 
 * ---------------------
 * *
 * **
 * ***
 * ****
 * *****
function patternTwo(n){

    for(let i=1; i<=n ; i+=1){
        let stars= ""

        for(let j=1; j<=i; j++){
            stars+="* "
        }
        console.log(stars)
    }
}

patternTwo(5)
*/

/**
 * Pattern Question Three
 * *****
 * ****
 * ***
 * **
 * *
 

function patternThree(n){

    for(let i=1; i<=n; i+=1){
        let stars = ""

        for(let j =1; j<=n-i+1; j++){
            stars+="* "
        }
        console.log(stars)
    }
}

patternThree(5)
*/

/**
 * Pattern Question Four:
 * ----------------------
 * _ _ _ _ *
 * _ _ _ * *
 * _ _ * * *
 * _ * * * *
 * * * * * *
 * 
 * row    spaces    stars
 * -----  -------   ------
 * 1         4         1
 * 2         3         2
 * 3         2         3
 * 4         1         4
 * 5         0         5
 * 
 * so for each row stars = row 
 * for example for row 1 starts = 1
 * for row 2 stars = 2;,
 * for row 3 stars = 3 
 * for row 4 starts = 4 
 * for row 5 starts = 5;
 * 
 * and for spaces for each row spaces = n-i i.e (5-1 = 4), (5-2=3)
 * i value will increase and so on the spaces value will also get adjust according to the value of i; 
 * if n = 5 
 * so n-i = 4 where i value is 1 
 * next time i value will get 2 so n-2
 * 
 * function patternFive(n){

   

    for(let i=1; i<=n; i+=1){
        let str = ""
        for(let j =1; j<=n-i; j+=1){
            str+= '  '
        }

        for(let k = 1; k<=i; k+=1){
            str+="* "
        }
        console.log(str)
    }
    
}
patternFive(5) 
 */

// pattern 6
/**
 * - - - - *
 * - - - * * *
 * - - * * * * *
 * - * * * * * * *
 * * * * * * * * * *
 * 
 * row  space  star 
 * ---  -----  ----
 * 1      4       1
 * 2      3       3
 * 3      2       5
 * 4      1       7
 * 5      0       9
 * 
 * for space we can write (n-row)
 * where row value is 1 so n-1 = 4 space
 * the row value is 2 so n-2 = 3 space and so on 
 * 
 * for star => 
 * ------------
 * 2*(row-1) 2-1 = 1 star 
 * 2*(row-1) 4-1 = 3 star
 * 2*(row-1) 6-1 = 5 star and so on 
 * -----------------------------------
 * function patternSix(n){

    for(let row =1; row<=n; row+=1){
        let spaces = n-row
        let str = ""

        for(j=1; j<=spaces; j+=1){
            str+="_ "
        }
        let stars = 2*row-1;
        for(let i=1; i<=stars; i+=1){
              str+="* "
        }
        console.log(str)
    }
}

patternSix(5)
 * 
 */

/**
 * Pattern Question Seven
 * - - *
 * - * * *
 * * * * * *
 * - * * *
 * - - *
 * 
 * 
 * function PatternSeven(n){

    for(let row=1; row<=n; row++){
        let spaces = n-row
        let stars = " "

        for(j=1; j<=spaces; j+=1){
             stars+="_ "
        }
        let str = 2*row-1
        for(k =1; k<=str; k+=1){
            stars+="* "
        }
        console.log(stars)
    }

}

function restPattern(n){
    for(row=1; row<=n-1; row+=1){
        let spaces = row;
        let stars = ""

        for(j=1; j<=spaces; j+=1){
            stars+="_ "
        }

        let str = 2*(n-row)-1
        for(let k=1; k
            <=str; k+=1){
            stars+=" *"
        }
        console.log(stars)
    }
}


PatternSeven(3)
restPattern(3)
 */

function patternEightUpperOne(n) {
  let row = Math.floor((n - 1) / 2);
  for (let rows = 1; rows <= row; rows += 1) {
    let stars = "";

    for (let j = 1; j <= rows; j += 1) {
      stars += "* ";
    }
    let spaces = (n - rows)-rows; // this one is also correct
    // let spaces = n-2*(rows)
    for (let k = 1; k <= spaces; k += 1) {
      stars += "- ";
    }

    for (let l = 1; l <= rows; l += 1) {
      stars += "* ";
    }
    console.log(stars);
  }
}

function patternEightMiddle(n) {
  for (let row = 1; row <= 1; row += 1) {
    let stars = "";

    for (j = 1; j <= n; j++) {
      stars += "* ";
    }
    console.log(stars);
  }
}

function patternEightLower(n){
    let row = Math.floor((n - 1) / 2);
    for(let rows=1; rows<=row; rows+=1){
        let stars = ""

        let str = (n-rows)-row;
        for(j=1; j<=str; j+=1){
            stars+="* "
        }
        let spaces = 2*rows-1;
        for(k=1; k<=spaces; k+=1){
            stars+="- "
        }
        
       
        for(l=1; l<=str; l+=1){
            stars+="* "
        }
        console.log(stars)
    }

    
}

function printEightFinalPattern(n) {
  patternEightUpperOne(n);
  patternEightMiddle(n);
  patternEightLower(n)
}
//printEightFinalPattern(9);

// GCD Problem:
//--------------

// let a = 28
// let b = 24; 
// let gcd;
// for(let i =1; i<=28; i++){
//     if(a % i == 0 && b %i ==0){
//         gcd = i; 

//     }
// }
// console.log(gcd)

// sum of the digits: 
/**
 * extract the last digit.
 * 
 */ 

// console.log(Math.floor(4136%10))
// console.log(Math.floor(4136/10))

// let sum =0; 
// let x = 4136
// while(x>0){
//     let extract_digit = Math.floor(x%10)
//     sum = sum+extract_digit

//     x = Math.floor(x/10)

// }
// console.log(sum)

// Fibonacci Numbers:

function fibonacci(n){
    if(n==0){
        console.log(0)
        return; 
    }

    if(n>=1){
        console.log(0)
        console.log(1)
    }

    let last = 1; 
    let secondLast = 0; 
    

    for(let i=2; i<=n; i++){
        let ans = last+secondLast;
        console.log(ans)
        secondLast = last;
        last = ans

    }

}
fibonacci(6)
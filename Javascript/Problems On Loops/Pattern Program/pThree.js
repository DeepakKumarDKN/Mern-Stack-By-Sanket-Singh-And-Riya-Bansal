// function printPattern(n){
//     for(let i=1; i<=n; i++){
//         let star = ""
          
//         for(let j=1; j<=n-i; j++){
//             star+="+"
//         }
//         for(let c=n-i; c<n; c++){
//             star+="*" 
//         }
//         console.log(star)
//     }
// }
// printPattern(4)


function printPattern(n){

    for(let row = 1; row<=n; row+=1){
        let star = ""
        let spaces = n-row;

        for(let j =1; j<=spaces; j+=1){
            star+="= "
        }

        let stars = row; 
        for(let col =1; col<=stars; col+=1){
            star+="* "
        }
        console.log(star)
    }

}

printPattern(5)

/*

Output:
--------

        * 
      * *
    * * *
  * * * *
* * * * *

*/
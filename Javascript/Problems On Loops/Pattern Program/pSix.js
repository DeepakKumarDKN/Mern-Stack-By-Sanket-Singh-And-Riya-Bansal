/*

_ _ *
_ * * *
* * * * *
_ * * *
_ _ *

*/

function upperTriangle(n){

    for(let row=1; row<=n; row++){
        let star=""
        let spaces = n-row;

        for(j=1; j<=spaces; j++){
            star+="_ "
        }
        let stars = 2*row-1;
        for(col = 1; col<=stars; col++){
            star+="* "
        }
        console.log(star)
    }
}


function lowerTriangle(n){

    for(let row=1; row<=n-1; row+=1){
       
        let star = "";
        let spaces = row
        for(let j=1; j<=spaces; j+=1){
            star+="_ "
        }

        let stars = 2*(n-row)-1;
        for(let col=1; col<=stars; col++){
            star+="* "
        }
    
        
        console.log(star)
    }

 }

upperTriangle(3)
lowerTriangle(3)


//note : while performing any decreasing logic just substract from the row.

/*

* * * * *
* * * *
* * *
* *
*

*/

function printPattern5(n){
    for(let row =1; row<=n; row++){
        let star = "";
        for(let j =1; j<=n-row+1; j++){
            star+="* "
        }
        console.log(star)

    }
}

printPattern5(5)
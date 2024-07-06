// * * * *
// * * * *
// * * * *
// * * * *

// function printPattern(n){

// for(let i=1; i<=n; i++){
//     let star = ''
//     for(j=1; j<=n; j++){
//        star+= "* "
//     }
//     console.log(star)
// }
// }
// printPattern(4)

function patternOne(n){
    for(let row=1; row<=n; row++){
        let star = ""
        for(j=1; j<=n; j++){
            star+="* "
        }
        console.log(star)
    }
}

patternOne(5)
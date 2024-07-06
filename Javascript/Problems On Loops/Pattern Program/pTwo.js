function printPattern(n){
    for(let i=1; i<=n; i++){
    let star = ""
    for(j=1; j<=i; j++){
        star += "* "
    }
    console.log(star)
    }
}
//printPattern(10)

function printPatternThree(n){
    for(let i=1; i<=n; i++){
        let star = ""
        for(let j=0; j<=n-i; j++){
            star += "* "
        }
        console.log(star)
    }
}
//printPatternThree(5)



// function printPattern4(n){
//     for(let i=0; i<=n; i++){
//         let star = ""
//         for(j=0; j<=n; j++){
//             star+=" *"
//         }
//         console.log(star)
//     }
// }
// printPattern(5)


function printPattern2(n){

    for(let row =1; row<=n; row++){
        let star = ""

        for(j=1; j<=row; j++){
            star+="* "
        }
        console.log(star)
    }
}

printPattern2(5)
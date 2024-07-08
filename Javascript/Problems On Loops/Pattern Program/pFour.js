function pattern4(n){
    let m = 0;

    for(let row=1; row<=n; row++){
        let star=""
        let spaces = n-row;
        
        for(j=1; j<=spaces; j++){
            star+="= "
        }
        let stars = row+m; 
        for(let col =1; col<=stars; col++){
            star+="* "
        }
        m+=1
        console.log(star)
     
    }
}

//pattern4(5)

// solution by sanket sir 

function patternFour(n){
    
    for(let row =1; row<=n; row+=1){
        let star=" "
        let spaces = n-row;

        for(let j =1; j<=spaces; j++){  
            star+="= "
        }
        let stars = 2*row-1
        for(let col=1;  col<=stars; col++){
            star+="* "
        }
        console.log(star)
    }
}
patternFour(5)
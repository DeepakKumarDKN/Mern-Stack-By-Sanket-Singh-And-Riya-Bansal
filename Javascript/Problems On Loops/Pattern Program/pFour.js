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

pattern4(5)
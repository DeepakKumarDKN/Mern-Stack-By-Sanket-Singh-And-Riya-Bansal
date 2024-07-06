function isPrime(x){
  for(let i=2; i<=x-1; i+=1){
    if(x % i == 0){
        console.log(`${x} not a prime number`)
        return false
    }
  }
  console.log(`${x} is a prime number`)
}
isPrime(43)
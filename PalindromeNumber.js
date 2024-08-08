function checkPalindrome(n){
  
    if(n < 0){
        return false;
    }
    let original = n;
    let reversed = 0;
    while(n>0){
        let digit = n%10;
        reversed = reversed*10 + digit
        n = Math.floor(n/10)
    }
    return original === reversed;
}

let n = 
console.log(checkPalindrome(n))

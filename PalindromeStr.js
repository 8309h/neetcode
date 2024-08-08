function Palindrome(str){
    let originalStr = str;
    let reversed = "";
    str = str.toLowerCase();

    for(let i=str.length-1;i>=0;i--){
        reversed+= str[i];

    }
    if(reversed == originalStr){
        console.log("true")
    }else{
        console.log("Flase")
    }
}

let str = "abcdxcba";
let res = Palindrome(str);
console.log(res)
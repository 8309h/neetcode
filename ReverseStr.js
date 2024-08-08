function ReverseStr(str){
    let bag = "";
    for(let i=str.length-1;i>=0;i--){
        bag +=str[i];
       
    }
    return bag;

}
let  str = "Harshal";
let result = ReverseStr(str);
console.log(result);

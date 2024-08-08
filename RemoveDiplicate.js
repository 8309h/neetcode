let arr = [1,2,3,4,5,5,4,6];
function remobeDuplicate(arr){
    let set= new Set();
    for(let i=0;i<arr.length;i++){
        set.add(arr[i]);

    }
    console.log(set)

}
let res =  remobeDuplicate(arr);
console.log(res)\\
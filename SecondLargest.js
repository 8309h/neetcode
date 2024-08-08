let arr = [10,12,3,4,20,19];

function secondLarge(arr){
    let largest = -Infinity;
    let secondLargest = -Infinity;


    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            secondLargest = largest;
            largest = arr[i]

        }else if(arr[i]> secondLargest && arr[i] !== largest){
            secondLargest= arr[i];

        }
    }
    return secondLargest
}
let res =secondLarge(arr);
console.log(res)
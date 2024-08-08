
let arr1 = [1,2,3,4,5,6,7];
let arr2 = [5,6,7,8,9,10];

function MergeArr(arr1,arr2){
    let i=0;
    let j=0;
    let mergeArray=[];

    while(i<arr1.length && i<arr2.length){
        if(arr1[i] < arr2[j]){
            mergeArray.push(arr1[i]);
            i++
        }else{
            mergeArray.push(arr2[j]);
            j++;
        }
    }
    while(i<arr1.length){
        mergeArray.push(arr1[i])
        i++;
    }
    while(j<arr2.length){
        mergeArray.push(arr2[j]);
        j++;
    }
    return mergeArray
    
}
let res = MergeArr(arr1,arr2);
console.log(res)
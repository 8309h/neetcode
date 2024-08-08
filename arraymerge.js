// // [4:24 PM] Sandeep Gausi
// var array1 = ["Vijendra", "Singh"];
// var array2 = ["Singh", "Shakya"];
 

// function mergeArray(array1,array2){
//     let mergedarry = [...array1,...array2]
   

//     // for(let i=0;i<array1.length;i++){
//     //     mergedarry.push(array1[i]);
//     // }
//     // for(let j=0;j<array2.length;j++){
//     //     mergedarry.push(array2[j])
//     // }

//      let set = new Set();
//      for(let i=0;i<mergedarry.length;i++){
//         set.add(mergedarry[i])
//      }

//      return set.size;


// }

// let answer = mergeArray(array1,array2);
// console.log(answer)



const arr = [{ id: 15 },{ id: -1 },{ id: 0 },{ id: 3 },{ id: 12.2 },{},
    { id: null },{ id: NaN },{ id: "undefined" },
];


function operation(id){
     let res 
    //  res = arr.find(obj => obj.id === id) 
    //  return res

    res = arr.filter(obj => obj.id > 3)
    // return res

    // let sum = 0;
    // res.forEach(obj => sum += obj.id)
    // return sum;
    
    // res.reduce(acc,obj => {
        // acc = acc + obj.id
        // return acc
       let ans = res.reduce((acc,obj) => {acc + obj.id}, 0)
       return ans

    

}
let id = 3;
let answer = operation(id);
console.log(answer)

db.shipment.find({order: id});

// Set
// 1) set is the collection of unique Element.
// 2) duplication are not allowed.
// 3) operation adding ,removing and check presence of Element.


const mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(2); 
mySet.add(4);
mySet.add(5);
mySet.add(6);

console.log(mySet.has(1)); // true
console.log(mySet.has(3)); // false

mySet.delete(1);
console.log(mySet.size); // 1

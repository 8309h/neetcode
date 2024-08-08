// Deep cloning an object in JavaScript means creating a new object that is an exact copy of the original, including all nested objects. 
// This is different from a shallow copy, which only copies the top-level properties and retains references to nested objects. 
// A deep clone ensures that changes to the cloned object do not affect the original object and vice versa, even for nested properties.

// There are several ways to deep clone an object in JavaScript, 
// and the choice depends on the use case and the complexity of the object.
//  Here are some common methods:
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }
  
  let original = { a: 1, b: { c: 2 } };
  let clone = deepClone(original);
  
  clone.b.c = 3;
  console.log(original.b.c); // Output: 2
  console.log(clone.b.c); // Output: 3
  
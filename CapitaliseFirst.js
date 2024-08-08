function capitalizeFirstLetterOfEachWord(str) {
    return str.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    })
  }
  
  // Example usage
  console.log(capitalizeFirstLetterOfEachWord('hello world')); // Output: 'Hello World'
  console.log(capitalizeFirstLetterOfEachWord('capitalize the first letter of each word')); // Output: 'Capitalize The First Letter Of Each Word'
  
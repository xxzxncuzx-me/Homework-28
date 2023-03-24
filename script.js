const arr = [1, 2, 7, 3, 4, 7, 7, 5, 6, 7];

function removeElement(array, item) {
  if (typeof array !== 'object') {
    throw new Error('Invalid type of parametr')
  } 
  for (let i = array.length - 1; i >= 0; i--) { 
    if (array[i] === item) {
     array.splice(i, 1);
    }
   }
}

removeElement(arr, 7)

module.exports = removeElement
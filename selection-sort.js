/*jshint esversion: 6 */

let myArray = [9,2,5,6,4,3,7,10,1,8,11];

function swap(myArray, i, j){
  var tmp = myArray[i];
  myArray[i] = myArray[j];
  myArray[j] = tmp;
}

function selectionSort(myArray) {
  for (var i = 0; i < myArray.length; i++) {
    var min = i;
    for (var j = i + 1; j < myArray.length; j++) {
      if(myArray[j] < myArray[min]){
        min = j;
      }
    }
    if(i !== min){
      swap(myArray, i, min);
      console.log(myArray);
    }
  }
  return myArray;
}

console.log(selectionSort(myArray));

module.exports =selectionSort;
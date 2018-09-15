chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}
function addElementToBeginningOfArray(array, element) {
	  return [element, ...array]
	}

function addElementToEndOfArray(array, element){
 [...array, element];
 return array
}

function addElementToEndOfArray(array, element){
 return [element, ...array];

}
function destructivelyAddElementToEndOfArray(array, element){
  array.push(element);
  return array;
}

accessElementInArray = function(array, index) {
	  return array[index]
	}
	
removeElementFromEndOfArray = 	function(array){
	  return array.shift()
	}

function destructivelyRemoveElementFromBeginningOfArray(array) {
	  array.shift()
	  return array
	}

	function destructivelyRemoveElementFromEndOfArray(array) {
	  array.pop()
	  return array
	}
	function removeElementFromEndOfArray(array) {
	  array.slice([0, array.length -1])
	   
	}
	
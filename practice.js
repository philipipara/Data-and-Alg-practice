//Three Number Sum
//Write a function that takes non-empty array of distninct integers and a target sum
//Find all triplets that sum to target, should be ordered in ascending order

function threeNumberSum(array, targetSum) {
    array.sort((a,b) => a-b);
    const triplets = [];
    for(let i = 0; i < array.length -2; i++) {
        let left = i + 1;
        let right = array.length - 1;
        while(left < right) {
            const currentSum = array[i] + array[left] + array[right];
            if(currentSum === targetSum) {
                triplets.push([array[i], array[left], array[right]]);
                left++;
                right--;
            } else if (currentSum < targetSum) {
                left++
            } else if (currentSum > targetSum) {
                right--
            }
        }
    }
    return triplets;
}

//Invert Binary Tree

function invertBinaryTree(tree) {
    if(tree === null) return;
      swapLeftAndRight(tree);
      invertBinaryTree(tree.left);
      invertBinaryTree(tree.right);
  }
  
  function swapLeftAndRight(tree) {
      const left = tree.left;
      tree.left = tree.right;
      tree.right = left;
  }
  
  // This is the class of the input binary tree.
  class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }


  //Write a function that takes in an array of integers and returns an array
  //of length 2 representing the largest range of integers conatined in that array
  function largestRange(array) {
    
      let bestRange = [];
      let longestLength = 0;
      const nums = {};
      for(const num of array) {
          nums[num] = true;
      }
      for(const num of array) {
          if(!nums[num]) continue;
          nums[num] = false;
          //split the array
          let currentLength = 1;
          let left = num -1;
          let right = num + 1;
          //check left side
          while(left in nums){
              nums[left] = false;
              currentLength++;
              left--
          }
          //check right side
          while(right in nums) {
              nums[right] = false;
              currentLength++
              right++
          }
          if(currentLength > longestLength){
              longestLength = currentLength;
              bestRange = [left + 1, right -1];
          }
      }
       return bestRange;
  }
  

//Write a function that takes in an array of integers and returns
//a sorted version of that array. Use Quick Sort alg

  function quickSort(array) {
    quickSortHelper(array, 0, array.length - 1)
      return array;
  }
  
  function quickSortHelper(array, startIdx, endIdx) {
      if(startIdx >= endIdx) return;
      const pivotIdx = startIdx;
      let leftIdx = startIdx + 1;
      let rightIdx = endIdx;
      while(rightIdx >= leftIdx) {
          if(array[leftIdx] > array[pivotIdx] && array[rightIdx] < array[pivotIdx]) {
              swap(leftIdx, rightIdx, array);
          }
          if(array[leftIdx] <= array[pivotIdx]) leftIdx++;
          if(array[rightIdx] >= array[pivotIdx]) rightIdx--;
      }
      swap(pivotIdx, rightIdx, array);
      const leftSubarrayIsSmaller = rightIdx - 1 - startIdx < endIdx - (rightIdx + 1);
      if(leftSubarrayIsSmaller) {
          quickSortHelper(array, startIdx, rightIdx - 1);
          quickSortHelper(array, rightIdx + 1, endIdx);
          
      } else {
          quickSortHelper(array, rightIdx + 1, endIdx);
          quickSortHelper(array, startIdx, rightIdx - 1);
      }
  }
  
  function swap(i, j, array) {
      let temp = array[j];
      array[j] = array[i];
      array[i] = temp;
  }
  

  //Write a function that takes in a string made of brackets ((, [, {, ), ], })
  //Function should return boolean if string is balanced in regards to brackets
  //Balanced means has as many opening brackets as it does closing that matches

  function balancedBrackets(string) {
    const open = '([{';
      const closing = ')]}';
      const matching = {')': '(', ']': '[', '}': '{'};
      const stack = [];
      for(const char of string) {
          if(open.includes(char)) {
              stack.push(char);
          } else if (closing.includes(char)){
              if(stack.length == 0) {
                  return false;
              }
              if(stack[stack.length - 1] === matching[char]) {
                  stack.pop();
              } else {
                  return false;
              }
          }
      }
      return stack.length === 0;
  }


//Write a function that takes in an n by m two dimensional array, that can be squared
//shaped when n = m and returns one dimensional array of all the arrayss elements in zigag order

  function zigzagTraverse(array) {
    const height = array.length -1;
      const width = array[0].length -1;
      const result = [];
      let row = 0;
      let col = 0;
      let goingDown = true;
      while(!isOutOfBounds(row, col, height, width)){
          result.push(array[row][col]);
          if(goingDown) {
              if(col === 0 || row === height){
                  goingDown = false;
                  if(row === height) {
                      col++
                  } else {
                      row++
                  } 
              } else {
                      row++;
                      col--;
                  }
              } else {
                  if(row === 0 || col === width) {
                      goingDown = true;
                      if(col === width) {
                          row++
                      } else {
                          col++;
                      }
                  } else {
                      row--;
                      col++;
                  }
              }
      }
      return result;
  }
  
  //helper function
  function isOutOfBounds(row, col, height, width){
      return row < 0 || row > height || col < 0 || col > width;
  }


//Given an array, find the three largest numbers in the array and return an array sorted with three largest numbers
function findThreeLargestNumbers(array) {
	const threeLargest = [null, null, null];
	for(const num of array){
		updateLargest(threeLargest, num);
	}
	return threeLargest;
}


function updateLargest(threeLargest, num) {
	if(threeLargest[2] === null || num > threeLargest[2]) {
		shiftAndUpdate(threeLargest, num, 2);
	  } else if(threeLargest[1] === null || num > threeLargest[1]){
			shiftAndUpdate(threeLargest, num, 1);
		} else if(threeLargest[0] === null || num > threeLargest[0]){
			shiftAndUpdate(threeLargest, num, 0);
		}
	}

function shiftAndUpdate(array, num, idx) {
	for(let i = 0; i <= idx; i++) {
		if (i === idx) {
			array[i] = num;
		} else {
			array[i] = array[i + 1];
		}
	}
}
  

//use bubble sort to take an array and sort the numbers

function bubbleSort(array) {
    let isSorted = false;
      //counter helps keep track if highest number so does not have to keep iterating through the full array
      let counter = 0;
      while(!isSorted){
          isSorted = true;
          for(let i = 0; i < array.length - 1 - counter; i++) {
              if(array[i] > array[i + 1]){
                  swap(i, i + 1, array);
                  isSorted = false;
              }
          }
          counter++;
      }
        return array;
  }
   //helper to swap numbers in array to sort 
  function swap(i, j, array){
      const temp = array[j];
      array[j] = array[i];
      array[i] = temp;
  }

  //use insertion sort

  function insertionSort(array) {
    for(let i = 1; i < array.length; i++){
          let j = i;
          while (j > 0 && array[j] < array[j -1]){
              swap(j, j -1 , array);
              j -=1;
          }
      }
      return array
  }
  
  function swap(i, j, array){
      const temp= array[j];
      array[j] = array[i]
      array[i] = temp;
  }


//Given a two-dimensioal array with distinct integers and a target number.
//The rows and cols are already sorted. Write a function that returns a given
//target number, if the target number is not in the matrix return [-1, -1]

function searchMatrix(matrix, target) {
    let row = 0;
      let col = matrix[0].length -1;
      while (row < matrix.length && col >= 0) {
          if(matrix[row][col] > target) {
              col--
          } else if(matrix[row][col] < target){
              row++
          } else {
              return [row, col]
          }
      }
      return [-1, -1]
  }


//Given an array of distinct pos. integers representing coin denominations and single non-negative integer n
//representing a target amount of money write a function that returns number of ways to make change for that target number

  function numberOfWaysToMakeChange(n, denoms) {
    const ways = new Array(n + 1).fill(0);
      ways[0] = 1;
      for(let denom of denoms){
              for(let amount = 1; amount < n + 1; amount++){
                  if(denom <= amount) {
                      ways[amount] += ways[amount - denom];
                  }
              }
          }
       return ways[n];
  }

//Kadane Algorithm
//Write a function that takes in a nonempty array of integers and returns the max sum
//that can be obtained by summing all int's in a subarray of the input array.

  function kadanesAlgorithm(array) {
    let maxEndingHere = array[0];
      let maxSoFar = array[0];
      for(let i = 1; i < array.length; i++){
          const num = array[i];
          maxEndingHere = Math.max(num, maxEndingHere + num);
          maxSoFar = Math.max(maxSoFar, maxEndingHere);
      }
      return maxSoFar;
  }
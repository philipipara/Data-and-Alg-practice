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
  
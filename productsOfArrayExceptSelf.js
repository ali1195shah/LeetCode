// Given an integer array nums, return an array answer such that answer[i] is equal to 
// the product of all the elements of nums except nums[i]. The product of any prefix or 
// suffix of nums is guaranteed to fit in a 32-bit integer.

 

// Example 1:
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Example 2:
// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]


var productExceptSelf = function(nums) {
    
    let output = new Array(nums.length).fill(nums[0]);
    let cacheVar = nums[nums.length - 1];
   
   for(let i = 1; i < nums.length; i++){
       output[i] = output[i-1]*nums[i];
   }

   output[nums.length-1] = output[output.length-2];

   for(let j = nums.length-2; j > 0; j--){
       output[j] = output[j-1]*cacheVar;
       cacheVar = cacheVar *nums[j];
   }

   output[0] = cacheVar;
   
   return output
};
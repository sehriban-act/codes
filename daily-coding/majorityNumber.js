// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. 
// You may assume that the majority element always exists in the array.

 function majorityNum(nums){
    let dublicateNum=nums.filter((item, index) => nums.indexOf(item) !== index)
    let count={}
    nums.forEach((x) => {
        count[x] = (count[x] || 0) + 1;
      });
      var keys = Object.keys(count);
var min = count[keys[0]]; // ignoring case of empty list for conciseness
var max = count[keys[0]];
var i;
for (i = 1; i < keys.length; i++) {
    var value = count[keys[i]];
    if (value < min) min = value;
    if (value > max) max = value;
    if(max>=nums.length/2){
 }

}
    return Object.keys(count).find(key => count[key] === max)

 }
 let array=[5,5,5,5,2,3,4,6]
 console.log(majorityNum(array));

// !--------------Boyer-Moore Voting Algorithm--------------!
 var majorityElement = function(nums) {
    // Boyer-Moore Voting Algorithm
    let count = candidate = 0;
    for (let i=0; i<nums.length; i++) {
        if (count === 0) {
            candidate = nums[i];
        }
        nums[i] === candidate ? count++ : count--;
    }
    return candidate;
};
console.log(majorityElement(array));


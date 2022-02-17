// In order to win the prize for most cookies sold, my
// friend Alice and I are going to merge our Girl Scout
// Cookies orders and enter as one unit

// 1. We'll start at the beginnings of our input arrays, since the smallest elements will be there.
// 2. As we put items in our final mergedArray, we'll keep track of the fact that they're "already
// merged."
// 3. At each step, each array has a first "not-yet-merged" item.
// 4. At each step, the next item to put in the mergedArray is the smaller of those two "not-yet merged" items
//

let myArray = [1, 3, 5, 9, 16, 45, 56, 7];
let alicesArray= [2, 4, 6, 10, 11, 34];

function mergeArrays(myArray, alicesArray) {
  const mergedArray = [];
  const headOfMyArray = myArray[0];
  const headOfAlicesArray = alicesArray[0];

  let currentIndexAlices=0
  let currentIndexMine=0
  let currentIndexMerged=0


  if (headOfMyArray < headOfAlicesArray) {
    mergedArray[0] = headOfMyArray;
  }
  if (headOfMyArray > headOfAlicesArray) {
    mergedArray[0] = headOfAlicesArray;
  }
  

  while(currentIndexMerged<(myArray.length+alicesArray.length)){
      const firstUnmergedAlices=alicesArray[currentIndexAlices]
      const firstUnmergedMIne=myArray[currentIndexMine]
      if(firstUnmergedMIne<firstUnmergedAlices || myArray.length>alicesArray.length){
          mergedArray[currentIndexMerged]=firstUnmergedMIne
          currentIndexMine++

      }else if(firstUnmergedMIne<firstUnmergedAlices && myArray.length<alicesArray.length){
        
            mergedArray[currentIndexMerged]=firstUnmergedAlices
            currentIndexAlices++
      }
      currentIndexMerged++
  }

  return mergedArray

  
}

console.log(mergeArrays(myArray, alicesArray));

// Here are some edge cases:
// 1. One or both of our input arrays is 0 elements or 1 element
// 2. One of our input arrays is longer than the other.
// 3. One of our arrays runs out of elements before we're done merging
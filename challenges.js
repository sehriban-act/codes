
// console.log("hello world");

// // Fibonacci

// let a=1,b=0,result
// const number=parseInt(prompt("enter the num"))
// for (let i = 0; i <number; i++) {
    
//     result=a+b
//     a=b;
//     b=result;
//     console.log(result);
     
// }

// var knapsack = require('knapsack-js');
 
// var items = [
//       {"pear": 1},
//       {"apple": 7},
//       {"grape": 0},
//       {"banana": 2},
//       {"orange": "NA"},
//       {"strawberry": 4},
//       {"mandarin": null},
//       {"durian": 1},
//       {"peach": undefined},
//       {}
//     ];
 
// const first=knapsack.resolve(5, items);
// // [ { strawberry: 4 }, { pear: 1 } ]
//  console.log(first);
// knapsack.resolve(1, items);
// // [ { pear: 1 } ]
 
// knapsack.resolve(7, items);
// // [ { apple: 7 } ]
 
// knapsack.resolve(15, items);
// /*
// [ { apple: 7 },
//   { strawberry: 4 },
//   { banana: 2 },
//   { pear: 1 },
//   { durian: 1 } ]
// */
// function foo(array,callback){
//     let sum=0
//     for(let i=0;i<array.length;i++){
//         callback(array[i])
//         sum+=array[i]
//     }
//     return sum
// }
// const array=[1,2,3,4,5]
// foo(array,alert)
// foo(array,function(x){
// console.log(x)})


// let people=[]


// --!anagram--!

// function anagram(str1,str2){
//     strArr1=str1.toLowerCase().split("").sort().join()
//     strArr2=str2.toLowerCase().split("").sort().join()

// if(str1.length!==str2.length  || strArr1!==strArr2){
// return false
// }
// return true
// }
// console.log(anagram("Silent","listen"));

// !---ACRONYM----!
// function acronym(str){
// let words=str.split(" ")
// let letterInitialize = []
// var a =words.length
// for (let i = 0; i < a; i++) {
//    letterInitialize.push(words[i].split("")[0])
//      var letters=letterInitialize.join("").toUpperCase()
//     }
// return letters
// }
// console.log(acronym("How To Be Successful In The Publishing World"))

// !---palindrome----!
// function palindrome(str){
//     strNonBlank=str.split(' ').join("")
// //     strReverse=str.split(' ').reverse().join('')
// //    if(strReverse!==strNonBlank){
// //     return "true"
// //    } else {
// // return "false";
// //    }
// // 

// let len=strNonBlank.length
// for (let i = 0; i < len/2; i++) {
//    if(strNonBlank[i]!==strNonBlank[len-i-1]){
//        return false
//    }
// }
// return true
// }
// console.log(palindrome("mom"));

// !----FACTORIEL--!

// function factorial(n){

// if(n<0){
//     return -1
// }
// if(n==0){
// return 1
// }
// return n*factorial(n-1)

// }
// console.log(factorial(5));

// !---missing--!

// function missing(num){
//     numSort=num.sort(function(a, b) {
//         return a - b;
//       })
//     numLen=numSort.length+1
//     dif=((numSort[numLen-2]-numSort[0])/(numLen-1))
//     for (let i = 0; i < numLen-1; i++) {
//      if (num[i]+dif!==num[i+1])
//      return num[i+1]-dif
        
//     }

// }

function missingNum(arr){
arr.sort((a,b)=>a-b)
let minNum=(Math.min(...arr))
let maxNum=Math.max(...arr)

let sumTotal=maxNum*(arr.length+2)/2
let currentSum=arr.reduce((a,b)=>{
  return a+b
})
let missingNum=sumTotal-currentSum


  return missingNum
}
const arr=[3,6,9,12,18]
console.log(missingNum(arr));
// !----INTERSECTION---


function interSection(arr){
  val=[]
 let a=arr[0].split(",")
 let b=arr[1].split(",")

 let matchResult=a.filter(i=>{
   let searchIndex=b.findIndex(j=>i==j)
   if(searchIndex!==-1){
     return i
   }
 })
 arr=matchResult.sort((a,b)=>a-b).join(",")

  return arr
}
 arrOne=["1,2,3,4","3,4,5,6"]
 arrTwo=["3,4,5,6"]


  console.log(interSection(["1,2,3,4,6","3,4,5,6","1,3,6,0"]));


//   var array1 = ["Lorem", "ipsum", "dolor",1];
// var array2 = ["Lorem", "ipsum", "quick", "brown", "foo",1];
// var array3 = ["Jumps", "Over", "Lazy", "Lorem",1];
// var array4 = [1337, 420, 666, "Lorem",1];

// function intersection() {
// 	var result = [];
//   var lists;
  
//   if(arguments.length === 1) {
//   	lists = arguments[0];
//   } else {
//   	lists = arguments;
//   }
  
//   for(var i = 0; i < lists.length; i++) {
//   	var currentList = lists[i];
//   	for(var y = 0; y < currentList.length; y++) {
//     	var currentValue = currentList[y];
//       if(result.indexOf(currentValue) === -1) {
//         var existsInAll = true;
//         for(var x = 0; x < lists.length; x++) {
//           if(lists[x].indexOf(currentValue) === -1) {
//             existsInAll = false;
//             break;
//           }
//         }
//         if(existsInAll) {
//           result.push(currentValue);
//         }
//       }
//     }
//   }
//   return result;
// }

// console.log(JSON.stringify(intersection([array1, array2, array3, array4])));

// var coinChange = function(coins, amount) {
//   const dp = Array(amount+1).fill(Infinity);
//   dp[0] = 0;
  
//   for(let i = 1; i < dp.length; i++) {
//       for(let coin of coins) {
//           if(i-coin >= 0) dp[i] = Math.min(dp[i], dp[i-coin]+1);
//       }
//   }
//   return dp
// };
// console.log(coinChange([1,2,5],17));

// var gameOfLife = function(board) {
    
// };
let possibleCombinations = (str) =>{
  let combinations = [];
    for(let i = 0 ;i < str.length; i++)
  {
      for(let j = i + 1; j< str.length + 1; j++)
      {
          combinations.push(str.slice(i , j));
      }
  }
  return combinations
}
  console.log(possibleCombinations("dog"))


  <script>

// Javascript program to find all combination of
// numbers from a given string of digits
// using bit algorithm used same logic
// as to print power set of string
	
	// function to print combinations of
	// numbers in given input string
	function printCombinations(s)
	{
		// find length of char array
	let l = s.length;

	// we can give space between characters
	// ex. ('1' & '2') or ('2' & '3') or
	// ('3' & '4') or ('3' & '4') or all
	// that`s why here we have maximum
	// space length - 1
	for(let i = 0;
			i < Math.pow(2, l - 1); i++)
	{
		let k = i, x = 0;
		
		// first character will be printed
		// as well
		document.write(s[x]);
		x++;
		for(let j = 0;
				j < s.length - 1; j++)
		{
			
			// if bit is set, means provide
			// space
			if(k % 2 == 1)
				document.write(" ");
			k = k >> 1;
			document.write(s[x]);
			
			// always increment index of
			// input string
			x++;
		}
		document.write("<br>");
	}
	}
	
	// Driver Code
	let input= "1214".split("");
	printCombinations(input);
	
	// This code is contributed by rag2127
	
</script>

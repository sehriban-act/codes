// var topKFrequent = function(words, k) {
//     const freqMap = new Map();
//     let uniqueWords = []
//     for(let word of words) {
//         if (freqMap.has(word)) {
//         freqMap.set(word, freqMap.get(word) + 1)
//       } else {
//         freqMap.set(word, 1)
//         uniqueWords.push(word)
//       }
//     }
     
//       uniqueWords.sort((word1, word2) => {
//       const count1 = freqMap.get(word1)
//       const count2 = freqMap.get(word2)
      
//       if (count1 < count2) {
//         return 1
//       } else if (count1 > count2) {
//         return -1
//       } else {
//         if (word1 === word2) {
//           return 0
//         } else if (word1 < word2) {
//           return -1
//         } else {
//           return 1
//         }
//       }
//     })
  
//     return uniqueWords.slice(0, k)
// };

var topKFrequent = function(words, k) {    
    words = words.reduce((acc,cur)=>{
        acc[cur] = ( acc[cur] || 0 )+1
        return acc;
    },{})
    const sort = Object.keys(words).sort((a,b)=>words[b]-words[a])
    return sort.slice(0,k)
};
words = ["i","love","leetcode","i","love","coding"], k = 2
console.log(topKFrequent(words,k));
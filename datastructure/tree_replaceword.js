 function replaceWord(dictionary,sentence) {
     let wordArr=sentence.split(' ')
     wordArr=wordArr.map((w)=>{
        for (let i = 0; i < dictionary.length; i++) {
            if(w.indexOf(dictionary[i])===0)
                w=dictionary[i]
            
        }
       return w
     })
     
    return wordArr.reduce((str,word)=>str += `${word} `, "")
}
console.log(replaceWord(["cat","bat","rat"],"the cattle was rattled by the battery"))













// var replaceWords = function(dictionary, sentence) {
//     let wordArr = sentence.split(" ");
//     wordArr = wordArr.map(w => {
//         for(let i = 0; i <= dictionary.length - 1; i++) {
//             if (w.indexOf(dictionary[i]) === 0) {
//                 w = dictionary[i];
//             }
//         }
//         return w;
//     })
//     return wordArr.reduce((str, word) => str += `${word} `, "").trim();
// };
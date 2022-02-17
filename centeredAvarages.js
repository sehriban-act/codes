function centeredAverage(arr){
    indexMin=arr.indexOf(Math.min(...arr))
    indexMax=arr.indexOf(Math.max(...arr))
    arrRemoveMin=arr.splice(indexMin,1)
    arrRemoveMax=arr.splice(indexMax,1)
    uniqueChars=arr.filter((c,index)=> arr.indexOf(c)!==index)

    // charMax=Math.min(...arr)
    // charMin=Math.max(...arr)
    // indexMinRepeated=arr.indexOf(Math.min(...arr))
    // indexMaxRepeated=arr.indexOf(Math.max(...arr))
    
    // uniqueChars=[]
    // arr.forEach((c)=>{
    //     if(c!==charMax  && !uniqueChars.includes(c)){
    //     uniqueChars.push(c)
    // }else if (c!==charMin && !uniqueChars.includes(c)){
    //     uniqueChars.push(c)
    // }
    // }
    // )

    //uniqueCharsMin=arr.filter((c,indexMinRepeated)=>{return arr.indexOf(c)!==indexMinRepeated})

//arrSumMinMax= (Math.min(...arr)+Math.max(...arr))  //arr.sort(function(a,b){return a-b})
result=uniqueChars.reduce((a,b)=>a+b,0)/uniqueChars.length
return result
}
console.log(centeredAverage([-10, -4, -2, -4, -2, 0]));
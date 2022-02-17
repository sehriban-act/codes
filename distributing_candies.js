const distCandies=function (siblings,candies) {
  
        for (let i = 0; i < candies.length; i++) {
        if(candies.length % siblings.length===0){
            let result=candies.length/siblings.length
            return result
        } 
        
    }
}
console.log(distCandies(3,15));
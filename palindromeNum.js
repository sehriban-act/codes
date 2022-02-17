function palindrome(num){

   digits=num.toString()
   arrNum=[]
 
   for(var i=0,len=digits.length;i<len;i++){
    arrNum.push(digits.charAt(i))
    }
    reverseArrNum=arrNum.reverse().join('')
    str=JSON.parse(reverseArrNum)
    if (num!==str){
        return false
    }

        return true
// return str

}
    

    console.log(palindrome(12321));
let compression="2[2[bc]a]"
function decompression(a){
   let arr= (a.split(""))
   
   let bracket1=[]
   for (let i = 0; i < arr.length; i++) {
       if (arr[i]=="["){
           bracket1.push(i)
       }
       
   }
   let bracket2=[]
   for (let i = 0; i <= arr.length; i++) {
       if (arr[i]=="]"){
           bracket2.push(i)
       }
       
   }


let numbers=[]
let newArray=[]

let result=[]

for (let i = 0; i < bracket1.length-1; i++) {
       var lettersIn=arr.slice(bracket1[i+1]+1,bracket2[i])
        var letterOthers=arr.slice(bracket2[i]+1,bracket2[i+1])
       for (let i = 0; i < bracket1.length; i++) {
        var num=arr[bracket1[i]-1]
        numbers.push(num)
        
      
       for (let i = 1; i <= numbers[1]; i++) {
          newArray.push(lettersIn)
        
       } 
       for (let i = 0; i < numbers[0]; i++) {
    
       var allLetters=(newArray.concat(letterOthers)).join("")
        result.push(allLetters)
    
       }
     }
}
    return result
}
console.log(decompression(compression));

// compressing string
const str1 = 'wwwaabbbb';
const str2 = 'kkkkj';
const str3 = 'aab';
const compressString = (str = '') => {
   let res = '';
   let count = 1;
   for(let i = 0; i < str.length; i++){
      let cur = str[i];
      let next = str[i + 1];
      if(cur === next){
         count++;
      }else{
         res += String(count) + cur;
         count = 1;
      };
   }
   return res.length < str.length ? res : str;
};
console.log(compressString(str1));
console.log(compressString(str2));
console.log(compressString(str3));


//  solution decode string

    // Javascript program to decode a string recursively
    // encoded as count followed substring
     
    // Returns decoded string for 'str'
    function decode(str)
    {
        let integerstack = [];
        let stringstack = [];
        let temp = "", result = "";
 
        // Traversing the string
        for (let i = 0; i < str.length; i++)
        {
            let count = 0;
 
            // If number, convert it into number
            // and push it into integerstack.
            if (str[i] >= '0' && str[i] <='9')
            {
                while (str[i] >= '0' && str[i] <='9')
                {
                    count = count * 10 + str[i] - '0';
                    i++;
                }
 
                i--;
                integerstack.push(count);
            }
 
            // If closing bracket ']', pop element
            // until '[' opening bracket is not found
            // in the character stack.
            else if (str[i] == ']')
            {
                temp = "";
                count = 0;
 
                if (integerstack.length > 0)
                {
                    count = integerstack[integerstack.length - 1];
                    integerstack.pop();
                }
 
                while (stringstack.length > 0 &&
                       stringstack[stringstack.length - 1] != '[')
                {
                    temp = stringstack[stringstack.length - 1] + temp;
                    stringstack.pop();
                }
 
                if (stringstack.length > 0 &&
                    stringstack[stringstack.length - 1] == '[')
                {
                    stringstack.pop();
                }
 
                // Repeating the popped string 'temo'
                // count number of times.
                for (let j = 0; j < count; j++)
                {
                    result = result + temp;
                }
 
                // Push it in the character stack.
                for (let j = 0; j < result.length; j++)
                {
                    stringstack.push(result[j]);
                }
 
                result = "";
            }
 
            // If '[' opening bracket, push it
            // into character stack.
            else if (str[i] == '[')
            {
                if (str[i - 1] >= '0' && str[i - 1] <='9')
                {
                    stringstack.push(str[i]);
                }
 
                else
                {
                    stringstack.push(str[i]);
                    integerstack.push(1);
                }
            }
 
            else
            {
                stringstack.push(str[i]);
            }
        }
 
        // Pop all the element, make a
        // string and return.
        while (stringstack.length > 0)
        {
            result = stringstack[stringstack.length - 1] + result;
            stringstack.pop();
        }
 
        return result;
    }
     
    let str = "2[3[bc]a]";
    document.write(decode(str));
    console.log();
 


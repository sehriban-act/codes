let integerStack=[]
let charStack=''
let str='2[2[ac]b]'
let temp=''
function deComp(){
    for (let i = 0; i < str.length; i++) {
        let count=0
        if(str[i]>"0" && str[i]<="9"){
            // while(str[i]>="0"&& str[i]<="9"){
            //     count=count*10+str[i]-"0"
            // }
// i--
            integerStack.push(str[i])
        }else if(str[i]=="]"){
temp=''
count=0 
if(integerStack.length>0){
count=integerStack[integerStack.length-1]
integerStack.pop()
}
        }
    
    }
    for (let j = 0; j < str.length-1; j++) {
       if(str[j])
        
    }

    return integerStack
}
console.log(deComp(str));
function Main(str,arg){
    const numbers=new Array()
    numbers.push(10)
    numbers.push(20)
    numbers.push(30)
    numbers.push(40)
    // numbers.splice(3,1)
    // numbers.shift()
    // numbers.pop()
    numbers.splice(numbers.length/2,1)

    return numbers
    
}
console.log(Main())
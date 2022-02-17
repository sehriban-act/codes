// Write a function that takes an array of characters and
// reverses the letters in place.


function reverse(a){

    let c=((a.toLowerCase().split("")).reverse()).join("")
      return c
}
console.log(reverse("SEHRIBAN"));

// Your team is scrambling to decipher a recent message, worried it's a plot to break into a
// major European National Cake Vault. The message has been mostly deciphered, but all the
// words are backward! Your colleagues have handed off the last step to you.
// Write a function reverseWords() that takes a message as an array of characters and
// reverses the order of the words in place.↴
function reverseWords(a){
    let c=a.split(" ")
    let b=[]
for (let i = 0; i < c.length; i++) {
    b.push(((c[i].split("")).reverse()).join(""))

    
}
    return b.reverse().join(" ")


}
console.log(reverseWords("uoy evol I "));

function reverse(str) {
    let stack = [];
    // push letter into stack
    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }
    // pop letter from the stack
    let reverseStr = '';
    while (stack.length > 0) {
        reverseStr += stack.pop();
    }
    return reverseStr;
}
console.log(reverse('JavaScript Stack')); //kcatS tpircSavaJ
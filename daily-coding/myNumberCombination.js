let numbers=[1,2,3,4,5]
function k_combinations(set,k){
var head,combs,tailcombs;
    
    if(k>set.length||k<=0){
        return []
    }

    if(k==set.length){
        return[set]
    }

    if(k==1){
        
    let combs=[];
     for (let i=0;i<set.length;i++){
        combs.push([set[i]])
     }
     return combs
    }

combs=[]
for(i=0;i<set.length-(k-1);i++){
    head=set.slice(i,i+1)
    tailcombs=k_combinations(set.slice(i+1),k-1)


     for(let j=0;j<tailcombs.length;j++){
        combs.push(head.concat(tailcombs[j]))
     }
}
return combs

}


function combinations(set){
    var k,i,combs,k_combs;
    combs=[]
    for(k=1;k<=set.length;k++){
        k_combs=k_combinations(set,k);
        for(i=0;i<k_combs.length;i++){
            combs.push(k_combs[i])
        }
    }
    return combs
}
console.log(combinations(numbers));











sample=(age,...c)=>{
    return c[2]+age;
}
var arry=[2,3,6,1,7,9];
console.log(sample(2,4,6,3,5));
console.log(sample(...arry));
demo=(...ar)=>{
    let sum=0;
    for(const i of ar){
            sum+=i;
    }
    return sum;
}
console.log(demo(1,4,3,1));
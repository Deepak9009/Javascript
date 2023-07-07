const radius=[3,1,5,7];
const area=function(radius){                           //callback function
    return Math.PI*radius*radius;
}
const diameter=function(radius){
    return 2*radius;
}
const circumfrnce=function(radius){
    return 2*Math.PI*radius;
}

const calculate=function(radius,formula){
    const out=[];
    for(let i=0;i<radius.length;i++){
        out.push(formula(radius[i]));
    }
    return out;
}


console.log(calculate(radius,area));
console.log(calculate(radius,diameter));
console.log(calculate(radius,circumfrnce));

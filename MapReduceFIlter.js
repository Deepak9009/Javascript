let arry=[2,4,1,6,2,8,6];
// arry.forEach((Element,index,arry)=>{
//     console.log(Element);        //return same array 
    
// })

// let mapvar=arry.map((Element,index,arry)=>{
    
//     return Element;       //return new Array
    
// })
// console.log("map function array " +mapvar);
// let val=arry.filter((ele)=>{
//     return ele>4
// })
// console.log("Filter function " +val);


let arr=[3,5,1,22,7,1];
let redvar=arr.reduce((a,b,inex,arry)=>{
    return a+b;
})
console.log("Reduce Function  sum "+ redvar);

var a;
console.log(a);
a=10;
const b=11;
console.log(b);
let c;
console.log(c);
c=22;

function out(){
    inner()
    let a=10;
    function inner(){
        console.log(a);
    }
}
out();

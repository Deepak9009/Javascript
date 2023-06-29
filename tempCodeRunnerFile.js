function out(){
    inner()
    let a=10;
    function inner(){
        console.log(a);
    }
}
out();

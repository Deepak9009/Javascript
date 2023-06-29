function outer(){
    let car="gla";
    function inn(){
        console.log(car);
    }
    return inn;
}
outer();
let inner=outer();
inner();
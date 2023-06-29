var car={
   name1: function(){
    return this;
}
} 
var bolero={
    name2:()=>{
        return this;
    }

}
console.log(car.name1());
console.log(bolero.name2());
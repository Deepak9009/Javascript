let arr = [1, 3, 4, 2, "hii", "hlo", true, false];


let numArr = [];
let strArr = [];
let boolArr = [];

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
        numArr.push(arr[i]);
    } else if (typeof arr[i] === "string") {
        strArr.push(arr[i]);
    } else if (typeof arr[i] === "boolean") {
        boolArr.push(arr[i]);
    }
}

console.log(numArr); // [1, 42]
console.log(strArr); // ["hello", "world"]
console.log(boolArr); // [true, false]

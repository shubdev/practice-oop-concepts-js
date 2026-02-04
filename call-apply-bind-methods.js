const obj1 = {
    fname: "shub",
    lname: "sharma",
}
let printMethod = function (hometown, state) {
    console.log(`hi, im ${this.fname} ${this.lname} here from ${hometown}, ${state}  `)
}
printMethod.call(obj1, "nagpur");

const obj2 = {
    fname: "rohan",
    lname: "lala"
}
printMethod.call(obj2, "pune", "maharashtra");
//call() method call the function and take parameter as this keyword whitch reffer to the object.
printMethod.apply(obj2, ["mumbai", "maharashtra"])
//we just have to pass the arguments in array form nothing differnt.

let printname = printMethod.bind(obj1, "patna", "bihar");
printname();
//bind() create new object witch will be call as=we need.

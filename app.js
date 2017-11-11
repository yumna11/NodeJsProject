/*This file runs when we build our project*/
console.log('Hello');

var person = {
    name:"yumna",
    age:21
}
console.log(person);

var myName = function () {
    console.log("Yumna Asim");
};
myName();

function myAge() {
    console.log("Age is "+20);
}
myAge();

function mySalary() {}
console.log(mySalary());
setTimeout(myAge,5000);

function placeOrder(orderNumber) {
    console.log("Customer order ",orderNumber);
    cookAndDeliverFood(function () {
       console.log("Delivered food number is "+orderNumber);
    });
}

function cookAndDeliverFood(callback) {
    setTimeout(callback,5000);
}
placeOrder(1);
placeOrder(2);
placeOrder(3);
placeOrder(4);
placeOrder(5);

var Person={
    favFood:"Biryani",
    favDesert:"Custard"
};
console.log(Person);
var Yumna = Person;
Yumna.favFood = "Daleem";
Yumna.favDesert = "Sweets";
console.log(Yumna);
console.log(Person);
console.log(20=='21'); /*compares only values*/
console.log('Yumna'==='Yumna'); /*compares values and data type*/
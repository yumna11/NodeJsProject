/*importing modules*/
require('./yumna');
require('./family')
var mobilePhone = require('./mobile');
/*mobilePhone.bestOne();*/
/*console.log(mobilePhone.myMobile);*/
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
var Person = {
    firstName : function () {
        console.log("Yumna is the first name");
        console.log(this === Person);
    }
}
Person.firstName();
function firstName() {
    console.log("Yumna is the first name");
    console.log(this === global);
}
firstName();
function User() {
    this.name = "";
    this.life = 100;
    this.giveLife = function giveLife(targetPlayer) {
        targetPlayer.life += 1;
        console.log(this.name + "gave 1 life to "+ targetPlayer.name);
    }
}
var Bucky = new User();
var Wendy = new User();
Bucky.name = "Yumna";
Wendy.name = "Asim";
Bucky.giveLife(Wendy);
User.prototype.upperCut = function upperCut(targetPlayer) {
    targetPlayer.life -= 1;
    console.log(this.name + "uppercut 1 life of "+ targetPlayer.name);

}
User.prototype.magic = 60;
console.log(Bucky.magic);
console.log(Wendy.magic);
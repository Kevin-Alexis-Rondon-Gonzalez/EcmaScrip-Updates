// Arrays destructuring
let fruits = ["apple", "Banana"];
let [a, b] = fruits;
console.log(a,b,fruits[1]);

//Object destructuring 
let user = {userName: "Oscar" , age: 25,};
let{userName, age} = user;
console.log(userName, age);

//Spread operator 
let person = {name:"Oscar", age:28};
let country = "mx";

let data = {id:1, ...person, country}; //with the three point can do destructuring and add
console.log(data);

//rest 
function sum(num, ...values){
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}
sum(1,1,3,4,5);
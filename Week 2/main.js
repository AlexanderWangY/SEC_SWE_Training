// DOM - Document object model


// const parent = document.getElementById("main");

// const createDivs = (parent, iter) => {
//     const newDiv = document.createElement("div");
//     newDiv.textContent = iter;
//     newDiv.style.backgroundColor = "blue";
//     newDiv.style.height = "200px";
//     newDiv.style.width = "200px";
//     newDiv.style.display = "flex";
//     newDiv.style.margin = "10px"
//     newDiv.style.justifyContent = "center";
//     newDiv.style.alignItems = "center";
//     parent.append(newDiv);
// }

// for (let x = 0; x < 10; x++) {
//     createDivs(parent, x);
// }

// var x = parent.children[0];
// console.log(x);
// x.innerHTML = "hello";

// parent.removeChild(parent.lastChild);

// Javascript Event Listeners
// const parent = document.getElementById("main");
// const btn1 = document.getElementById("btn1");
// let index = 0;

// const createDivs = (parent, iter) => {
//     const newDiv = document.createElement("div");
//     newDiv.textContent = iter;
//     newDiv.style.backgroundColor = "blue";
//     newDiv.style.height = "200px";
//     newDiv.style.width = "200px";
//     newDiv.style.display = "flex";
//     newDiv.style.margin = "10px"
//     newDiv.style.justifyContent = "center";
//     newDiv.style.alignItems = "center";
//     parent.append(newDiv);
// }

// btn1.addEventListener("click", btnClicked = () => {
//     createDivs(parent, index);
//     index++;
// });


const nav = document.querySelector("nav");

nav.addEventListener("mouseover", (event) => {
    nav.style.height = "7vw";
})

nav.addEventListener("mouseout", (event) => {
    nav.style.height = "4vw";
})

// const myObject = {
//     name: "Alex",
//     age: 18,
//     hobbies: ["eat", "sleep", "code"],
//     logName: function () {
//         console.log(this.name);
//     }
// };

// const myArray = ["eat", "sleep", "code"];

// localStorage.setItem("mySessionStore", JSON.stringify(myArray));

// const mySessionData = JSON.parse(localStorage.getItem("mySessionStore"));

// console.log(mySessionData);

// Chapter 24: Modules
import * as Guitars from "./guitar.js";
import User from "./user.js";

const user1 = new User("alexanderwang@ufl.edu", "Alex");

console.log(user1)
console.log(user1.greeting());

console.log(Guitars.playGuitar());
console.log(Guitars.shredding());
console.log(Guitars.plucking())


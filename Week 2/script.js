// Promises

// const myPromise = new Promise((resolve, reject) => {
//     const error = false;
//     if (!error) {
//         resolve("Yes! Promise is resolved!")
//     } else {
//         reject("No! rejected promise!");
//     }
// });

// const myNextPromise = new Promise((resolve, reject) => {
//     setTimeout(function() {
//         resolve('myNextPromise is resolved!');
//     }, 3000);
// });

// myNextPromise.then(value => {
//     console.log(value);
// });


// myPromise.then(value => {
//     console.log(value);
// });

// const users = fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => {
//         return response.json();
//     })
//     .then(data => {
//         data.forEach(user => {
//             console.log(user);
//         });
//     });

const myUsers = {
    userList: []
}

const myCoolFunction = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();
    return jsonUserData;
}

const anotherFunc = async () => {
    const data = await myCoolFunction();
    myUsers.userList = data;
    console.log(myUsers.userList);
}

anotherFunc();
console.log(myUsers.userList);


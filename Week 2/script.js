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

const requestJoke = async (firstName, lastName) => {

    const response = await fetch(`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`);

    const jsonResponse = await response.json();

    console.log(jsonResponse.value.joke);
}

requestJoke("Johnny", "Smallwood");
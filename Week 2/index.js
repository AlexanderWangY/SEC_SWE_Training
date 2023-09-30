let number = 0;

/* do {
    number += 2;
    console.log(number);
} while(number < 50);
*/

/*while(number < 50) {
    number += 2;
    console.log(number);
}*/

/*
let i = 0;

for(; i <= 50;) {
    console.log(i);
    i += 2;
}*/

//Functions (Chapter 13)

/*function sum(x=10, y=10) {
    return x + y;
}

console.log(sum());*/

/*function getUserNameFromEmail(email) {
    return email.slice(0, email.indexOf("@"));
}

let userName = getUserNameFromEmail("alexw.lemon@gmail.com");
console.log(userName);*/

const toProperCase = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

console.log(toProperCase("aLeXandER"));

console.info("Hello")




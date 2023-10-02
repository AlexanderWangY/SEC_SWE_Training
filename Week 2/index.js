//let number = 0;

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

// const toProperCase = (name) => {
//     return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
// }

// console.log(toProperCase("aLeXandER"));


// Chapter 17
// const band = {
//     vocals: "robert",
//     guitar: "Jim",
//     drums: "Alex",
//     bass: "Ben"

// }

// function sings({ vocals }) {
//     return `${vocals} sings!`
// }

// console.log(sings(band));

// Chapter 18

class Pizza {

    crust;
    size;
    #sauce = "traditional"

    constructor(pizzaSize) {
        this.size = pizzaSize;
        this.crust = "original";
    }

    getCrust() {
        return this.crust;
    }

    setCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }

    getSauce() {
        return this.#sauce;
    }

}

class SpecialtyPizza extends Pizza {
    constructor(pizzaSize) {
        super(pizzaSize);
        this.type = "Figgy Don"
    }

    slice() {
        console.log(`Our ${this.type} ${this.size} pizza has 8 slices! Comes with ${this.getSauce()}`)
    }
}

const secretPizza = new SpecialtyPizza("12 inch");

secretPizza.slice();

secretPizza.size = "11 in"

secretPizza.slice();

const x = new Pizza("12 Inch");

console.log(x.sauce)





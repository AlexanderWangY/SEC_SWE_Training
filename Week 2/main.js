// DOM - Document object model

const parent = document.getElementById("main");

const createDivs = (parent, iter) => {
    const newDiv = document.createElement("div");
    newDiv.textContent = iter;
    newDiv.style.backgroundColor = "blue";
    newDiv.style.height = "200px";
    newDiv.style.width = "200px";
    newDiv.style.display = "flex";
    newDiv.style.margin = "10px"
    newDiv.style.justifyContent = "center";
    newDiv.style.alignItems = "center";
    parent.append(newDiv);
}

for (let x = 0; x < 10; x++) {
    createDivs(parent, x);
}

var x = parent.children[0];
console.log(x);
x.innerHTML = "hello";

parent.removeChild(parent.lastChild);


let div=document.querySelector("div");
console.log(div);


let newBtn1=document.createElement("Button");
console.log(newBtn1);
newBtn1.innerText="Click Me";

newBtn1.style.backgroundColor="black";
newBtn1.style.color="white";
newBtn1.style.padding="0.6rem";
newBtn1.style.width="6rem";
newBtn1.style.border="none";
div.style.margin="5rem";

div.append(newBtn1);
console.log("Hello");

// template literals
let a=5;
let b=6;
console.log(`Sum of Numbers = ${a+b}`);

let obj={
    item:"pen",
    price:10
}

console.log(`the cost of ${obj.item} is ${obj.price} rupees`);
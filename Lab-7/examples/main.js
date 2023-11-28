import {name, calculator } from "./module.js";
import {personalData} from "./myOwnModule.js";

console.log(personalData());

console.log(name, calculator(4, 5, (a, b) => a + b));
document.getElementById("main").innerHTML = `<p> ${calculator(4, 5, (a, b) => a + b)} </p>`;
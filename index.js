let background = prompt("Orqa fonni kiriting: ");
let color = prompt("colorni kiriting: ");

let body = document.querySelector("body");
 
body.style = `background-color: ${background}; color: ${color}`;
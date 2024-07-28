let text = document.querySelector("#text");
let para = document.createElement("p");
text.addEventListener("input",function(){document.querySelector("h1").appendChild(para);para.innerText = text.value;})
let list = document.getElementsByClassName("class1");
for(li of list)
{
    li.style = 'margin-left :100px';
}
let hd = document.querySelector("h1");
console.dir(hd);
console.dir(document.querySelector("#name"));
console.dir(document.querySelector(".class1"));
console.dir(document.querySelectorAll("h1"));
let para = document.querySelector('#last');
console.dir(para);
console.log(para.innerText);
console.log(para.textContent);
console.log(para.innerHTML);
hd.innerHTML = `<u>${hd.innerText}</u>`;
let image = document.querySelector("img");
console.log(image.getAttribute("width"));
image.setAttribute("width","200px");
// hd.style.color = "red";
hd.style.backgroundColor = 'yellow';
console.log(hd.classList);
hd.classList.add("green");
hd.classList.add("fiftywidth");
hd.classList.add("borrad");
hd.classList.remove('borrad');
console.log(hd.classList.contains('green'));
console.log(hd.classList.toggle('green'));
console.log(hd.classList.toggle('borrad'));
console.log(hd.parent);
let par  =  document.querySelectorAll('p')[1];
let div = document.querySelector("div");
console.log(par.parentElement);
console.log(div.children);
console.log(div.childElementCount);
let head5  = document.getElementsByTagName('h5')[0];
console.log(head5.previousElementSibling);
console.log(para.nextElementSibling);
let pra = document.createElement('p');
pra.innerText = "This is a new paragraph";
let edu = document.getElementsByTagName('ul')[0];  
let btn = document.createElement('button');
btn.innerText = "Click Me";
edu.appendChild(pra);
pra.append('Hello guys ndjkndfkjn');
pra.append(btn);
let p1 = document.createElement('p');
p1.innerText = "This is a new paragraph one";
edu.appendChild(btn);
pra.prepend("Hello  begin");
edu.prepend('Before the list');
edu.insertAdjacentElement("beforebegin",para);
edu.insertAdjacentElement('afterbegin',hd);
edu.insertAdjacentElement('beforeend',image);
edu.insertAdjacentElement('afterend',p1);
edu.removeChild(btn);
p1.remove();






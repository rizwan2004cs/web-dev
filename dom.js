// let button = document.querySelectorAll("button");
// // console.dir(button);
// // button.onclick = function(){console.log("Button was clicked 1")}
// for(btn of button)
// {
//     // btn.onclick = hello;
//     // btn.onmouseenter = function (){console.log("You enetered a button");}
//     btn.addEventListener("click", hello);
//     btn.addEventListener("click", sayName);
//     btn.addEventListener("dblclick",function(){console.log("You double clicked the button");})
// }
// function sayName()
// {
//     console.log("rizwan");
// }
// function hello()
// {
//     console.log("hello");
// }
// // button.onclick = hello;
// let p = document.querySelector("p");
// p.addEventListener("click",function(){console.log("The para was clicked");});
// let box = document.querySelector(".box");
// box.addEventListener("mouseenter",function(){console.log("The mouse entered the box");});

// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");
// let p = document.querySelector("p");
// let button = document.querySelector("button");
// function changeColor()
// {
//     console.log(this.innerText);
//     this.style.backgroundColor ="blue";
// }
// h1.addEventListener("click",changeColor);
// h3.addEventListener("click",changeColor);
// p.addEventListener("click",changeColor);
// // button.addEventListener("click",changeColor);
// let btn = document.querySelector("button");
//     btn.addEventListener("click", function(event){console.log(event)});
// //     btn.addEventListener("dblclick",function(event){console.log(event)})
// let input = document.querySelector("input");
// // input.addEventListener('keydown',function(event){console.log(event);console.log(event.key+" "+"Key was pressed"+" "+event.code);});
// // input.addEventListener('keyup',function(event){console.log(event);console.log("Key was released");});   
// input.addEventListener('keydown',function(event){
//     if(event.key == "ArrowUp")
//         console.log("character moves forward");
//     if(event.key == "ArrowDown")
//         console.log("character moves backward");
//     if(event.key == "ArrowLeft")
//         console.log("character moves left");
//     if(event.key == "ArrowRight")
//         console.log("character moves right");
//     if(event.key == "Keyu")
//         console.log("character moves up");
//     if(event.key == "KeyD")
//         console.log("character moves down");
// })
let form = document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();
    // alert("form submitted");
    // let input = document.querySelector("input");
    // console.dir(input);
    // // console.log(input.value);
    // let user  = document.querySelector("#user");
    // let pass  = document.querySelector("#pass");
    console.dir(form);
    let user = this.elements[0];
    let pass = this.elements[1];
    alert(`Hi ${user.value}, your password is set to ${pass.value}`);

});
let user = form.elements[0];
user.addEventListener("change",function(){
    console.log("Change event");
    console.log(this.value);
});
user.addEventListener("input",function(){
    console.log("input event");
    console.log(this.value);
});
let button = document.querySelector("button");
button.addEventListener("click",changecolor)
function randcolor()
{
    let red = Math.ceil(Math.random()*256);
let green = Math.ceil(Math.random()*256);
let yellow = Math.ceil(Math.random()*256);
return "rgb("+red+","+green+","+yellow+")";

}

function changecolor()
{   
    let color = randcolor();
    document.querySelector("h1").innerText = color;
    document.querySelector("div").style.backgroundColor = color;
    
}
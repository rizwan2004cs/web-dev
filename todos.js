let form = document.querySelector('form');
form.addEventListener("submit",function(event)
{
    // event.preventDefault();
    let task = document.getElementById("task");
    let ul = document.querySelector("ul");
    let li = document.createElement("li");
    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");
    li.innerText = task.value;
    ul.appendChild(li);
    li.append(delBtn);
    task.value = "";
    // delBtn.addEventListener("click",function(event){
        // this.parentElement.remove();
    // });
});
let ul = document.querySelector("ul");
ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON")
    {
        event.target.parentElement.remove();
    }
});
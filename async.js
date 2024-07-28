// async function hello()
// {
//     // throw "some error occured";
//     return "Hello";
// }
// hello().then((result) => {
//     console.log("The promise was resolved with result "+result)
// })
// .catch((error) =>{
//     console.log("The promise was rejected with error :"+error);
// })

// let hell = async () => {throw "error";return "Hell";};
// hell().then((result) => {
//     console.log("The promise was resolved with result "+result)
// })
// .catch((error) =>{
//     console.log("The promise was rejected with error :"+error);
// })

// function rand()
// {
//     return new Promise((resolve,reject)=>
//     {
//         setTimeout(() => {
//             let num = Math.floor(Math.random()*11);
//             console.log(num);
//             if(num > 7){
                
//                 reject("Greater than 7 ");
//             }
//             resolve();
//         },1000);

//     }
//     );
    
// }

// async function demo()
// {
//     try{
//         await rand();
//     await rand();
//     await rand();
//     await rand();
//     await rand();
//     await rand();
//     await colorChange("red",1000);
//     await colorChange("green",1000);
//     await colorChange("blue",1000);
//     await colorChange("yellow",1000);
//     await colorChange("orange",1000);
//     colorChange("pink",1000);
//     }
//     catch(err){
//         console.log("error caught "+err);
//     }
//     console.log("The end")

// }

// function colorChange(color,delay)
// {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             document.body.style.backgroundColor = color;
//             console.log(color);
//             resolve();
//         },delay);
        
//     });
// }
document.querySelector("#fa").addEventListener("click",async () => {
    document.querySelector("#result").innerText = await getRandonFacts();
})
let url1 = "https://dog.ceo/api/breeds/image/random";
async function getRandonFacts()
{
   try{
    let res = await axios.get("https://catfact.ninja/fact");
    console.log(res.data.fact);
    return res.data.fact;
   }
   catch(err) {
    console.log("err");
    return "no facts available right now"
   }
}
document.querySelector("#im").addEventListener("click",async () => {
    await getRandonImages();
})

async function getRandonImages()
{
   try{
    let res = await axios.get(url1);
    let link = res.data.message;
    console.log(link);
    let image = document.querySelector("img");
    image.setAttribute("src",link);
   }
   catch(err) {
    console.log("err")
   }
}

async function getJokes()
{
    const config = {headers:{Accept:"text/plain"}};
let res =await axios.get("https://icanhazdadjoke.com",config);
console.log(res.data);
}
let btn = document.querySelector("#co");
btn.addEventListener("click",async() => {
    let inpt = document.querySelector("input");
    showColege(inpt.value);
    inpt.value ="";
})


async function showColege(country){
    let col = await axios.get("http://universities.hipolabs.com/search?country="+country);
    let ul = document.querySelector("ul");
    ul.innerHTML ="";
    console.log(col.data);   
    for (college of col.data) {
        console.log(college.name);
        let li = document.createElement("li");
        li.innerText = college.name;
        ul.appendChild(li);
      }
    // col.data.forEach((college) => {
    //     console.log(college.name);
    //   });
    


}
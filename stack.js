// function one()
// {
//     return 1;
// }
// function two()
// {
//     return one() + one();
// }
// function three()
// {
//     let ans = two() + one();
//     console.log(ans);
// }
// // three();
// setTimeout(() => {console.log("Hello world");},2000);
// setTimeout(() => {console.log("Rizwan");},2000);
// console.log("MOhammad")
function changeColor(color,delay)
{
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            head.style.color = color;
            // if(nextColorChange) nextColorChange();
            resolve("color changed");  
        },delay);
    })
}
let head = document.querySelector("h1");
changeColor("red",2000).then((result)=>{
    console.log("red "+result)
    return changeColor("green",2000);
}).then((result) => {
    console.log("green "+result);
    return changeColor("yellow",3000);
}).then((result) => {
    console.log("yellow "+result);
})
// setTimeout(() => {head.style.color = "red";},1000);
// setTimeout(() => {head.style.color = "yellow";},2000);
// setTimeout(() => {head.style.color = "orange";},3000);
// setTimeout(() => {head.style.color = "green";},4000);
// setTimeout(() => {head.style.color = "purple";},5000);
// changeColor("red",1000);
// changeColor("yellow",2000);
// changeColor("orange",3000);
// changeColor("green",4000);
// changeColor("purple",5000);
// changeColor("purple",1000,() => {
//     changeColor("red",1000,()=>{
//         changeColor("yellow",1000,()=>{
//             changeColor("orange",1000,() => {
//                 changeColor("green",1000);
//             })
//         });
//     });
// });

// function saveToDb(data,success,failure)
// {
//     internetSpeed = Math.floor(Math.random()*11);
//     if(internetSpeed > 5) success();
//     else failure();
// }


// saveToDb("Mohammad",() => {
//     console.log("Success 1 :data was saved succesfully");
//     saveToDb("Rizwan",() => {
//         console.log("Success 2 :data was saved succesfully");
//         saveToDb("syed",() => {
//             console.log("Success 3 :data was saved succesfully");
//         },() => {
//             console.log("failure 3 : weak connection data was not saved");
//         });
//     },() => {
//         console.log("failure 2 : weak connection data was not saved");
//     });
// },() => {
//     console.log("failure 1 : weak connection data was not saved");
// });
// saveToDbPromise("Rizwan");

function saveToDbPromise(data)
{
    return new Promise((resolve,reject) => {
        internetSpeed = Math.floor(Math.random()*11);
    if(internetSpeed > 5) resolve("Success : Data was save dto database");
    else reject("failure : Weak connection");
    })
}

// let request = saveToDbPromise("Hello");
// request.then(() => {console.log("promise was resolved");console.log(request)})
// .catch(()=>{console.log("promise was rejected");console.log(request);});

// saveToDbPromise("Hello").then(() => {console.log("promise was resolved");console.log(request)})
// .catch(()=>{console.log("promise was rejected");console.log(request);});

//nested promises
// saveToDbPromise("Hello").then(() => {
//     console.log("Data 1 :promise was resolved");
//     saveToDbPromise("World").then(() => {
//         console.log("data 2 :promise was resolved")
//     })
// })
// .catch(()=>{console.log("promise was rejected");});
//Promise chaining
// saveToDbPromise("Hello").then((result) => {
//     console.log("Result of promise "+result);
//     console.log("Data 1 :promise was resolved");
//     return saveToDbPromise("World");
// })
// .then(() => {
//     console.log("Result of promise "+result);
//     console.log("data 2 :promise was resolved");
//     return saveToDbPromise("World");
// })
// .then(() => {
//     console.log("Result of promise "+result);
//     console.log("data 3 :promise was resolved")
// })
// .catch((error)=>{console.log("promise was rejected");
//     console.log("error of promise "+error);
// });
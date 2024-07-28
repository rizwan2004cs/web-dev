// let jsonResponse = '{"fact":"Despite imagery of cats happily drinking milk from saucers, studies indicate that cats are actually lactose intolerant and should avoid it entirely.","length":148}';
// let jsResponse = JSON.parse(jsonResponse);
// console.log(jsResponse.fact +" "+jsResponse)
// console.log(JSON.stringify(jsResponse));
let url   = "https://catfact.ninja/fact";
fetch(url).then((response) => {
    console.log(response);
    return response.json();
})
.then((data) => {
    console.log(data.fact);
    return fetch(url);
}).then((respone) => {
    console.log(respone);
    return respone.json();
})
.then((data2) => {
    console.log(data2.fact);
})
.catch(err => {console.log(err);})
async function getFacts()
{
    try{
        let res =await fetch(url);
    let data = await res.json();
    console.log(data.fact);

    let res1 =await fetch(url);
    let data1 = await res1.json();
    console.log(data1.fact);
    }
    catch(err){
        console.log(err);
    }
}
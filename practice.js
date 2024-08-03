var name =  "Rizwan";
var age = 19;
const collegeName = "N.B.K.R.I.S.T."


function courseRegistration(){
    var course = "DSA";
}
try{
    console.log(course);
}
catch(err){
    console.log("Trying to access the var variable outside the function "+err.message);
}



function checkEligibility(attendance)
{
    if (attendance >= 75){
        var varEligibility = true;
    }
    else{
        let letEligibilty = false;
    }
    if (varEligibility){
        try{
            console.log(`VarEligibility : ${varEligibility}`);
        }catch(err)
        {
            console.log("Accesing let variable outsode the block "+err.message);
        }
    }
    else
    {
        try{
            console.log(`letEligibility : ${letEligibility}`);
        }
        catch(err)
        {
            console.log("Accesing let variable outsode the block "+err.message);
        }
    }
}

checkEligibility(75);
checkEligibility(65);
var department = "cse";
function dep(){
    var depart = department;
}

year = 5;
var year;

console.log(`Hoisting concept with \"var\" : ${year}`);

try{
    x = 4;
    let x;
}catch(err){
    console.log("Hoisting \"let\" variable "+err.message);
}

try{
    y = 4;
    const y = 6;
}catch(err){
    console.log("Hoisting \"const\" variable "+err.message);
}

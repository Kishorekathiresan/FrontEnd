readinput=require('readline-sync');

function validate(empname,empage){
    if(empname.length<5){
        console.log("Length of name must be a minimum of 5 character.");
    }
    if(empage<18){
        console.log("Not eligible for job under labour laws")
    }
}
function callValidate(valdata) {
    console.log('Enter your name');
    ename = readinput.question();
    console.log('Enter your age');
    eage = Number(readinput.question());
    valdata(ename, eage);
}

callValidate(validate)

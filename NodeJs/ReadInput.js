readinput=require('readline-sync');
arrfunc=require('./ArrayFunctions')

console.log('Enter your name')
fullName=readinput.question();
console.log('Enter your age');
age=Number(readinput.question())
console.log('Origin country');
country=readinput.question();


console.log('Capital of'+ country + 'is' + arrfunc.getCapCity(country));

if(age>=18 && age<=45){
    console.log("You are eligible for gratuity");
}
else{
    console.log("Apply for gratuity consideration");
}
function test(){
    console.log("In Test");
}
add=function(n1,n2){
    console.log("adding n1 and n2");
    return n1+n2;
}

console.log(test);//prints the value of test
console.log(test());//function call

var multiply=new Function("p1,p2","console.log(p1*p2)");

console.log("Multiply = " + multiply);

 

multiply(2,3)
v=add(2,3)
console.log("v:"+v);
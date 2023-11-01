var exp=require('express');// import express js 
var proc=require('process')
var bparser=require('body-parser');
var expnv=exp();// initialize the environment for express js
expnv.use(bparser.urlencoded({extended:false}));

var path=require('path');
var visitorCount=0;

expnv.get('/',welcome)
function welcome(request,response){
    var str= "<html><body>";
    str += "<b>website in expressJS using post attribute</b><br>";
    visitorCount++;
    str += "<b>You are visitor #</b>"+visitorCount;
    var today=new Date();
    str += "<br><b>Today: <b>"+today+"<br>"
    str += "<br><a href='/login'>Click here to login</a>";
    str += "</body></html>";
    response.send(str); //sends the response back to the caller.
}

expnv.get('/login',loginForm)
function loginForm(request,response)
{
    console.log("Displaying login form");
    //response.sendFile(path.join(__dirname,'./loginform.html'));
    response.sendFile(__dirname+'/loginform.html');
}

expnv.post('/signin',authenticate)
function authenticate(request,response)
{
    console.log("Authenticating....");

    var users=[{username:'Bhargav',password:'temp001'},
               {username:'Jyothi',password:'temp002'},
               {username:'Leena',password:'temp003'},
               {username:'kamal',password:'temp004'}];
    var result=false;
    var uname=request.body.userId;
    var upwd=request.body.password;

    for(i in users){
    if(uname == users[i].username && upwd == users[i].password){
        result=true
        break;
    }
    }
    if(result == true){
        response.send("<br><b>welcome</b>");
    }
    else{
        response.send("<br><b>Invalid username or password</b><br><a href='/login'>retry</a>");
    }
     
}


expnv.listen(proc.argv[2],proc.argv[3]);
console.log("Started the server at port #" + proc.argv[2]);
for(i in proc.argv){
    console.log(proc.argv[i]);
}
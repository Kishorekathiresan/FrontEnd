var exp=require('express');// import express js 
var expnv=exp();// initialize the environment for express js
var path=require('path');
var visitorCount=0;

expnv.get('/',welcome)
function welcome(request,response){
    var str= "<html><body>";
    str += "<b>First website in  expressJS</b><br>";
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

expnv.get('/signin',authenticate)
function authenticate(request,response)
{
    console.log("Authenticating....");
    var validid="kishkishore";
    var validpwd="kkkk";

    var uname=request.query.userId;
    var upwd=request.query.password;
    if(uname == validid && upwd == validpwd){
        response.send("<b>Welcome to our system....</b>");
    }
    else{
        response.send("<b>Invalid username or password</b><br><br><a href='/login'>Retry logging in</a>");
    }
    //response.send("<b>You are authenticated..</b>");
}

expnv.listen(7800,"localhost");
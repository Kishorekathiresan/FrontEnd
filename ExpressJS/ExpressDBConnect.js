var exp=require('express');// import express js 
var my_sql=require('mysql');
var proc=require('process')
var cors=require('cors');
var bparser=require('body-parser');
var expnv=exp();// initialize the environment for express js
//var mysqlconn=my_sql(); initialize mysql by creating a connector 
expnv.use(bparser.json());
expnv.use(cors());
expnv.use(bparser.urlencoded({extended:false}));

var path=require('path');
var visitorCount=0;
var mysql_conn=my_sql.createConnection({host:'localhost',port:3306,user:'root',password:'renuka@37',database:'world'});
mysql_conn.connect();
console.log("Connected to database....");
console.log(mysql_conn.state);
console.log(mysql_conn.statistics());

function  processResults(error,results)
{
    //console.log(results);
    for(i in results){
        console.log(JSON.stringify(results[i]));
    }
}
expnv.post('/signin',authenticate)
function authenticate(request,response)
{
    console.log("Authenticating....");

    mysql_conn.query('SELECT * from users',processResults);
    /*var result=false;
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
    }*/
}

expnv.post("/addUser",addNewUser)
function addNewUser(request,response)
{
    var uid=request.body.userid;
    var upwd=request.body.password;
    var uemail=request.body.emailId;
    console.log("*******" + uid + "\t\t" + upwd + "\t\t" + uemail)
    var ins="insert into users values('"+ uid +"','"+ upwd +"','"+ uemail +"')";
    console.log('Executing - '+ ins);
    mysql_conn.query(ins);
    console.log('Inserted 1 record into the database....');
    response.send("true");
}

expnv.post("/deleteUser",deleteExistingUser)
function deleteExistingUser(request,response)
{
    var uid=request.body.userid;
    var del="delete from users where userid='"+uid+"'";
    console.log('Executing -'+ del);
    mysql_conn.query(del);
    console.log('deleted 1 record....');
}

expnv.post("/updateuser",updateUser)

function updateUser(request,response)
{
    var uid=request.body.userid;
    var upwd=request.body.password;
    var upd="update users set password='"+upwd+"' where userid='"+uid+"'";
    console.log('Update - ' + upd);
    mysql_conn.query(upd);
    console.log('Updated 1 record to the database')
}

expnv.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin",
               "http://localhost:4200");
    res.header("Access-Control-Allow-Headers",
               "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
expnv.listen(proc.argv[2],proc.argv[3]);
console.log("Started the server at port #" + proc.argv[2]);

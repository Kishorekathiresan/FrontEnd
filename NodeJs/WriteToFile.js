var io=require('fs');
var readLine=require('readline-sync');
var line="";
var cnt=0;
while(cnt<5){
    console.log('Enter a line');
    line=readLine.question();
    line +='\n';
   // io.writeFile('doc.txt',line,displayStatus);
    //io.appendFile('doc.txt',line,displayStatus);
    io.appendFileSync('doc.txt',line);//only two parameters taken by appendfilesync,call back function will not work in syncronous
    cnt++;
}

function displayStatus(){
    console.log('Wrote '+ cnt + 'line to a file');
}


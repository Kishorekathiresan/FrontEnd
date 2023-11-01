// var io=require('fs');


// io.readFile('data.txt','utf8',function(err,lines)
// {
//    console.log(lines);
//    console.log('Read'+lines.length+'bytes from file')
    
// });

var io=require('fs');


function display(err,lines)
{
   console.log(lines);
   console.log('Read '+lines.length+' bytes from file')
    
}
io.readFile('data.txt','utf8',display);
var osmod=require('os');
console.log(osmod.arch());
console.log("Free Memory in bytes:"+osmod.freemem());
var info=osmod.cpus();
for(cnt=0;cnt<info.length;cnt++){
    console.log("CPU #"+ cnt+1);
    console.log(info[cnt].model);
    console.log(info[cnt].speed);
    console.log(info[cnt].times)
}

console.log("Your machine name :"+osmod.hostname());
console.log("Machine architecture :"+osmod.machine());
console.log("Platform :"+osmod.platform());
console.log("Version and Release :"+osmod.release());
console.log("Total Memory :"+osmod.totalmem());
user=osmod.userInfo();
console.log("User :"+user);
const p1 = new Promise(function(resolve,reject)
{
    setTimeout(function(){
        resolve("P1 Success");
    },1000)
})

const p2 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("P2 Success");
    },3000)
})

const p3=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("P3 Success");
    },5000)
})

Promise.all([p1,p2,p3]).then((res)=>{
    console.log(res);
})
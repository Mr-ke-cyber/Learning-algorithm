var p = new Promise(function(resolve, reject){
    resolve("success");
    console.log("create a promise");
    setTimeout(() => {
        console.log(999);
    }, 0)
});

console.log("after new Promise");

p.then(function(value){
    console.log(value);
});

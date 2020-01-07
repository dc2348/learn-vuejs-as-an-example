var fs = require("fs");
var data = ["김창수", "01012341234", 25000];

console.log("시작");

new Promise(function(resolve, reject){
    resolve(data[0]);
})
.then(function(result){
    console.log(result); // 김창수
    return result + "," + data[1];    
})
.then(function(result){
    console.log(result); // 김창수,01012341234
    return result + "," + data[2];    
})
.then(function(result){
    console.log(result); // 김창수,01012341234,25000
    fs.writeFile('paylist.csv', result, function(error){
        if(error){
            console.error(error);
        }
    })
})
.catch(function(error){
    console.error(error);    
})
console.log("종료");

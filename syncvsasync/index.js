var fs = require("fs");
console.log("시작 : " + new Date().toISOString());

// 동기 파일 읽기 시작
// var data = fs.readFileSync('movies.json');
// console.log("동기 파일 읽기 : " + new Date().toISOString() + " " + data.toString());

fs.readFile('movies.json', function(err, data){
    if(err) {
        return console.error(err);
    }
    console.log("비동기 파일 읽기: " + new Date().toISOString() + " " + data.toString());
})
// 동기 파일읽기 마침

console.log("종료 : " + new Date().toISOString());

// function func(){
//     return 7;
// }
// async function asyncFunc(){
//     return 7;
// }
// console.log(func());
// console.log(asyncFunc());

// asyncFunc().then(result => {
//     console.log(result);
// });

async function asyncFunc(){
    let promise = new Promise((resolve, reject) => {
        setTimeout(()=>{
            //resolve(7);
            reject("Error");
        }, 3000);
    });
    let result = await promise.catch(err => {
        console.log(err);
        return err;
    });
    console.log(result);
}
asyncFunc();
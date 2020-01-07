const meetOrNot = false;
const place = new Promise(function(resolve, reject){
    if(meetOrNot){
        const placeDetails = {
            name : '롯데 백화점',
            location : '건대 입구',
            time : '오후 6시'
        }
        resolve(placeDetails);
    } else {
        const errMessage = {
            error: '급한일이 생겨서'
        }
        reject(errMessage);
    }
});
// console.log(place);
place.then(
    function(data){
        console.log(data);
        console.log(JSON.stringify(data));
    }
)
.catch(function(error){
    console.log(error);
    console.log(JSON.stringify(error));
})
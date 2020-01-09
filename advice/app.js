new Vue({
    el: '#app',
    data: {
        advice:'데이터 로딩중...'
    },
    created(){
        axios.get('https://api.adviceslip.com/advice')  // 서버에 요청하기
        .then((res)=>{
            console.log(res);
            this.advice = res.data.slip.advice;
        })               // 성공 시
        .catch((err)=>{console.log(err);});             // 에러 발생
    }
})
function step1() {
    console.log('step 1');
}

function step2() {
    setTimeout(function(){
        console.log('step 2');
    }, 3000);
}

function step3() {
    console.log('step 3');
}

step1();
step2();
step3();

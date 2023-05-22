window.onload= function() {
    //웹브라우저 내의 모든 요소가 준비가 된 이후 실행(실행 시점을 맞춰줌)
        //0 ~ 255까지 임의의 수를 추출
        var r = parseInt(Math.random()*256);
        var g = parseInt(Math.random()*256);
        var b = parseInt(Math.random()*256);
        document.body.style.backgroundColor=`rgb(${r}, ${g}, ${b})`
}

// function setColor() {
//     //0 ~ 255까지 임의의 수를 추출
//     var r = parseInt(Math.random()*256);
//     var g = parseInt(Math.random()*256);
//     var b = parseInt(Math.random()*256);
//     document.body.style.backgroundColor=`rgb(${r}, ${g}, ${b})`
// }

// setColor();
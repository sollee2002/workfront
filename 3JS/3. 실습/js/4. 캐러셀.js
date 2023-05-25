var pics = ['pic-1.jpg','pic-2.jpg','pic-3.jpg','pic-4.jpg','pic-5.jpg'];
index = 0;
window.onload = function() {
    //이미지 배열 만들기
    
    //컨테이너 박스의 배경화면을 배열의 0번째 인덱스값을 넣어봅시다
    //1. 컨테이너 박스 선택
    //id로 접근
    
    //컨테이너 박스의 백그라운드 설정
    //배열의 0번째 이미지를 보여줌
    // container.style.backgroundImage = `url(images/${pics[0]}`;
    container.style.backgroundImage = 'url(images/'+ pics[index] + ')';
    
    //왼쪽 버튼 클릭
    left.addEventListener('click', function() {
        index--;

        if(index < 0) {
            index = pics.length-1;
        }
        
        container.style.backgroundImage = 'url(images/'+ pics[index] + ')';
        
    })
    
    // //오른쪽 버튼 클릭
    right.addEventListener('click', function() {
        index++;
        
        if(index > pics.length-1) {
            index = 0;
        }

        container.style.backgroundImage = 'url(images/'+ pics[index] + ')';

    })

}
//일정 간격으로 반복적으로 콜백함수를 실행
//setInterval(콜백함수, 대기시간(밀리초), (콜백함수의 인자 나열/생략가능))
var i =0;
var interval = setInterval(function() {
    imgChange()
    // console.log('setInterval '+i);
    // i++;

    // if(i > 10) {
    //     stop();
    // }
}, 3000);

function stop() {
    console.log('중지')
    clearInterval(interval)
}

function imgChange() {
        // 주의 : index, pics를 함수 외부에서 참조할 수 있도록 전역변수로 생성합니다
        index++;
        
        if(index > pics.length-1) {
            index = 0;
        }

        container.style.backgroundImage = 'url(images/'+ pics[index] + ')';
}
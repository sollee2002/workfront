function popup() {
  let url = '6. 모달창.html';
  let name = 'popup test';
  let option = 'width=500, height=500, top=100, left=200';

  //페이지경로, 팝업창 이름, 옵션
  window.open(url, name, option);
}

window.onload = function() {
    //내부함수 - 외부에서 호출 불가능
    function test() {
        console.log('test');
    }

    //open/close는 window객체의 내장 함수
    //아이디로 참조 불가
    //직접 변수에 담아줘야 합니다

    // #open : 모달창 보여주기
    // #close : 모달창 닫기
    let open = document.getElementById('open');
    let close = document.getElementById('close');

    open.addEventListener('click', function() {
        //모달창 열기
        //class 속성 active 추가
        modal.classList.add('active');
    })

    close.addEventListener('click', function() {
        //모달창 닫기
        //class 속성 active 제거
        modal.classList.remove('active');
    })
}

window.onload = function() {

    let noti_box = document.querySelector('#noti-box');

    //버튼이 클릭되면 noti-box에 새로운 알림 추가
    bttn.addEventListener('click', function() {
        
        let noti = document.createElement('div');
        noti.innerHTML = '알림내용 표시';
        
        // let text = document.createTextNode('알림내용 표시');
        // box.appendChild(text);

        //class에 noti 속성 추가(디자인)
        noti.classList.add('noti');

        noti_box.appendChild(noti);

        //3초 후에 실행
        setTimeout(() => {
            //요소 삭제
            noti_box.remove();
        }, 3000);
        // console.log('a');
    })



}
window.onload = function() {
    
    //현재시간
        let time = new Date();
        box.innerHTML = `${time.getHours()}시 ${time.getMinutes()}분`;

    btn1.addEventListener('click', function() {

        //img 요소노드 생성
        let imgNode = document.createElement('img')

        // if(time.getHours() <= 12) { //오전
        //     imgNode.src='images/morning.jpg';
        // } else {
        //     imgNode.src='images/afternoon.jpg';
        // }

        let imgSrc = (time.getHours() < 12) ? 
        'images/morning.jpg' : 'images/afternoon.jpg';

        imgNode.src=imgSrc;

        //속성 설정
        // imgNode.setAttribute('width', '150px');
        // imgNode.setAttribute('height', '100px');


        //연결(자식요소로 추가)
        container.appendChild(imgNode);
    })


}
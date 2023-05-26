//페이지 로드(이벤트 발생) 이후 함수를 실행 
window.onload = function() {
   
    //버튼이 클릭되면 함수를 실행
    btn1.addEventListener('click', () => {
        //요소노드 생성
        let eNode = document.createElement('h3');

        //텍스트노드 생성
        let tNode = document.createTextNode('안녕하세요');

        //연결
        eNode.appendChild(tNode);
        area1.appendChild(eNode);

        area1.innerHTML += '<h3>innerHTML로도 가능</h3>'
    })

    //버튼이 클릭되면 함수를 실행
    btn2.addEventListener('click', () => {
        //img 요소노드 생성
        let imgNode = document.createElement('img')

        //속성 설정 하는 방법
        imgNode.src='images/morning.jpg';
        imgNode.setAttribute('width', '150px');
        imgNode.setAttribute('height', '100px');


        //연결(자식요소로 추가)
        area2.appendChild(imgNode);

        area2.innerHTML += `<img src="images/morning.jpg" width="150px" height="100px">`

    })

    btn3.addEventListener('click', (e) => {
        area3.remove();

        //이벤트가 발생한 요소
        let target = e.target;
        console.log(target)

        //상위 요소를 반환
        console.log(target.parentNode)
        
        //상위요소의 자식노드를 삭제
        let delNode = document.getElementById('area2')
        target.parentNode.removeChild(delNode);
    })

    btn4.addEventListener('click', () => {
       //p 요소 생성
        let pNode = document.createElement('p');
       //text node 요소 생성
       let text = document.createTextNode('안녕하세요');

       //연결
       let h1 = pNode.appendChild(text);

       //부모요소 선택(body 선택)
       let body = document.querySelector(h1);
       //노드 선택(삽입하고 싶은 위치의 요소를 선택) <- h1 선택
      
       body.insertBefore(pNode, h1)
    })


};
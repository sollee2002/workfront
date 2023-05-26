window.onload = function() {
    btn1.addEventListener('click', function() {
        // window.open(url); //새 탭이 열리고 url로 이동(비어있을 경우 빈 새탭)
        // window.open('https://www.naver.com', 'naver'); //open(url, 창이름)
        // console.log('window.open() 실행'); 

        //oepn(url, 창이름, 속성)
        //팝업 형식
        window.open('7. BOM_Menu.html', 'BOM', 'width=500, height=500')
    })

    //타이머 관련 메소드
    //window.setTimeout()
    
    let timerId = 0;
    btn2.addEventListener('click', function() {


        //새 창 띄우기
        let newWindow = window.open();
        newWindow.alert('3초 후에 이 페이지는 종료됩니다');

        //setTimeout(콜백함수, 시간)
        //일정 시간 경과 후 콜백 함수를 한번 실행
        timerId = window.setTimeout(() => {
            newWindow.close();
        }, 3000);


        //타이머 id를 clearTimeout() 함수에 전달하면 해당 id의 타이머를 취소할 수 있다.
        clearTimeout(timerId)
    })
    
    btnStart.addEventListener('click', function() {
        //일정시간마다 콜백함수를 반복실행
        //window.setInterval(함수, 시간)
        //반환된 숫자값(식별값)을 이용해 종료시켜줄 수 있다
        
        timerId =  window.setInterval(()=> {
            //현재 날짜, 시간 정보를 담은 객체
            let date = new Date();

            // area1.innerHTML = date.toTimeString();
            area1.innerHTML = `${date.getHours()} : ${date.getMinutes()} :`
                             + `<span id="seconds"> ${date.getSeconds()}</span>`;

        }, 1000) //1초에 한번씩 실행

        console.log('timerId' , timerId)
    })

    btnStop.addEventListener('click', function() {
        clearInterval(timerId);
    })

    btn3.addEventListener('click', ()=> {
        area3.innerHTML=`<h4> location 객체</h4>`;

        for(key in location) {
            //console.log('key: ', key);
            //객체[속성]
            //객체.속성
            //console.log('value: ', location[key]);

            area3.innerHTML += `key: ${key}, | value: ${location[key]} <br>`
        }
    })



}
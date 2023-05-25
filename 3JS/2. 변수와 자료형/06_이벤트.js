
window.onload = function() {

    //고전 이벤트 모델

    //이벤트가 발생한 요소는
    //내부적으로 이벤트 발생 정보를 담고 있는 객체를 매개변수로 전달한다

    //이벤트의 발생 정보를 확인하고 싶다면 매개변수를 입력
    btn1.onclick = function(e) {
    console.log('고전 이벤트 모델', this);
    console.log('이벤트',e);

    console.log('target',e.target); // 이벤트가 발생한 대상
    console.log('button',e.button); // 마우스 키 값 반환
    console.log('clientX',e.clientX); // 이벤트가 발생한 가로위치
    console.log('clientY',e.clientY); // 이벤트가 발생한 세로위치
    console.log('ctrlKey',e.ctrlKey); // ctrl 키가 눌렸는지
    console.log('shiftKey',e.shiftKey); // shift 키가 눌렸는지
    console.log('timeStamp',e.timeStamp) // 이전 이벤트와 현재 이벤트가 발생한 시간의 차이를 밀리세컨드로 반환
    console.log('code',e.code); // 키보드 키코드 값
    console.log('key',e.key); // 키보드 키
    }

    //고전 방식으로 이벤트를 적용할 경우
    //속성에 값을 주는 것이기 때문에 중복적용이 불가능합니다 => 덮어쓰기
    btn1.onclick = (e) => {
        //화살표 함수에서는 this가 없음
        //화살표 함수의 상위 요소의 this를 찾아서 반환
        console.log('this',this);
        console.log('e',e);
        console.log('e',e.target);
    }

    //이벤트 발생 시 실행시키려면 () 제외
    btn3.addEventListener('click', clickEventHandler)
    btn3.addEventListener('mouseenter', function() {
        this.style.backgroundColor = 'red';
    })

    btn3.addEventListener('mouseleave', (e) => {
        e.target.style.backgroundColor='green';
    })

    //1. 고전이벤트방식에서 이벤트가 발생한 요소를 확인하는 방법
    btn4.onclick = function(e) {
        console.log('고전 이벤트 방식')
        console.log('e.target',e.target);
        console.log('this',this);
        console.log('window.event.target',window.event.target);
    }

    //고전이벤트방식2
    //화살표 함수에서는 this가 가르키는 대상이 없음
    btn4.onclick = (e) => {
        console.log('고전 이벤트 방식')
        console.log('e.target',e.target);
        console.log('this',this);
        console.log('window.event.target',window.event.target);
    }

    //3. 표준 이벤트 모델
    btn5.addEventListener('click', test5)


    submit.addEventListener('click', function(e) {
        //정규식
        //특정 규칙을 가진 문자열을 검색하거나 치환할 때 사용하는 형식 언어
        // /패턴/으로 선언
        // /정규식패턴/.test('문자열')
        //문자열에 정규식 패턴을 만족하는 값이 있으면 true, 없으면 false 리턴

        let regExp = /^[a-zA-Z0-9]{5,12}$/;

        let userId = document.getElementById('userId').value;

        //패턴을 만족하지 않을 경우
        if(regExp.test(userId)) {
            return true;
        } else {
            alert('아이디는 영문자, 숫자로만 총 5~ 12자 사이로 입력해주세요.')
            
            //표준 이벤트 방식에서는(이벤트 객체가 있는 경우)
            //이벤트 객체의 prevnetDefault() 함수를 이용하여 기본이벤트를 제거할 수 있다
            e.preventDefault();
        }
        //^ : 시작
        //[] : [...] 내의 문자들 중 하나라도 존재
        //{m,n}은 앞선 패턴이 최소 m번 최대 n번 반복되는 문자열을 의미한다
        //$ : 끝


    })

}

//이벤트핸들러
//이벤트 처리기 = 이벤트가 발생 했을 때 처리하는 함수
function clickEventHandler() {
    console.log('표준이벤트 모델');
}

//2. 인라인 이벤트 방식에서 이벤트가 발생한 요소를 확인하는 방법
function test(e) {
    //매개값으로 이벤트 객체를 가져올 수 없음
    console.log('인라인 이벤트 방식');
    console.log('e',e); //unfined
    console.log('this',this); //윈도우 객체를 반환
    console.log('window.event.target',window.event.target);
}

function test5() {
    console.log('표준 이벤트 방식');
}

//비밀번호 일치 확인
function pwCheck() {
    //비밀번호, 비밀번호 확인을 비교하여
    //일치하지 않는 경우 '비밀번호가 일치하지 않습니다; 메세지 처리
    let pw1 = document.getElementById('pw1').value;
    let pw2 = document.getElementById('pw2').value;

    if(pw1 !== pw2) {
        alert('비밀번호가 일치하지 않습니다');
        return false;
    }
}


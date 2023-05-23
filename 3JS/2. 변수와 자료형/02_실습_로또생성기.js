//화면이 모두 로드 된 이후 실행
window.onload = function lotto() {
    console.log('화면이 모두 로딩되었습니다');
    
    var arr = [6];
    
    //버튼을 선택, div 선택
    let btn1=document.getElementById('btn1');
    let lottoDiv = document.querySelector('div[class=lottoDiv]');
    
    //버튼이 클릭되면 div 초기화
    btn1.onclick = function() {
        // 로또 번호 생성(임의의 번호)
        console.log('=======================');
        for(var i=0; i<6; i++) {
            var ball = parseInt((Math.random()*45)+1);
            arr[i] = ball;  
        }
        
        for(var i=0; i<6; i++) {
        console.log(arr[i])
        }

        lottoDiv.innerHTML = '';

        for(var i=0; i<6; i++) {
            lottoDiv.innerHTML += `<div class='ball'>${arr[i]}</div>`;
        }

        //색상변경
        let ballList = document.querySelectorAll('div[class=ball]');
        for(let i in ballList) {

            ballList[i].style.backgroundColor= getColor();
            ballList[i].style.borderColor=getColor();
        }
    }
};

function getColor() {
    console.log('색상반환');

    var r = parseInt(Math.random()*256);
    var g = parseInt(Math.random()*256);
    var b = parseInt(Math.random()*256);

    console.log(`${r} ${g} ${b}`);
    
    return `rgb(${r}, ${g}, ${b})`;
}
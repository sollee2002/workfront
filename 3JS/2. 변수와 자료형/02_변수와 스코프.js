//사용자로부터 출생년도를 입력받아서
//나이를 출력하는 프로그램

//전역변수
var date = new Date(); //내장객체
var year = date.getFullYear();

//함수레벨
function getAge() {

    //블럭레벨
    if(true) {
        //지역변수
        let brith_year = prompt('출생년도를 입력해주세요');
        var age = year - brith_year;
        
        console.log(`당신의 나이는 ${age}세 입니다.`);
        console.log(brith_year);
        
    }
    
    //var 키워드는 함수레벨
    console.log(`당신의 나이는 ${age}세 입니다.`);
    
    //let 키워드는 블록레벨
    // console.log(brith_year); //err
}

//전역변수(global variable) : 함수 외부에서 변수를 선언
g_str1 = '전역변수 예약어없음';
var g_str2 = '전역변수 var';
let g_str3 = '전역변수 let';

console.log('전역변수 출력 =====================');
console.log(g_str1);
console.log(g_str2);
console.log(g_str3);

//window객체
//브라우저에서 제공하는 브라우저창에 대한 정보를 담고 있는 객체
//전역 변수 사용시 'window.변수명' 혹은 'this.변수명'으로 표현해서 사용할 수 있다

//var로 선언하면 window/this 객체에 연결
console.log('window.변수명 =====================');
console.log(window.g_str1);
console.log(window.g_str2);
console.log(window.g_str3);

console.log('this.변수명 =====================');
console.log(this.g_str1);
console.log(this.g_str2);
console.log(this.g_str3);

//이름을 불러서 호출 해주어야 실행
function test() {
    console.log('전역변수 출력 =====================');
    console.log(g_str1);
    // 같은 이름의 지역변수를 선언 시 호이스팅에 의해서 undefined로 출력
    console.log(g_str2);
    console.log(g_str3);

    console.log('window.변수명 =====================');
    console.log(window.g_str1);
    console.log(window.g_str2);
    console.log(window.g_str3);

    console.log('this.변수명 =====================');
    console.log(this.g_str1);
    console.log(this.g_str2);
    console.log(this.g_str3);

    //지역변수(local variable) : 함수 외부에서 접근 불가
    //키워드 없이 선언하면 함수가 실행 시 전역변수로 작성
    l_str1='지역변수 예약어없음'
    var l_str2 = '지역변수 var';
    let l_str3 = '지역변수 let';

    console.log('지역변수 출력 =====================');
    console.log(l_str1);
    console.log(l_str2);
    console.log(l_str3);

    console.log('window.변수명 =====================');
    console.log(window.l_str1);
    console.log(window.l_str2);
    console.log(window.l_str3);

    console.log('this.변수명 =====================');
    console.log(this.l_str1);
    console.log(this.l_str2);
    console.log(this.l_str3);

    //전역변수와 동일한 이름의 지역 변수 선언 시 지역변수가 우선
    //상단 출력이 undefined로 나오며 전역변수는 영향을 받지 않음

    //g_str2 전역변수 == 지역변수; 함수가 실행된 이후 전역변수의 값이 변경
    // g_str2 = '전역변수 == 지역변수';

    /*
    호이스팅 : 위로 끌어올리다
    자바스크립트 파서가 프로그램 실행 전에
    변수와 함수의 메모리 공간을 미리 할당하는 것
    변수선언문과 함수선언문 유효범위 최상단에 선언 (변수는 undefined로 초기화)
    */
    console.log(g_str2); //오류가 발생하지 않으면 선언 전에도 사용 가능
    // console.log(aaa) //아예 선언되지 않은 경우 오류 발생
    var g_str2 = '전역변수 == 지역변수';
    console.log('g_str2',g_str2); //지역변수에서 전역변수와 같은 이름으로 재선언
}

// test();

// //함수 내부에서 선언된 지역변수
// console.log('외부에서 지역변수 출력 =====================');
// console.log(l_str1); <--함수 실행 후 접근 가능
// console.log(l_str2);
// console.log(l_str3);


//블럭레벨 스코프 테스트
if(true) {
    block_str1='블럭선언 예약어없음';
    var block_str2='블럭선언 var';
    let block_str3='블럭선언 let';
    //상수 : 선언과 동시에 초기화 변경불가
    const block_str4='블럭선언 const';
}

console.log('함수내부선언',block_str1);
console.log('함수내부선언',block_str2);

//블럭레벨 스코프(let,const)
//블럭 내부에서 선언된 경우 블럭 외부에서 호출 불가
//console.log('함수내부선언',block_str3);
//console.log('함수내부선언',block_str4);

//페이지가 로드된 이후 바로 실행
window.onload = function() {
    //페이지가 모두 로딩되면 실행
    console.log('onload 실행 - 페이지 로딩완료 ===========');

    //var 예약어의 중복선언
    var num = 0;
    console.log(num);
    var num = 10;
    console.log(num);

    //let으로 선언 시 num1을 선언문이 나오기 전에 사용불가
    //let ,const 도 호이스팅이 되지만
    //Temporal Dead Zone(TDZ)에 위치
    //TDZ : 선언 ㅓㅈㄴ에 변수를 사용하는 것을 비허용하는 개념상의 공간

    //let, const 중복선언 불가
    let num1 = 0;
    // let num1 = 0; // err
    num1 = 10; //값의 재설정은 가능

    const num2 = 0;
    // const num2 = 10; //err
    // num2 = 10; //err


}


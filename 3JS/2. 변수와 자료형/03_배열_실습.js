function arrayTest1() {
    //lab 요소를 선택 후 태그 안의 문자열을 배열로 만들기
    var la1 = document.getElementById('la1').innerText;
    var la2 = document.getElementById('la2').innerText;
    var la3 = document.getElementById('la3').innerText;
    var la4 = document.getElementById('la4').innerText;

    // console.log(la1);
    // console.log(la2);
    // console.log(la3);
    // console.log(la4);

    var str1 = la1.split(',');
    var str2 = la2.split(',');
    var str3 = la3.split(',');
    var str4 = la4.split(',');

    // console.log(str1);
    // console.log(str2);
    // console.log(str3);
    // console.log(str4);

    //배열 합치기
    let arr = str1.concat(str2,str3,str4);
    console.log(arr);
    
    //text 필드 값 읽어오기
    var text = document.getElementById('text').value;
    var check = arr.indexOf(text);
    
    console.log(check);

    if(check < 0) {
        alert('존재하지 않는 값입니다.')
    } else {
        alert(check)
    }
}

function reverseTest() {
    //lab 요소를 선택 후 태그 안의 문자열을 배열로 만들기
    var stringla1 = document.getElementById('stringla1').innerText;
    var stringla2 = document.getElementById('stringla2').innerText;

    var str1 = stringla1.split(' ');
    var str2 = stringla2.split(' ');

    //배열 뒤집기
    var re1 = str1.reverse();
    var re2 = str2.reverse();

    //배열 합치기
    var arr = re1.concat(re2);
    // console.log(arr);

    //결과 출력
    var print = document.getElementById('print');
    print.innerHTML = `${arr.join('')}`;

}

//배열 초기화
let arr3 = [];

function input() {

    //입력받은 요소를 배열에 저장
    var val = document.getElementById('strInput');
    arr3.push(val.value);

}

function print() {
    //배열 내림차순
    var arrList = arr3.sort().reverse();
    
    // console.log(arrList);
    
    //결과 출력
    var print2 = document.getElementById('print2');
    print2.innerHTML = `${arrList}`;
}

function arrayTest3() {
    //문자열 -> 배열
    var stringla4 = document.getElementById('stringla4').innerText;
    var str = stringla4.split(' ');

    console.log(str);

    //입력받은 값의 인덱스 반환
    var remove = document.getElementById('remove').value;
    var check = str.indexOf(remove);
    
    if(check < 0) {
        alert('잘못된 값입니다.')
    } else {
        var i = check;
        str. splice(i, 1);
        // console.log(i);
    }

    //맨 끝에 음식 추가
    var add = document.getElementById('add').value;
    str.push(add);

    console.log(str);

    var print4 = document.getElementById('print4');
    print4.innerHTML = `${str}`;

    
}
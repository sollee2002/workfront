window.onload = function arr() {
    let area1 = document.getElementById('area1');
    let btn1 = document.getElementById('btn1');
    
    console.log('실행되었습니다');

    //btn1요소에 click 이벤트가 발생하면 함수를 실행
    btn1.addEventListener('click',function() {
        // area.innerHTML = '실행';
        
        let array1 = new Array(); // []
        let array2 = new Array(3); // [empty * 3]
        let array3 = new Array('빨강', '파랑', '노랑', '초록');
        let array4 = ['java', 'oracle', 'html5', 'css3', 'javascript'];

        console.log('array1', array1);
        console.log('array2', array2);
        console.log('array3', array3);
        console.log('array4', array4);

        //여러가지 타입을 입력
        let array5 = [
            '고경희' //문자
            , 20 //숫자
            , true //논리값
            , [1,2,3,4] //배열
            , function() { //함수
            return a
            } 
            , {} //객체
        ];

         console.log('array5', array5);

         //2. 배열에 값을 추가하기
         array1[0] = '귤';
         array1[1] = '사과';
         array1[2] = '자몽';

        console.log('array1', array1);

        console.log('===============');

        area1.innerHTML= `array1(빈배열)에 값 대입 : ${array1} <br>`
                        + `배열 길이 :  ${array1.length} <br><br>`

        array2[0] = '자동차';
        array2[1] = '비행기';
        array2[2] = '기차';
        array2[3] = '배';

        //배열의 길이를 3으로 정했지만 길이가 자동으로 늘어남
        area1.innerHTML+= `array2에 값 대입 : ${array2} <br>`
                        + `배열 길이 :  ${array2.length} <br><br>`

    })

    let area2 = document.getElementById('area2');
    let btn2 = document.getElementById('btn2');

    btn2.addEventListener('click',function() {

        //  area2.innerHTML ='실행';
        let array = ['귤','복숭아','사과','망고','자몽'];

        area2.innerHTML = `array : ${array}<br>`
                        + `복숭아의 인덱스 : ${array.indexOf('복숭아')}<br>`
                        + `자몽의 인덱스 : ${array.indexOf('자몽')}<br>`
                        + `키위의 인덱스 : ${array.indexOf('키위')}<br>` //배열에 존재하지 않을 경우 -1 반환   
    })

    let area3 = document.getElementById('area3');
    let btn3 = document.getElementById('btn3');

    btn3.addEventListener('click',function() {

        //  area3.innerHTML ='실행';
        let array1 = ['귤','복숭아','사과','망고','자몽'];
        let array2 = ['키위','바나나'];

        //원본에 영향을 미치지 않음
        let array = [array1].concat([array2]);

        area3.innerHTML = `array1 : ${array1}<br>` 
                        + `array2 : ${array2}<br>`
                        + `array 결합 : ${array}<br>`;
    })


    let area4 = document.getElementById('area4');
    let btn4 = document.getElementById('btn4');

    btn4.addEventListener('click',function() {

        //ES6 추가된 배열 생성 메소드
        let array = Array.of ('a','b',20);
        //join()함수의 매개값으로 구분자를 입력할 수 있다


        var str=array.join();

        //문자열 -> 배열
        area4.innerHTML = `split(',') : [${str.split(',')}]<br>`;

        area4.innerHTML += `array : ${array}<br>`
                        + `array.join('') : ${array.join('')}<br>`;

    })

    let area5 = document.getElementById('area5');
    let btn5 = document.getElementById('btn5');

    btn5.addEventListener('click',function() {

        //원본에 영향을 미치는 메소드

        let array = Array.of ('a','b',20);

        area5.innerHTML = `array : ${array}<br>`
                        + `array.reverse : ${array.reverse()}<br>`;

    })

    let area6 = document.getElementById('area6');
    let btn6 = document.getElementById('btn6');

    btn6.addEventListener('click',function() {
        //원본에 영향을 미치는 메소드

        let array = Array.of (231, 536, 71, 5, 12);
        let array2 = Array.of ('apple','Apple','cat');

        area6.innerHTML = `array : ${array} <br>
                            array.sort() : ${array.sort()}<br>`;

        area6.innerHTML += `array2 : ${array2} <br>
                            array2.sort() : ${array2.sort()}<br>`;

        //sort() 메소드에 함수를 매개값으로 전달해서 정렬 기준을 변경할 수 있다
        var arr = array.sort(function(left,right){
            return left - right; //오름차순 정렬
            // return right - left; //내림차순 정렬
        });

        area6.innerHTML += `array 오름차순 정렬 : ${arr}<br>`;
        area6.innerHTML += `array 내림차순 정렬 : ${arr.reverse()}<br>`;

        arr = array.sort(function(left,right){
            // return left - right; //오름차순 정렬
            return right - left; //내림차순 정렬
        });

        area6.innerHTML += `array 내림차순 정렬2 : ${arr}<br>`;

    });

    let area7 = document.getElementById('area7');
    let btn7 = document.getElementById('btn7');

    btn7.addEventListener('click',function() {

        //원본에 영향을 미치는 메소드

        let array = Array.of ('a','b',20);

        area7.innerHTML = `기본 array : ${array}<br>`;

        //배열에 요소 추가
        array.push('c');
        area7.innerHTML += `요소 추가 후 길이 : ${array.push()}<br>`;
        area7.innerHTML += `array.push('c') : ${array}<br>`;

        //배열에서 요소 제거
        array.pop();
        area7.innerHTML += `제거된 요소 : ${array.pop()}<br>`;
        area7.innerHTML += `array.pop() : ${array}<br>`;

    })

    let area8 = document.getElementById('area8');
    let btn8 = document.getElementById('btn8');

    btn8.addEventListener('click',function() {

        //원본에 영향을 미치는 메소드

        let array = Array.of ('a','b',20);

        area8.innerHTML = `기본 array : ${array}<br>`;

        //배열에 요소 추가
        array.unshift('c');
        area8.innerHTML += `요소 추가 후 길이 : ${array.unshift()}<br>`;
        area8.innerHTML += `array.unshift('c') : ${array}<br>`;

        //배열에서 요소 제거
        array.shift();
        area8.innerHTML += `제거된 요소 : ${array.shift()}<br>`;
        area8.innerHTML += `array.shift() : ${array}<br>`;

    })

    
    let area9 = document.getElementById('area9');
    let btn9 = document.getElementById('btn9');

    btn9.addEventListener('click',function() {

        //원본에 영향을 미치는 메소드

        let array = Array.of ('a','b',20, 'c', 2, 6);

        area9.innerHTML = `기본 array : ${array}<br>`;

        //인덱스 2부터 4까지 추출(끝인덱스포함하지않음)
        area9.innerHTML += `array.slice(2, 4) : ${array.slice(2, 4)}<br>`;

        //b와 20 사이(=인덱스 2)에 A 추가하기
        array.splice(2,0,'A');
        area9.innerHTML += `array.splice() 추가만 : ${array}<br>`;

        //A부터 2까지(=인덱스 2 ~ 5) 제거하기
        array.splice(2,4);
        area9.innerHTML += `array.splice() 제거만 : ${array}<br>`;

        //a와 b 사이에 (인덱스=1) 12, c 추가하고 b(인덱스 1) 제거
        //array.splice(시작인덱스, 변경할요소갯수, 추가할요소);
        array.splice(1,1,12,'c');
        area9.innerHTML += `array.splice() 추가/제거 : ${array}<br>`;

    })

    
}
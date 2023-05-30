//버튼이 클릭되면
//json 형식 문자열을 파싱해서 화면에서 출력
//
window.onload = function() {
    let table = document.querySelector('#attendant > tbody');

    btn1.addEventListener('click', function(e) {
        e.preventDefault();
        // console.log(jsObj[0]);
        // console.log(jsObj.major);
        // console.log(jsObj.grade);


        // for(let i=0; i<jsObj.length; i++) {
        //     //테이블 행 생성
        //     let newTr = document.createElement('tr');
        //     //테이블 한 칸 생성
        //     let tdName = document.createElement('td');
        //     let tdMajor = document.createElement('td');
        //     let tdGrade = document.createElement('td');

        //     //텍스트 생성
        //     let Name = document.createTextNode(jsObj[i].name);
        //     let Major = document.createTextNode(jsObj[i].major);
        //     let Grade = document.createTextNode(jsObj[i].grade);

        //     //텍스트 연결
        //     tdName.appendChild(Name);
        //     tdMajor.appendChild(Major);
        //     tdGrade.appendChild(Grade);

        //     //테이블 연결
        //     newTr.appendChild(tdName);
        //     newTr.appendChild(tdMajor);
        //     newTr.appendChild(tdGrade);

        //     //출력
        //     table.appendChild(newTr);
        // }

        for(obj in jsObj) {
            //테이블 행 생성
            let newTr = document.createElement('tr');
            //테이블 한 칸 생성
            let tdName = document.createElement('td');
            let tdMajor = document.createElement('td');
            let tdGrade = document.createElement('td');

            //텍스트 생성
            let Name = document.createTextNode(jsObj[obj].name);
            let Major = document.createTextNode(jsObj[obj].major);
            let Grade = document.createTextNode(jsObj[obj].grade);

            //텍스트 연결
            tdName.appendChild(Name);
            tdMajor.appendChild(Major);
            tdGrade.appendChild(Grade);

            //테이블 연결
            newTr.appendChild(tdName);
            newTr.appendChild(tdMajor);
            newTr.appendChild(tdGrade);

            //출력
            table.appendChild(newTr);
        }


        
    }) 
}

//json 형식의 문자열


//json 형식의 문자열 생성
//json 문자열 안에 또다른 json 문자열을 지정할 수 있다
//{"키" : 값, "키" : 값}
let jsonStr = `[
    {
    "name" : "도레미",
    "major" : "컴퓨터공학",
    "grade" : 2
    },

    {
        "name" : "도레미",
        "major" : "컴퓨터공학",
        "grade" : 2
    },

    {
        "name" : "도레미",
        "major" : "컴퓨터공학",
        "grade" : 2
    }
]`;

// let jsonStr = `
//     {
//         "name" : "도레미",
//         "major" : "컴퓨터공학",
//         "grade" : 2
//     }`;

//jsObj로 변경
let jsObj = JSON.parse(jsonStr);


//화면에 출력
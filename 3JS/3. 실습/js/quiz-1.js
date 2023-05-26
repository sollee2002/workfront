window.onload = function() {

    btn1.addEventListener('click', function(e) {
        e.preventDefault();
        let name = document.getElementById('username').value;
        let major = document.getElementById('major').value;

        // console.log(name);
        // console.log(major);

        //받은 값 텍스트 노드
        let nameNode = document.createTextNode(name);
        let majorNode = document.createTextNode(major);

        // console.log(nameNode);
        // console.log(majorNode);

        let table = document.getElementById('attendant');

        //td 생성
        var tdNode1 = document.createElement('td'); //이름테이블 
        var tdNode2 = document.createElement('td'); //전공테이블

        //td에 텍스트노드 연결
        tdNode1.appendChild(nameNode);
        tdNode2.appendChild(majorNode);

        //tr생성
        var trNode = document.createElement('tr');
    
        //tr에 td연결
        trNode.appendChild(tdNode1);
        trNode.appendChild(tdNode2);

        table.appendChild(trNode);

    })



}
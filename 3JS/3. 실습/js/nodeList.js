window.onload = function() {

    btn1.addEventListener('click', function() {
        
        //p 노드 생성
        let pNode1 = document.createElement('p');
        let pNode2 = document.createElement('p');
        let pNode3 = document.createElement('p');
        let pNode4 = document.createElement('p');
        
        //텍스트 노드 생성
        let java = document.createTextNode('Java');
        let oracle = document.createTextNode('Oracle');
        let JSP_Severlet = document.createTextNode('JSP/Severlet');
        let Spring = document.createTextNode('Spring');
        
        //p노드와 텍스트노드 연결
        pNode1.appendChild(java);
        pNode2.appendChild(oracle);
        pNode3.appendChild(JSP_Severlet);
        pNode4.appendChild(Spring);
        
        //부모요소
        let body = document.querySelector('body');
        //위치
        let p1 = document.querySelector('p');
        let p2 = document.querySelectorAll('p')[0];
        let p3 = document.querySelector('hr');
        let p4 = document.querySelectorAll('hr')[0];
        
        body.insertBefore(pNode1, p1);
        body.insertBefore(pNode2, p2);
        body.insertBefore(pNode3, p3);
        body.insertBefore(pNode4, p4);
    })

    btn2.addEventListener('click',function() {

        //li 노드 생성
        let liNode1 = document.createElement('li');
        let liNode2 = document.createElement('li');
        let liNode3 = document.createElement('li');
        let liNode4 = document.createElement('li');

        //텍스트 노드 생성
        let java = document.createTextNode('Java');
        let oracle = document.createTextNode('Oracle');
        let JSP_Severlet = document.createTextNode('JSP/Severlet');
        let Spring = document.createTextNode('Spring');

        //li 노드와 텍스트 노드 연결
        liNode1.appendChild(java);
        liNode2.appendChild(oracle);
        liNode3.appendChild(JSP_Severlet);
        liNode4.appendChild(Spring);

        //위치
        let li1 = document.querySelector('li');
        let li2 = document.querySelectorAll('li')[0];
        let li3 = document.querySelectorAll('li')[4];
        let li4 = document.querySelectorAll('li')[5];

        items.insertBefore(liNode1, li1);
        items.insertBefore(liNode2, li2);
        items.insertBefore(liNode3, li3);
        items.insertBefore(liNode4, li4);

    })

}
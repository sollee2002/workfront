window.onload = function() {

    order.addEventListener('click', function() {
        
        // alert('주문되었습니다');

        //요소노드
        let eNode = document.createElement('p');
        
        //추가할 텍스트노드
        let text = document.querySelector('#container > h2').innerHTML;
        let tNode = document.createTextNode(text);
        console.log(text)
        
        eNode.appendChild(tNode);
        orderInfo.appendChild(eNode);
        
        eNode.style.fontSize = '0.8em';
        eNode.style.fontWeight = '800';
        eNode.style.color = 'blue';


    })


}
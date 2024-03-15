function createLittleSq (){     
    const square = document.createElement("div");
    square.className = 'littlesquare'
    return square        
}

let button = document.getElementById('startbutton')

button.addEventListener('click', function(){
    document.getElementById('mainsquare').classList.toggle('d-none')
    
})   
    let mainsquare = document.getElementById('mainsquare')

    for (let i = 1; i<= 100; i++){
        let littlesq = createLittleSq();
        mainsquare.appendChild(littlesq);
        littlesq.addEventListener('click', function(){
            littlesq.classList.add('squareon')
            const node = document.createElement("div");
            const textnode = document.createTextNode(i);
            node.appendChild(textnode)
            console.log(node);
            littlesq.appendChild(node)
            console.log('Hai cliccato la cella n.', i)
            
        }, {once : true})
    }
    
    



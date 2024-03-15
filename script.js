function createLittleSq (){     
    const square = document.createElement("div");
    square.className = 'littlesquare'
    return square        
}

let button = document.getElementById('startbutton')

button.addEventListener('click', function(){
    //  document.getElementById('mainsquare').classList.toggle('d-none')
    let mainsquare = document.getElementById('mainsquare')

    for (let i = 1; i<= 100; i++){
        let littlesq = createLittleSq();
        mainsquare.appendChild(littlesq);
        littlesq.addEventListener('click', function(){
            littlesq.classList.add('squareon')
            let number = createElement("div");

            console.log('Hai cliccato la cella n.', i)
            
        })
    }
    
    
})


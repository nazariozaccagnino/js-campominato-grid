let button = document.getElementById('startbutton')

button.addEventListener('click', function(){
     document.getElementById('mainsquare').classList.toggle('d-none')    
})

for (index = 0; index < 100; index++){
    const square = document.createElement("div");
    square.className = 'littlesquare'
    document.getElementById('mainsquare').appendChild(square)
}


document.addEventListener('click', function(){
    let prova = document.getElementsByClassName('littlesquare');
    prova.classList.toggle('bg-black')
})





    function createHundredSq (){
    for (index = 0; index < 5; index++){
      const square = document.createElement("div");
      square.className = 'littlesquare'
      console.log(square)
    } return
}
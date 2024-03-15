let button = document.getElementById('startbutton')
button.addEventListener('click', function() {
    const littleSquare = document.createElement("div");
    littleSquare.className = 'littlesquare'
    document.getElementById('mainsquare').appendChild(littleSquare)
    
})
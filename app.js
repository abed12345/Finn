//github commit
//detecting arrow key presses
document.addEventListener('keydown', function(e) {
    switch (e.keyCode) {
        //left
        case 37:
            alert('left');
            document.getElementById("text").innerText='Hi'
            document.body.style.backgroundColor = "red";
            break;
        //up
        case 38:
        alert('up');
        document.getElementById("text").innerText='Meow'
        document.body.style.backgroundColor = "white";
        break;
        //right    
        case 39:
            var colors = ['red', 'green', 'purple', 'blue', 'white', 'black' ]
            var color = colors[Math.floor(Math.random()*colors.length)]
            alert(color);
            document.getElementById("text").innerText='Oh the things you can find, if you don’t stay behind!'
            break;
        //left
        case 40:
            alert('down');
            document.getElementById("text").innerText='All we have to decide is what to do with the time that is given us.'
            break;
    }
});


//detecting arrow key presses
document.addEventListener('keydown', function(e) {
    switch (e.keyCode) {
        //left
        case 37:
            alert('left');
            break;
        //up
        case 38:
        alert('up');
            break;
        //right    
        case 39:
            alert('right');
            break;
        //left
        case 40:
            alert('down');
            break;
    }
});

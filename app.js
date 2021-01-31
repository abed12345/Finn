//jquery function to make clouds disapear
$(document).ready(function(){
    $(document).click(function(){
      $(".cloud").slideToggle();
    });
  });

//detecting arrow key presses
document.addEventListener('keydown', function(e) {
//array
    var colors = [
        'background: radial-gradient(circle, rgba(255,255,255,1) 30%, rgba(255,0,211,1) 78%, rgba(110,9,121,1) 100%);', 
        'background: radial-gradient(circle, rgba(255,255,255,1) 30%, rgba(255,106,106,1) 78%, rgba(255,0,0,1) 100%);', 
        'background: radial-gradient(circle, rgba(255,255,255,1) 56%, rgba(0,0,0,1) 100%);',
        'background: radial-gradient(circle, rgba(255,255,255,1) 4%, rgba(197,244,190,1) 20%, rgba(81,255,80,1) 73%, rgba(247,147,79,1) 100%);',
        'background: linear-gradient(43deg, rgba(94,105,218,1) 0%, rgba(253,29,29,1) 50%, rgba(195,69,252,1) 100%);'
    ];
    switch (e.keyCode) {
        //left
        case 37:
            //change text and color
            document.getElementById("text").innerText='Hi';
            document.body.style = colors[0];
            break;
        //up
        case 38:
            //reset
            document.getElementById("text").innerText='Meow';
            document.body.style = 'background: white';
            $(".cloud").show();
            break;
        //right    
        case 39:
            //random color from array 
            var color = colors[Math.floor(Math.random()*colors.length)];
            document.body.style = color;
            break;
        //left
        case 40:
            //pick words one at a time
            var words = ['Finn!!', 'Best Cat!', 'Purr!', 'Meowww!'];
            var i = document.getElementById("count").innerText;
            var word = document.getElementById("text").innerHTML;
            document.getElementById("text").innerText= words[i];
            if (i == 3) {
                i = 0;
            } else {
                i ++;
            }
            document.getElementById("count").innerText=i;
            break;
    }            
});

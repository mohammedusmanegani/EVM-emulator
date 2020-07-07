var maindiv = document.querySelectorAll('one-evm-unit'); 
var unit = maindiv.children;

var currentLed = 0;
function a(id) {
    var button = document.getElementById(id);
    parent = button.parentNode.parentNode;
    var children = parent.children;
    var childId = children[1].id;
    console.log(childId);
    led = document.getElementById(childId);
    if (typeof led !== "undefined") {
        led.style.display = "block";
        hide(led);
    }
}

function hide(led) {
    setTimeout(function(){
        led.style.display = 'none';
    },2500);
    
}

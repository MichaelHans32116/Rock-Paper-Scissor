var isSetCard = 0;
var effect1 = new Audio('music/click.mp3');
var effect2 = new Audio('music/unclick.mp3');
function toggleImage() {
    var player_display = document.getElementById('about_card');

    if (isSetCard == 0) {
        player_display.src = "images/Hans.jpeg"; 
        effect1.play();
        isSetCard = 1; 
    }
    else {
        player_display.src = "images/Back-EN.webp";
        effect2.play();
        isSetCard = 0;
    }
}



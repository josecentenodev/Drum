document.addEventListener("keydown", e => {
    var keydown = e.key;
    makeSound(keydown);
    flashButton(keydown);
})

var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", e => {
        var buttonLetter = e.target.innerHTML;
        makeSound(buttonLetter);
        flashButton(buttonLetter);
    })
}



function makeSound(letter) {
    switch (letter) {
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        default:

    }
}

function flashButton(letter) {
    // var drums = document.getElementsByClassName('drum');
    switch (letter) {
        case "w":
            var wdrum = document.getElementsByClassName('w')[0];
            wdrum.classList.add("flash");
            setTimeout(function() { wdrum.classList.remove("flash"); }, 100);
            break;
        case "a":
            var adrum = document.getElementsByClassName('a')[0];
            adrum.classList.add("flash");
            setTimeout(function() { adrum.classList.remove("flash"); }, 100);
            break;
        case "s":
            var sdrum = document.getElementsByClassName('s')[0];
            sdrum.classList.add("flash");
            setTimeout(function() { sdrum.classList.remove("flash"); }, 100);
            break;
        case "d":
            var ddrum = document.getElementsByClassName('d')[0];
            ddrum.classList.add("flash");
            setTimeout(function() { ddrum.classList.remove("flash"); }, 100);
            break;
        case "j":
            var jdrum = document.getElementsByClassName('j')[0];
            jdrum.classList.add("flash");
            setTimeout(function() { jdrum.classList.remove("flash"); }, 100);
            break;
        case "k":
            var kdrum = document.getElementsByClassName('k')[0];
            kdrum.classList.add("flash");
            setTimeout(function() { kdrum.classList.remove("flash"); }, 100);
            break;
        case "l":
            var ldrum = document.getElementsByClassName('l')[0];
            ldrum.classList.add("flash");
            setTimeout(function() { ldrum.classList.remove("flash"); }, 100);
            break;
        default:

    }
}
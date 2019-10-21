const drums = document.querySelectorAll('.drum');
let drumOnce = true;

for (var i = 0; i < drums.length; i++) {
  drums[i].addEventListener('click', function(){
    hitDrum(this.innerHTML);
    drumAnimation(this.innerHTML);
  });

  document.addEventListener('keydown', function(event){
    if(drumOnce){
      hitDrum(event.key);
      drumAnimation(event.key);
    }
    drumOnce = false;
  });
  document.addEventListener('keyup', function(event){
    drumOnce = true;
  });

  function hitDrum(key){
    switch (key) {
      case "w":
        var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
        break;
      case "a":
        var tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
        break;
      case "s":
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;
      case "d":
        var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
        break;
      case "j":
        var crash = new Audio('sounds/crash.mp3');
        crash.play();
        break;
      case "k":
        var kickbass = new Audio('sounds/kick-bass.mp3');
        kickbass.play();
        break;
      case "l":
        var snare = new Audio('sounds/snare.mp3');
        snare.play();
        break;
      default: console.log();
    }
  }
  function drumAnimation(key){
    var drumToAnimate = document.querySelector("." + key);
    drumToAnimate.classList.add('pressed');
    setTimeout(function(){drumToAnimate.classList.remove('pressed')}, 100);
  }
}


for(var i = 0; i<document.querySelectorAll(".drum").length; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", play);
}

function play(){
  var ch = this.innerHTML;
  // alert("Played " + ch);e
  makeSound(ch);
  buttonAnimations(ch)
}

document.addEventListener("keydown", press);

function press(event){
  makeSound(event.key);
  buttonAnimations(event.key);
}

function makeSound(key){
  switch(key){
    case "w": var aud = new Audio("sounds/tom-1.mp3");
              aud.play();
              break;
    case "a": var aud = new Audio("sounds/tom-2.mp3");
              aud.play();
              break;
    case "s": var aud = new Audio("sounds/tom-3.mp3");
              aud.play();
              break;
    case "d": var aud = new Audio("sounds/tom-4.mp3");
              aud.play();
              break;
    case "j": var aud = new Audio("sounds/snare.mp3");
              aud.play();
              break;
    case "k": var aud = new Audio("sounds/kick-bass.mp3");
              aud.play();
              break;
    case "l": var aud = new Audio("sounds/crash.mp3");
              aud.play();
              break;
            }
}

function buttonAnimations(key){
  var actbtn = document.querySelector("." + key);
  actbtn.classList.add("pressed");
  setTimeout(function(){ actbtn.classList.remove("pressed"); }, 100);
}

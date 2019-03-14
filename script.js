a = document.getElementById("mac");
b = document.getElementById("Nars");
c = document.getElementById("Fenty2");
d = document.getElementById("Setting");
e = document.getElementById("Fenty");
f = document.getElementById("Anastasia");
g = document.getElementById("Nars2");
function purple(el){
	if (el.src.match("images/highend1.png")){
		playSound;
		// if the image is highend1, it plays the ding correct sound.
	} else if (el.src.match("images/bare.png")){
		playSound2;
		// if the image is bare, it plays the buzzing wrong sound.
	} else if (el.src.match("images/nyx-liquid.png")){
		playSound2;
		// if the image is nyx-liquid, it plays the buzzing wrong sound.
	}  else if (el.src.match("images/fentygloss.png")){
		playSound;
		// if the image is fentygloss, it plays the ding correct sound.
	}
}

function playSound(el) {
	document.getElementById('Correct Answer').play();
	el.classList.add("opaque");
	// when the correct image is clicked it will turn opaque showing the user that the image is correct while also playing the ding sound.
}
function playSound2() {
	document.getElementById('Wrong Answer').play();
	// when the wrong image is clicked it will just play the buzzing incorrect sound showing the user that the photo is wrong.
}
function checkColors(elem){
	if (a.classList.contains("opaque") && b.classList.contains("opaque") && c.classList.contains("opaque") && d.classList.contains("opaque")){
		alert("1st Question Answers are correct! Now you can go onto the second question.");
	//when all the images for the first question is opaque, it will show a message telling the user that they can go onto the second question.
	}
}

function checkColors2(elem){
	if (e.classList.contains("opaque") && f.classList.contains("opaque") && g.classList.contains("opaque")){
		alert("2nd Questions Answers are correct! You have completed this escape room and now you can go to the next escape room by clicking on the key.");
			document.getElementById("key").classList.add("show");
			document.getElementById("key").classList.remove("hide");
			document.getElementById("key").removeAttribute("checkColors2");
//when all the images for the second question is opaque, it will show the key and remove the hide class assigned to the image.
	}
}
// this is the timer code that is being used to time the user for how long they have to complete the escape room.
var timeLeft = 60;
    var elem = document.getElementById('some_div');
    
    var timerId = setInterval(countdown, 1000);
    
    function countdown() {
      if (timeLeft == -1) {
        clearTimeout(timerId);
      } else {
        elem.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
      }
    }
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
		// if the image is a cherry, change it to a lemon!
	} else if (el.src.match("images/bare.png")){
		playSound2;
		// if the image is a lemon, change it to an orange!
	} else if (el.src.match("images/nyx-liquid.png")){
		playSound2;
		// if the image is an orange, change it to a cherry!
	}  else if (el.src.match("images/fentygloss.png")){
		playSound;
		// if the image is a lemon, change it to an orange!
	}
}

function playSound(el) {
	document.getElementById('Correct Answer').play();
	el.classList.add("opaque");
	// when the JACKPOT! button is clicked, play the slot machine sound
}
function playSound2() {
	document.getElementById('Wrong Answer').play();
	// when the JACKPOT! button is clicked, play the slot machine sound
}
function checkColors(elem){
	if (a.classList.contains("opaque") && b.classList.contains("opaque") && c.classList.contains("opaque") && d.classList.contains("opaque")){
		alert("1st Question Answers are correct! Now you can go onto the second question.");
	}
}

function checkColors2(elem){
	if (e.classList.contains("opaque") && f.classList.contains("opaque") && g.classList.contains("opaque")){
		alert("2nd Questions Answers are correct! You have completed this escape room and now you can go to the next escape room by clicked on the button.");
			document.getElementById("key").classList.add("show");
			document.getElementById("key").classList.remove("hide");
//i wish this function would work when all lights are yellow, or all are red...
	}
}

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
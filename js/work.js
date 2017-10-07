var reset = document.querySelector("#reset");
var square = document.querySelectorAll(".square");
var colorCode = document.querySelector("#colorCode");
var head = document.querySelector("#top");
var result = document.querySelector("#result");
var hardB = document.querySelector("#hard");
var easyB = document.querySelector("#easy");
var num;
var onceE;
var onceH;

window.onload = function() {
	hardB.classList.add("active");
}


reset.addEventListener("click", function() {
	if(num !== 3){
		num = 6;
	}
	for(var i = 0 ; i < num ; i++) {
		 var h = Math.floor(Math.random() * 256);
		 var t = Math.floor(Math.random() * 256);
		 var o = Math.floor(Math.random() * 256);

		square[i].style.backgroundColor = "RGB(" + h + ", " + t + ", " + o + ")";
	}
	colorCode.textContent = square[Math.floor(Math.random() * num)].style.backgroundColor;
	reset.textContent = "New Colors";
	result.style.color = "black";
	result.textContent = "";
	head.style.backgroundColor = "steelblue";

	if(reset.textContent !== "New Colors")
	{
		hardB.classList.add("active");
	    easyB.classList.remove("active");
	}

	onceE = false;
	onceH = false;

});


square[0].addEventListener("click", function() {
	if(reset.textContent === "play again?") {
		alert("First click on 'Play again?' ");
	}
	else {
		if(square[0].style.backgroundColor === colorCode.textContent) {
			for(i = 0 ; i < num ; i++) {
				square[i].style.backgroundColor = square[0].style.backgroundColor;
			}
				 head.style.backgroundColor = square[0].style.backgroundColor;
				 reset.textContent = "play again?";
				 result.textContent = "Correct!!";
				 result.style.color = "green";
			}
		else {
			square[0].style.backgroundColor = "#232323";
			result.textContent = "try again";
		}
	}

	});


square[1].addEventListener("click", function() {
	if(reset.textContent === "play again?") {
		alert("First click on 'Play again?' ");
	}
	else {
		if(square[1].style.backgroundColor === colorCode.textContent) {
			for(i = 0 ; i < num ; i++) {
				square[i].style.backgroundColor = square[1].style.backgroundColor;
			}
				 head.style.backgroundColor = square[1].style.backgroundColor;
				 reset.textContent = "play again?";
				 result.textContent = "Correct!!";
				 result.style.color = "green";
			}
		else {
			square[1].style.backgroundColor = "#232323";
			result.textContent = "try again";
		}
	}

	});


square[2].addEventListener("click", function() {
	if(reset.textContent === "play again?") {
		alert("First click on 'Play again?' ");
	}
	else {
		if(square[2].style.backgroundColor === colorCode.textContent) {
			for(i = 0 ; i < num ; i++) {
				square[i].style.backgroundColor = square[2].style.backgroundColor;
			}
				 head.style.backgroundColor = square[2].style.backgroundColor;
				 reset.textContent = "play again?";
				 result.textContent = "Correct!!";
				 result.style.color = "green";
			}
		else {
			square[2].style.backgroundColor = "#232323";
			result.textContent = "try again";
		}
	}

	});


square[3].addEventListener("click", function() {
	if(reset.textContent === "play again?") {
		alert("First click on 'Play again?' ");
	}
	else {
		if(square[3].style.backgroundColor === colorCode.textContent) {
			for(i = 0 ; i < num ; i++) {
				square[i].style.backgroundColor = square[3].style.backgroundColor;
			}
				 head.style.backgroundColor = square[3].style.backgroundColor;
				 reset.textContent = "play again?";
				 result.textContent = "Correct!!";
				 result.style.color = "green";
			}
		else {
			square[3].style.backgroundColor = "#232323";
			result.textContent = "try again";
		}
	}

	});


square[4].addEventListener("click", function() {
	if(reset.textContent === "play again?") {
		alert("First click on 'Play again?' ");
	}
	else {
		if(square[4].style.backgroundColor === colorCode.textContent) {
			for(i = 0 ; i < num ; i++) {
				square[i].style.backgroundColor = square[4].style.backgroundColor;
			}
				 head.style.backgroundColor = square[4].style.backgroundColor;
				 reset.textContent = "play again?";
				 result.textContent = "Correct!!";
				 result.style.color = "green";
			}
		else {
			square[4].style.backgroundColor = "#232323";
			result.textContent = "try again";
		}
	}

	});


square[5].addEventListener("click", function() {
	if(reset.textContent === "play again?") {
		alert("First click on 'Play again?' ");
	}
	else {
		if(square[5].style.backgroundColor === colorCode.textContent) {
			for(i = 0 ; i < num ; i++) {
				square[i].style.backgroundColor = square[5].style.backgroundColor;
			}
				 head.style.backgroundColor = square[5].style.backgroundColor;
				 reset.textContent = "play again?";
				 result.textContent = "Correct!!";
				 result.style.color = "green";
			}
		else {
			square[5].style.backgroundColor = "#232323";
			result.textContent = "try again";
		}
	}

	});

easyB.addEventListener("click", function() {
	if(result.textContent === "Correct!!") {
		alert("First click on 'Play again?'");
	}

	else if(result.textContent === "") {
		easyB.classList.add("active");
		hardB.classList.remove("active");
		square[3].classList.add("level");
		square[4].classList.add("level");
		square[5].classList.add("level");

			num = 3;
			if(onceE === false) {
				for(var i = 0 ; i < num ; i++) {
				 var h = Math.floor(Math.random() * 256);
				 var t = Math.floor(Math.random() * 256);
				 var o = Math.floor(Math.random() * 256);

				square[i].style.backgroundColor = "RGB(" + h + ", " + t + ", " + o + ")";
				}
				colorCode.textContent = square[Math.floor(Math.random() * num)].style.backgroundColor;
				onceE = true;
				onceH = false;
			}
	}

 else {
		alert("First complete your game OR choose new colors");
	  }
});


hardB.addEventListener("click", function() {
	if(result.textContent === "Correct!!") {
		alert("First click on 'Play again?'");
	}

	else if(result.textContent === "") {
		easyB.classList.remove("active");
		hardB.classList.add("active");
		square[3].classList.remove("level");
		square[4].classList.remove("level");
		square[5].classList.remove("level");

		num = 6;
		if(onceH == false && onceE ==true ) {
			for(var i = 0 ; i < num ; i++) {
			 var h = Math.floor(Math.random() * 256);
			 var t = Math.floor(Math.random() * 256);
			 var o = Math.floor(Math.random() * 256);

			square[i].style.backgroundColor = "RGB(" + h + ", " + t + ", " + o + ")";
			}
			colorCode.textContent = square[Math.floor(Math.random() * num)].style.backgroundColor;
			onceH = true;
			onceE = false;
		}
	}

	else {
		alert("First complete your game OR choose new colors");
	}
});

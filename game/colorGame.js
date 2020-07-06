var numColors=6;
var colors = generateRandomColor(numColors);
var squares=document.querySelectorAll(".square");
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");
var pickedColor = pickColor();
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easybtn=document.querySelector("#easybutton");
var hardbtn=document.querySelector("#hardbutton");

easybtn.addEventListener("click",function(){
	easybtn.classList.add("selected");
	hardbtn.classList.remove("selected");
	numColors=3;
	colors=generateRandomColor(numColors);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.background=colors[i];
		}else{
			squares[i].style.display="none";
		}
	}
});

hardbtn.addEventListener("click",function(){
	hardbtn.classList.add("selected");
	easybtn.classList.remove("selected");
	numColors=6;
	colors=generateRandomColor(numColors);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background=colors[i];
		squares[i].style.display="block";
		
	}
});

resetButton.addEventListener("click",function(){
	colors=generateRandomColor(numColors);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background=colors[i];
	}
	h1.style.background="steelblue";
});

colorDisplay.textContent= colors[3];

for(var i = 0; i< squares.length; i++){
	squares[i].style.background= colors[i];

	squares[i].addEventListener("click",function(){
		var clickedColor = this.style.background;
		if (clickedColor === pickedColor) {
			changeColor(clickedColor);
			messageDisplay.textContent="Correct";
			h1.style.background=clickedColor;
			resetButton.textContent="Play again?";
		}
		else{
			this.style.background = "#232323";
			messageDisplay.textContent= "Try again";
		}
	});
}

function changeColor(color){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColor(num){
	 var arr=[];
	 for (var i = 0; i < num; i++) {
	 	arr.push(randomColor());
	 }
	 return arr;
}

function randomColor(){
	var r=Math.floor(Math.random() * 256);
	var g=Math.floor(Math.random() * 256);
	var b=Math.floor(Math.random() * 256);
	return "rgb("+ r +", "+ g +", "+ b +")";
}
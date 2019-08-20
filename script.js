alert("this game is braught to you by Wilson Lee");

var ready = prompt("Are you ready Benjamin Lee?");
    if (ready = "yes"){
        alert("my nigga!");
    }else{
        alert("oh well your still gunna play the damn game fool!");
    }

var numSquares = 6; 

var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square"); 
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay"); 
var messageDisplay = document.querySelector("#message"); 
var h1 = document.querySelector("h1"); 
var resetButton = document.querySelector("#reset"); 
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");  
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    h1.style.backgroundColor = "steelblue";
    pickedColor = pickColor(); 
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    for (var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none"; 
        }
    }
});

hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;  
    colors = generateRandomColors(numSquares);
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    pickedColor = pickColor(); 
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++){

            squares[i].style.backgroundColor = colors[i];

            squares[i].style.display = "block"; 
    }  
});

resetButton.addEventListener("click", function(){
    //gen new colors 
    colors = generateRandomColors(numSquares);
    //pick new color from array 
    pickedColor = pickColor();
    //change colordisplay to match picked colors 
    colorDisplay.textContent = pickedColor;
    //change color of 
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    this.textContent = "New Colors";
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = colors[i]; 
    }
    h1.style.backgroundColor = "#steelblue";
});

colorDisplay.textContent = pickedColor; 


for(var i = 0; i < squares.length; i++){
    //add initual colors to squares 
    squares[i].style.backgroundColor = colors[i]

    //add click listeners to squares
    squares[i].addEventListener("click", function(){
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor; 
        //compare color to picked color 
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!"; 
            resetButton.textContent = "Play Again?";
            changeColors(clickedColor); 
            h1.style.background = clickedColor; 
        }else{ 
            this.style.backgroundColor = "#232323"; 
            messageDisplay.textContent = "Try Again Bro!"; 
        }
    });
}

function pickColor(){
    //the function math.random is how we pick random number in js. 
    // math.floor(math.random() * 6 + 1) - math floor rounds numbers to the nearest decimal. 
    var random = Math.floor(Math.random() * colors.length); 
    return colors[random]; 
}



function changeColors(color){
    //looping through all squares
    for(var i = 0; i < squares.length; i++){
    //change each color to match given color 
    squares[i].style.background = color; 
    }
}


function generateRandomColors(num){
    //make array 
    var arr = []
    //repeat num times
    for(var i = 0; i < num; i++){
        arr.push(randomColor())
        //get random color and push into array 
    }
    //return array 
    return arr; 
}

function randomColor(){
    //pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
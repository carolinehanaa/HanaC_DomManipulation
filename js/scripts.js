let btnOne = document.getElementById("btnOne");
let btnTwo = document.getElementById("btnTwo");
let btnThree = document.getElementById("btnThree");
let btnFour = document.getElementById("btnFour");
let btnFive = document.getElementById("btnFive");
let btnSix = document.getElementById("btnSix");
let btnSeven = document.getElementById("btnSeven");
let btnEight = document.getElementById("btnEight");
let btnNine = document.getElementById("btnNine");
let btnTen = document.getElementById("btnTen");


let changeMeOne = document.getElementById("changeMeOne");
let changeMeTwo = document.getElementById("changeMeTwo");
let changeMeThree = document.getElementById("changeMeThree");
let changeMeFour = document.getElementById("changeMeFour");
let changeMeFive = document.getElementById("changeMeFive");
let changeMeSix = document.getElementById("changeMeSix");
let changeMeSeven = document.getElementById("changeMeSeven");
let changeMeEight = document.getElementById("changeMeEight");
let changeMeNine = document.getElementById("changeMeNine");
let changeMeTen = document.getElementById("changeMeTen");



btnOne.addEventListener(`click` , function(){
	changeMeOne.innerText = "Hello";
})

btnTwo.addEventListener(`click`, function(){
	changeMeTwo.innerText = "How are you today?";
})    
	
btnThree.addEventListener(`click`, function(){
    changeMeThree.innerText = "My name is Caroline";
})

btnFour.addEventListener(`click`, function(){
    changeMeFour.innerText = "I Love JavaScript!!!!!!"
})

btnFive.addEventListener("click", function(){
	changeMeFive.innerText = "THIS";
    changeMeFive.className = "redclass";
})

btnSix.addEventListener("click", function(){
	changeMeSix.innerText = "IS";
    changeMeSix.className = "orangeclass";
})

btnSeven.addEventListener("click", function(){
	changeMeSeven.innerText = "SO";
    changeMeSeven.className = "yellowclass";
})

btnEight.addEventListener("click", function(){
	changeMeEight.innerText = "MUCH";
    changeMeEight.className = "greenclass";
})

btnNine.addEventListener("click", function(){
	changeMeNine.innerText = "FUN LOL";
    changeMeNine.className = "blueclass";
})

btnTen.addEventListener("click", function(){
	changeMeTen.innerText = "!!!!!!!!!";
    changeMeTen.className = "purpleclass";
})

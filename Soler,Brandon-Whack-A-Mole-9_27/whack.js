//
//Demo: Whack-A-Mole
//Author: Brandon Soler
//Date: 9/27/19
//Due Date: 10/1/19
//
const MAX = 7; //setting the maximum holes to 7 and minimum to 1
const MIN = 1;

let hit = 0;
let miss = 0;
let total = 0;
										//setting all my variables to 0 and null when the page loads
let timer = 0;
let rdNum = 0;
let lastNum = 0;
let moleHole = null;


function reload() //initial function that resets every variable
{
	 hit = 0;
	 miss = 0;
	 total = 0;
	 							//this function grabs the new values of the variables and clears it back to its default
	 timer = 0;
	 rdNum = 0;
	 lastNum = 0;
	 moleHole = null;	

	document.getElementById('hole1').innerHTML = `<img src="img/dirt.png" draggable="false" onClick = "moleOnClick('miss')">`;
	document.getElementById('hole2').innerHTML = `<img src="img/dirt.png" draggable="false" onClick = "moleOnClick('miss')">`;
	document.getElementById('hole3').innerHTML = `<img src="img/dirt.png" draggable="false" onClick = "moleOnClick('miss')">`; //changing the holes back to default
	document.getElementById('hole5').innerHTML = `<img src="img/dirt.png" draggable="false" onClick = "moleOnClick('miss')">`;
	document.getElementById('hole6').innerHTML = `<img src="img/dirt.png" draggable="false" onClick = "moleOnClick('miss')">`;
	document.getElementById('hole7').innerHTML = `<img src="img/dirt.png" draggable="false" onClick = "moleOnClick('miss')">`;
}

function startGame() //start game function
{
	document.getElementById("counter").innerHTML = "";
	document.getElementById("score").innerHTML = "";
	document.getElementById("hits").innerHTML = "Hits: " //when the start button is first pushed i set all these values empty because its a new game
	document.getElementById("miss").innerHTML = "Misses: "
	document.getElementById("reenter").innerHTML = "";

	reload(); //run the reload function after start game has been pressed so values are restarted each game

	timer = 30; //setting the countdown timer to 30 seconds
	
	document.getElementById("counter").innerHTML = timer; //setting the counter text display to the timer variable 
	countdown = setInterval(counter,1000); //using set interval to countdown from 30 a second
	document.getElementById("startButton").disabled=true; //disabling the start button once the start button is pressed //(the stop button is still enabled)
	
	randomizer(); //then run the randomize function

}

function randomizer() //randomizer function
{
	if (moleHole == null) //if there is nothing in the hole it will just log go 
	{
		console.log("Go")
	}
	else
	{
		moleHole.innerHTML = `<img src="img/dirt.png" onClick = "moleOnClick('miss')" draggable="false">` //if there is a mole in that hole it will clear it so
	}																									  //that the holes that are not selected are set to default

	rdNum = Math.floor(Math.random() * (MAX - MIN) + MIN); //making a random number
	
	if (rdNum === lastNum) //if the random number is equal to the last number 
	{
		randomizer(); //run the random function again so it rerolls
	}

	else 
	{
		moleHole = document.getElementById(`hole${rdNum}`); //if not the mole hole will put a mole in the random number using getelementbyid
		moleHole.innerHTML = `<img src="img/mole.png" onClick = "moleOnClick('hit')" draggable="false">`; //a mole will appear
	}

	lastNum = rdNum; //setting the last number to random number

}

function moleOnClick(userInput) //onclick function
{
	if (userInput === "hit") //if the user hits the mole
	{
		randomizer(); //run the randomizer function
		hit++; //add a hit to the hit counter by incrementing
		
		document.getElementById("hits").innerHTML = "Hits: "+hit; //adding the number of of hits to the hit score
		document.getElementById("score").innerHTML = "Nice!"; //giving the user a message when hitting the mole
	}

	else if (userInput === "miss") //if the user does not hit the mole
	{
		miss++; //add a miss to the miss counter by incrementing
		randomizer(); //running the randomizer function

		document.getElementById("score").innerHTML ="Try harder!"; //gives the user a message when not hitting the mole
		document.getElementById("miss").innerHTML = "Misses: "+miss; //displaying the misses
	}

}

function counter() //countdown timer
{
	timer--; //decrementing by once

	document.getElementById("counter").innerHTML=timer; //displaying the counter


	if (timer === -1) //if the timer reaches 0
	{
		document.getElementById("counter").innerHTML = 0; //the counter will display zero


		clearInterval(countdown); //clearing the countdown timer
		document.getElementById("startButton").disabled=false; //enabling the start button

		total = hit + miss; //adding hits and misses to make my total variable

		totalPercentage = parseFloat(hit / total).toFixed(2); //making the percentage of hit to total ratio using parsefloat to make it a float and to fixed to use 
															  // two decimal places
		if (totalPercentage == 1) //if the percentage of the ratio is 1:1 set the percentage to 100
			{
				totalPercentage = "100"
			}
		else if (total === 0) //if the percentage of ratio is 0:0
		{
			totalPercentage = "0" //setting the total percentage to 0
		}


		document.getElementById("hits").innerHTML = ""; //clear my hit counter display 
		document.getElementById("miss").innerHTML ="";	//clear my miss counter display
		document.getElementById("score").innerHTML = `You hit ${hit} out of ${total}\n(${totalPercentage}%)`; //printing the score and percentage
		document.getElementById("counter").innerHTML=""; //removing the countdown number
		document.getElementById("reenter").innerHTML = "Do you want to go again? If so, press the start button!"; //asking the user if they want to retry
		
		reload(); //after the countdown is over all the global values will be set to their default

		document.getElementById('hole1').innerHTML = '<img src="img/dirt.png" draggable="false">';
		document.getElementById('hole2').innerHTML = '<img src="img/dirt.png" draggable="false">';
		document.getElementById('hole3').innerHTML = '<img src="img/dirt.png" draggable="false">';	//the holes will be set to the default imageand will not be clickable 
		document.getElementById('hole4').innerHTML = '<img src="img/dirt.png" draggable="false">';
		document.getElementById('hole5').innerHTML = '<img src="img/dirt.png" draggable="false">';
		document.getElementById('hole6').innerHTML = '<img src="img/dirt.png" draggable="false">';
		document.getElementById('hole7').innerHTML = '<img src="img/dirt.png" draggable="false">';
		

	}
}



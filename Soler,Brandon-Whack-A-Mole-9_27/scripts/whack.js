//
//Demo: Whack-A-Mole
//Author: Brandon Soler
//Date: 9/27/19
//Due Date: 10/1/19
//
const MAX = 7;
const MIN = 1;

let hit = 0;
let miss = 0;
let total = 0;

let timer = 0;
let rdNum = 0;
let lastNum = null;
let moleOut = null;


function reload()
{
	let hit = 0;
	let miss = 0;
	let total = 0;

	let timer = 0;
	let rdNum = 0;
	let lastNum = null;
	let moleOut = null;	

	document.getElementById('hole1').innerHTML = `<img src="img/dirt.png" draggable="false" onClick = "moleOnClick('miss')">`;
	document.getElementById('hole2').innerHTML = `<img src="img/dirt.png" draggable="false" onClick = "moleOnClick('miss')">`;
	document.getElementById('hole3').innerHTML = `<img src="img/dirt.png" draggable="false" onClick = "moleOnClick('miss')">`;
	document.getElementById('hole5').innerHTML = `<img src="img/dirt.png" draggable="false" onClick = "moleOnClick('miss')">`;
	document.getElementById('hole6').innerHTML = `<img src="img/dirt.png" draggable="false" onClick = "moleOnClick('miss')">`;
	document.getElementById('hole7').innerHTML = `<img src="img/dirt.png" draggable="false" onClick = "moleOnClick('miss')">`;
}

function startGame()
{
	document.getElementById("counter").innerHTML = "";
	document.getElementById("score").innerHTML = "";
	document.getElementById("hits").innerHTML = "Hits: "
	document.getElementById("miss").innerHTML = "Misses: "
	document.getElementById("reenter").innerHTML = "";

	reload();

	timer = 2;
	document.getElementById("counter").innerHTML = timer;
	countdown = setInterval(counter,1000); 
	document.getElementById("startButton").disabled=true; 
	auto = setInterval(moleAuto, 850);
	
	randomizer(); 

}

function randomizer()
{
	if (moleOut == null)
	{
		console.log("")
	}
	else
	{
		moleOut.innerHTML = `<img src="img/dirt.png" onClick = "moleOnClick('miss')" draggable="false">`
	}

	rdNum = Math.floor(Math.random() * (MAX - MIN) + MIN);
	
	if (rdNum === lastNum)
	{
		randomizer();
	}

	else 
	{
		moleOut = document.getElementById(`hole${rdNum}`);

		moleOut.innerHTML = `<img src="img/mole.png" onClick = "moleOnClick('hit')" draggable="false">`;
	}

	lastNum = rdNum;

}

function moleOnClick(userInput)
{
	if (userInput === "hit")
	{
		clearInterval(auto);
		auto = setInterval(moleAuto, 850)

		randomizer();
		hit++;
		
		document.getElementById("hits").innerHTML = "Hits: "+hit;
		document.getElementById("score").innerHTML = "Nice!";
	}

	else if (userInput === "miss")
	{
		clearInterval(auto);
		auto = setInterval(moleAuto, 850)

		miss++;
		randomizer();

		document.getElementById("score").innerHTML ="Try harder!";
		document.getElementById("miss").innerHTML = "Misses: "+miss;

		console.log(miss)
	}

}

function moleAuto()
{
	randomizer();
	miss++;
	document.getElementById("miss").innerHTML = "Misses: "+miss;

}


function counter()
{
	timer--;

	document.getElementById("counter").innerHTML=timer;


	if (timer === -1)
	{
		document.getElementById("counter").innerHTML = 0;


		clearInterval(countdown);
		clearInterval(auto);
		document.getElementById("startButton").disabled=false;

		total = hit + miss;

		totalPercentage = parseFloat(hit / total).toFixed(2);

		if (totalPercentage == 1)
			{
				totalPercentage = "100"
			}


		document.getElementById("hits").innerHTML = "";
		document.getElementById("miss").innerHTML ="";
		document.getElementById("score").innerHTML = `You hit ${hit} out of ${total}\n(${totalPercentage}%)`;
		document.getElementById("counter").innerHTML="";
		document.getElementById("reenter").innerHTML = "Do you want to go again? If so, press the start button!";
		
		reload();

		document.getElementById('hole1').innerHTML = '<img src="img/dirt.png" draggable="false"';
		document.getElementById('hole2').innerHTML = '<img src="img/dirt.png" draggable="false"';
		document.getElementById('hole3').innerHTML = '<img src="img/dirt.png" draggable="false"';	
		document.getElementById('hole4').innerHTML = '<img src="img/dirt.png" draggable="false"';
		document.getElementById('hole5').innerHTML = '<img src="img/dirt.png" draggable="false"';
		document.getElementById('hole6').innerHTML = '<img src="img/dirt.png" draggable="false"';
		document.getElementById('hole7').innerHTML = '<img src="img/dirt.png" draggable="false"';
		

	}
}


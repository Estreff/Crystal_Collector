$(document).ready(function() {

// Global Variables
	var myScore = 0;
	var wins = 0;
	var losses = 0;
	var randomNumber = 0;
	var gem1 = 0;
	var gem2 = 0;
	var gem3 = 0;
	var gem4 = 0;

// Create Random Numbers to Match and for Gems
function getRandom() {
	// Set Minimum for the Match Number
	var minMatch = 19;
	// Set Maximum for the Match Number
	var maxMatch = 120;
	// Set Minimum for the Gems
	var minGem = 1;
	// Set Miaxmum for the Gems
	var maxGem = 12;
	// Creat Match Number
	randomNumber = Math.floor(Math.random() * ((maxMatch-minMatch) + 1) + minMatch);
	$('#matchNumber').html(randomNumber);

	// Create 4 random Gem numbers
	gem1 = Math.floor(Math.random() * ((maxGem-minGem) + 1) + minGem);
	gem2 = Math.floor(Math.random() * ((maxGem-minGem) + 1) + minGem);
	gem3 = Math.floor(Math.random() * ((maxGem-minGem) + 1) + minGem);
	gem4 = Math.floor(Math.random() * ((maxGem-minGem) + 1) + minGem)

}


// Function to Start Game
function startGame() {

	// Get Random Numbers
	getRandom();	
	
	// On Click of Gem 1 
	$("#gem1").on("click", function() {
		myScore += gem1;
		$('#yourNumber').text(myScore);
		winLoss();
	})

	// On Click of Gem 2
	$("#gem2").on("click", function() {
		myScore += gem2;
		$('#yourNumber').text(myScore);
		winLoss();
	})

	// On Click of Gem 3
	$("#gem3").on("click", function() {
		myScore += gem3;
		$('#yourNumber').text(myScore);
		winLoss();
	})

	// On Click of Gem 4
	$("#gem4").on("click", function() {
		myScore += gem4;
		$('#yourNumber').text(myScore);
		winLoss();
	})
}
	
	// Check to see if you Win or Lose
	function winLoss() {
		if (myScore === randomNumber) {
				wins += 1;			
				alert('You have won!! Your current games won are: ' + wins);
				$("#win").text(wins);
				myScore = 0;
				$('#yourNumber').text(myScore);
				getRandom();		


			} else if (myScore > randomNumber) {
				losses += 1;
				alert('You have lost!!')
				$("#loss").text(losses);
				myScore = 0;
				$('#yourNumber').text(myScore);
				getRandom();
				
			}
		
	}

// Call Start Game Function
startGame();


});
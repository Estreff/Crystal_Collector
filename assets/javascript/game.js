$(document).ready(function() {

	var myScore = 0;
	var wins = 0;
	var losses = 0;
	var randomNumber = Math.floor(Math.random() * ((120-19) + 1) + 19);
	var gem1 = Math.floor(Math.random() * ((12-1) + 1) + 1);
	var gem2 = Math.floor(Math.random() * ((12-1) + 1) + 1);
	var gem3 = Math.floor(Math.random() * ((12-1) + 1) + 1);
	var gem4 = Math.floor(Math.random() * ((12-1) + 1) + 1);



function getRandom() {
	$("#matchNumber").text(randomNumber);
	

}

function startGame() {

	getRandom();
	
	
	
	$("#gem1").on("click", function() {
		myScore += gem1;
		$('#yourNumber').text(myScore);
		console.log('myScore: ', myScore);
		winLoss();
	})

	$("#gem2").on("click", function() {
		myScore += gem2;
		$('#yourNumber').text(myScore);
		console.log('myScore: ', myScore);
		winLoss();
	})

	$("#gem3").on("click", function() {
		myScore += gem3;
		$('#yourNumber').text(myScore);
		console.log('myScore: ', myScore);
		winLoss();
	})

	$("#gem4").on("click", function() {
		myScore += gem4;
		$('#yourNumber').text(myScore);
		console.log('myScore: ', myScore);
		winLoss();
	})
}

	function winLoss() {
		if (myScore === randomNumber) {
				wins += 1;			
				alert('You have won!! Your current games won are: ' + wins);
				$("#win").text(wins);
				return;
			} else if (myScore > randomNumber) {
				losses += 1;
				alert('You have lost!!')
				$("#loss").text(losses);
				return;
			}
		
	}

	

startGame();
	//add gem to total
/* if (gem 1 selected)
	myScore + gem1;
	//check if user wins o loses
	if (myScore + gem1 = randomNumber){
		win
	} else if (myScore + gem1 > randomNumber) {
		lose
	} else if (myScore + gem1 > randomNumber) {
		lose
	}

	else if (gem2 slected)
	myScore + gem2


*/

});
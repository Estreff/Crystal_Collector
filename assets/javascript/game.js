$(document).ready(function() {

	var myScore = 0;
	var wins = 0;
	var losses = 0;
	var randomNumber;
	var gem1;
	var gem2;
	var gem3;
	var gem4;



function getRandom() {
	var minMatch = 19;
	var maxMatch = 120;
	var minGem = 1;
	var maxGem = 12;
	randomNumber = Math.floor(Math.random() * ((maxMatch-minMatch) + 1) + minMatch);
	$('#matchNumber').html(randomNumber);


	gem1 = Math.floor(Math.random() * ((maxGem-minGem) + 1) + minGem);
	console.log("gem1: ", gem1);
	gem2 = Math.floor(Math.random() * ((maxGem-minGem) + 1) + minGem);
	console.log("gem2: ", gem2);
	gem3 = Math.floor(Math.random() * ((maxGem-minGem) + 1) + minGem);
	console.log("gem3: ", gem3);
	gem4 = Math.floor(Math.random() * ((maxGem-minGem) + 1) + minGem);
	console.log("gem4: ", gem4);

}

function startGame() {

	getRandom();
	console.log('1st Random: ', randomNumber)
	
	
	
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
				myScore = 0;
				$('#yourNumber').text(myScore);
				getRandom();
				console.log('2nd Random: ', randomNumber);
				console.log("2nd gem1: ", gem1);
				console.log("2nd gem2: ", gem2);
				console.log("2nd gem3: ", gem3);
				console.log("2nd gem4: ", gem4);
				



			} else if (myScore > randomNumber) {
				losses += 1;
				alert('You have lost!!')
				$("#loss").text(losses);
				myScore = 0;
				$('#yourNumber').text(myScore);
				getRandom();
				console.log('2nd Random: ', randomNumber);
				console.log("2nd gem1: ", gem1);
				console.log("2nd gem2: ", gem2);
				console.log("2nd gem3: ", gem3);
				console.log("2nd gem4: ", gem4);
				
			}
		
	}

	

startGame();


});
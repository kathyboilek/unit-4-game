// Variables

var targetNumber = "";
var wins = 0;
var losses = 0;
var counter = 0;
var images = [
    "./assets/images/Crystal-Blue.png", 
    "./assets/images/Crystal-Purple.png", 
    "./assets/images/Crystal-Red.png", 
    "./assets/images/Crystal-Yellow.png"];

// Functions

	function randomTargetNumber () {
		targetNumber = Math.floor(Math.random() * 102) + 19;
	}

	function resetCrystals () {
		for (var i = 0; i < images.length; i++) {
			var crystal = $("<img>");
			crystal.addClass("crystal");
			crystal.attr("src", images[i]);
			crystal.attr("value", (Math.floor(Math.random() * 12) + 1));
			crystal.attr("height", "100");
			$(".crystal-images").append(crystal);
		}
	}

	function resetHTML () {
		$(".target-number").html("<h4>Your target number is:</h4>" + targetNumber);
		$(".win-lose-counter").html("<h4>Wins: " + wins + "</h4>" + "<h4>Losses: " + losses + "</h4>");
		$(".score-number").html("<h4>Your total score is:</h4>" + counter);
		$(".crystal-images").empty();
	}

	function totalReset () {
		randomTargetNumber ();
		counter = 0;
		resetHTML ();
		resetCrystals ();
	}

// Inital Page Set Up
	randomTargetNumber();
	resetHTML ();
	resetCrystals ();

// Click Functions
	function crystalClick () {
		//attr returns first value of selected html element
		counter += parseInt($(this).attr("value"));
		$(".score-number").html(counter);
		if (counter == targetNumber) {
			wins++;
			totalReset();
		}
		else if (counter > targetNumber) {
			losses++;
			totalReset();
		};
	};

	//call crystalClick function
	$(document).on("click", ".crystal", crystalClick);
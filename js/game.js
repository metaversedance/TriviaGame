var questions = {
	"One of Rick's catchphrases is wubalobgobob" : false,
	"Rick's last name is 'Smith'": false,
	"A Schmeckle is a form of currency": true,
	"'I'm Mr. Bulldops' is a lyric from a Rick & Morty song": true,
	"There is an On a Cob Planet in Rick & Morty": true,
	"Mr. Poopybutthole is an alien parasite": false,
	"Summer Smith becomes pals with the devil": true,
	"A Fleeb is used to make a Plumbus": true
}



function checkAnswers() {
	var answersCorrect = 0 ;
	var answersWrong = 0;
	for (var question in questions) {
// https://stackoverflow.com/questions/9618504/get-radio-button-value-with-javascript

		var answer = Boolean(parseInt($('input[name="'+question+'"]:checked').val()));
		if(questions[question]===answer) {
			answersCorrect++;
		} else {
			answersWrong++
		}

	}
	$("#final-score").html("Answers Correct: " + answersCorrect + " Answers Wrong: " + answersWrong )
}
function createQuestions() {
	for(var question in questions ) {
		$(document.body).append(question);
		$(document.body).append("<br>")
		$(document.body).append('<input type="radio" name="'+ question+ '"value="1" checked>');
		$(document.body).append("true");
		$(document.body).append('<input type="radio" name="' +question+ '" value="0">');
		$(document.body).append("false");
		$(document.body).append("<br>");
	}

}

var clickedOnce = false;
var countDownCount = 25;

function countdown() {
	if(!clickedOnce) {
		createQuestions()
		var interval = setInterval(function() {
			if(countDownCount > 0) {
				countDownCount--;
				$("#time-left").html(countDownCount)
			} else {
				checkAnswers()
				clearInterval(interval)
			}
		},1000)
		clickedOnce = true;
	}
}

$("#start-bttn").on("click",countdown )

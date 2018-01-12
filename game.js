var heightJohn=172;
var heihtMike=165;
var ageJohn=26;
var ageMike=29;

var scoreJohn=heightJohn+5*ageJohn;
var scoreMike=heihtMike+5*ageMike;

if(scoreJohn>scoreMike){
    console.log('JOhn wins the game with   '+ scoreJohn + ' points!');
}else if(scoreMike>scoreJohn){
    console.log('Mike wins the game with ' + scoreMike + ' points!');
}else if(scoreJohn===scoreMike){
    console.log('There is a draw.');
}

console.log('It\'s a draw');
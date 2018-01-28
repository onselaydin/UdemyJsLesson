(function(){
    function Question(question,answer,correct){
    this.question=question;
    this.answers=answer;
    this.correct=correct;
}

Question.prototype.displayQuestion=
    function() {
    console.log(this.question);
    for(var i=0;i< this.answers.length; i++){
            console.log(i + ': '+ this.answers[i]);
        }
    }

Question.prototype.checkAnswer=function(ans,callback){
    if(ans===this.correct){
        var sc;
        console.log('Correct answer!');
        sc=callback(true);
    }else{
        console.log('Wrong answer. Try again :)');
        sc=callback(false);
    }
    this.displayScore(sc);
}

Question.prototype.displayScore=
    function(score){
    console.log('Your current score is: ' + score);
    console.log('-----------------------------');
}

var q1=new Question('Is JavaScript the coolest programming langulage in the world?', 
                   ['Yes','No'],0);

var q2=new Question('What is the name this course\'s teacher?',
                   ['Onsel','Yagmur','Sennur'],2);

var q3=new Question('What does best describe coding',
                   ['Boring','hard','Fun','Tediuos'],2);
var questions=[q1,q2,q3];
    function score(){
        var sc=0;
        return function(correct){
            if(correct){
                sc++;
            }
            return sc;
        }
    }
    
var keepScore=score(); 

function nextQuestion(){
        
    var questions=[q1,q2,q3];
    var n=Math.floor(Math.random() * questions.length);

    questions[n].displayQuestion();

    var answer=prompt('Please select the correct answer');

    questions[n].checkAnswer(parseInt(answer),keepScore);
    
    
    if(answer!=='exit'){
         nextQuestion();
    }
       
}
    
nextQuestion();
    
})();














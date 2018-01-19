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


var q1=new Question('Is JavaScript the coolest programming langulage in the world?', 
                   ['Yes','No'],0);

var q2=new Question('What is the name this course\'s teacher?',
                   ['Onsel','Yagmur','Sennur'],2);

var q3=new Question('What does best describe coding',
                   ['Boring','hard','Fun','Tediuos'],2);

var questions=[q1,q2,q3];
var n=Math.floor(Math.random() * questions.length);

questions[n].displayQuestion();
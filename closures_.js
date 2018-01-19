// lecture: closures
/*
function retirement(retirementAge){
    var a=' years left until retirement.'
    return function(yearofBirth){
        var age=2018 - yearofBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS=retirement(66);
retirementUS(1975);
retirement(66)(1975);

var retirementTurkey=retirement(65);
retirementTurkey(1975);
*/

function interviewQuestion(job){
    return function(name){
        if(job==='designer'){
            console.log(name + ', can you please explain what UX designer is?');
        }else if(job==='teacher')
            {
                console.log('What subject do you teach, ' + name + '?');
            }else{
                console.log('Hello ' + name + ', what do you do?');
            }
    }
}

interviewQuestion('teacher')('Sennur');
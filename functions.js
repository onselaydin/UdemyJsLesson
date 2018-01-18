//Functions returning functions

function interviewQuestion(job){
    if(job==='designer'){
        return function(name){
            console.log(name+ ', can you plese explain what Ux design is?');
         }
        }else if(job==='teacher'){
            return function(name){
                console.log('what subject do you teach, ' + name + '?');
            }
        }else{
            return function(name){
                console.log('Hello '+ name + ', what do you do?');
            }
        }
            
    }
        
var teacherQuestion=interviewQuestion('teacher');
var designerQuestion=interviewQuestion('designer');
    
teacherQuestion('Onsel');
designerQuestion('Yagmur');
designerQuestion('Sennur');
designerQuestion('Pinik');

//fonksiyonun içindeki fonksiyonu çağırdık ve
//parametre gönderdik.
interviewQuestion('teacher')('Sennur');
    

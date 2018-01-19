//lecture: Bind, call and apply

var onsel={
    name:'Onsel',
    age:'42',
    job:'developer',
    peresentation: function(style,
                            timeOfDat){
        if(style==='formal'){
            console.log('Good ' +
            timeOfDat+', Ladies and gentlemen! I\'m ' +
            this.name + ' ,I\'m a ' +
            this.job + 'and I\'m ' +
            this.age + ' years old.');
        }else if(style === 'friendly'){
            console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + 
            this.job + 'and I\'m ' + 
            this.age + ' years old. Have a nice ' +
            timeOfDat + '.');
        }
    }
};

var yagmur={
    name:'Yagmur',
    age:'9',
    job:'student'
};

onsel.peresentation('formal', 'morning');

//Call functionu örneği.call ile başka bir objeyi
//çağırabiliyorum.
onsel.peresentation.call(yagmur,'friendly','afternoon');

//apply denemesidir. 
onsel.peresentation.apply(yagmur,
['friendly','afternoon']);

//bind denemesidir.
var yagmurFriendly=onsel.peresentation.bind(yagmur,'friendly');
yagmurFriendly('morning');
yagmurFriendly('night');

var pinarFormal=onsel.peresentation.bind(yagmur,'formal');
pinarFormal('afternoon');
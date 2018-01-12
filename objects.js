var onsel={
    name:'Onsel',
    lastName:'aydın',
    yearofBirth:1975,
    job:'developer',
    isMarried:false
};
console.log(onsel);
console.log(onsel.lastName);
console.log(onsel['lastName']);

var xyz='job';
console.log(onsel[xyz]);
//----------
var yagmur=new Object();
yagmur.name='Yagmur';
yagmur.lastName='AYDIN';
yagmur['job']='student';
yagmur['isMarried']=false;

console.log(yagmur);
var onsel={
    name:'Onsel',
    lastName:'aydın',
    yearofBirth:1975,
    job:'developer',
    isMarried:false,
    family: ['Yagmur','Sennur','Ege','Pinar'],
    calculateAge: function(yearOfBirth){
        return 2018 - yearOfBirth;      
    },
    calculateAgee:function(){
    return 2018 - this.yearofBirth;
    }
};

console.log(onsel.family[2]);
console.log(onsel.calculateAge(2008));
console.log(onsel.calculateAgee());
console.log(onsel.length);
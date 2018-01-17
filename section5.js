/*
//this is object
var onsel={
    name: 'Onsel',
    yearofBirth: 1975,
    job: 'Software Developer'
};

//empty object //constractor
var Person=function(name,yearofBirth,job){
    this.name=name;
    this.yearofBirth=yearofBirth;
    this.job=job;
    this.calculateAge=function(){
        console.log(2018-this.yearofBirth);
    }
}
*/

//empty object //constractor //prototypetest
var PersonPro=function(name,yearofBirth,job){
    this.name=name;
    this.yearofBirth=yearofBirth;
    this.job=job;
    this.calculateAge=function(){
        console.log(2018-this.yearofBirth);
    }
}

PersonPro.prototype.calculateAge=function(){
  console.log(2018-this.yearofBirth);  
};

PersonPro.prototype.lastName='AYDIN';

//prototype end

//console.log('at here');
var yagmur=new PersonPro('Yagmur',2008,'student');
yagmur.calculateAge();

var sennur=new PersonPro('Sennur',1952,'teacher');
sennur.calculateAge();

var onsel=new PersonPro('Onsel',1975,'developer');
onsel.calculateAge();

sennur.calculateAge();
yagmur.calculateAge();
onsel.calculateAge();

console.log(yagmur.lastName);
console.log(sennur.lastName);

/*
debug da
onsel yaz enter yap
onsel.__proto__.isPrototypeOf
onsel.__proto__===PersonPro.prototype
onsel.hasOwnProperty('job')
onsel.hasOwnProperty('name')
onsel instanceof PersonPro   //bu objenin functionunu verir

>var x=[2,4,6] enter yap
>x yazıp enter yap
>console.info(x) bu obje ile ilgili bilgi verir.
>x.length  //objenin genişliği
*/
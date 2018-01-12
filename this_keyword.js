/*console.log(this);
calculateAge(1975);
function calculateAge(year){
    console.log(2018-year);
    console.log(this);
}
*/
var onsel={
    name:'Yagmur',
    yearofBirth:2008,
    calculateAge:function(){
        console.log(this);
        console.log(2018 - this.yearofBirth);
        
        function innerFunction(){
            console.log(this);
        }
        innerFunction();
        
    }
}

//onsel.calculateAge();

var polat={  //Bu bir obje
    name:'Polat',
    yearofBirth:'1952'
};

polat.calculateAge=onsel.calculateAge;
polat.calculateAge();


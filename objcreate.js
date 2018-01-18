var personProto={
    calculateAge:function(){
        console.log(2018-this.yearofBirth);
    }
};

var onsel=Object.create(personProto);
onsel.name='Onsel';
onsel.yearofBirth=1975;
onsel.job='developer';

//Farklı bir create işlemi
var yagmur=Object.create(personProto,{
    name:{value:'Yagmur'},
    yearofBirth:{value:2008},
    job:{value:'student'}
});
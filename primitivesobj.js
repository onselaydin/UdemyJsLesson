//Primitieves vs objects

//Primitieves
var a=23;
var b=a;
a=46;
console.log(a);
console.log(b);

//objects
var obj1={
    name:'Onsel',
    age:42
};

var obj2=obj1;
obj1.age=43;
console.log(obj1.age);
console.log(obj2.age +' bitis');

//functions
var age=42;
var obj={
    name:'Onsel',
    city:'Istanbul'
};

function change(a,b){
    a=43;
    b.city='Ankara';
}
change(age,obj);
console.log(age);
console.log(obj.city);



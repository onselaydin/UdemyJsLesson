var names=['Onsel','Yagmur','Sennur'];
var years=new Array(1975,2008,1952);
console.log(names[0]);

names[2]='Ege';
console.log(names);

var onsel=['Onsel','Aydin',1975,'developer',false];
onsel.push('blue'); //en sonra yeni bir item ekler
onsel.unshift('Mr.'); //en başa ekleme yapar
onsel.pop(); //son elemanı siler
onsel.shift();// Baştaki elemanı siler.
console.log(onsel);
console.log(onsel.indexOf('Aydin')); //elemanın konumunu döndürür.



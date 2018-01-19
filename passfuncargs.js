//passing functions as arguments

var years=[2008,1952,1975,1982];
//yukarıdaki arrayi aşağıdaki fonksiyona sokacağız.
function arrayCalc(arr,fn){
    var arrRes=[];
    
    for(var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    
    return arrRes;
}
    
function calculateAge(el){
    return 2018-el;
}

function isFullAge(el){
    return el>=18;
}

function maxHeartRate(el){
    if(el>=18 && el <= 81){
        return Math.round(206.9-(0.67 * el));
    }else{
        return -1
    }
}

var ages=arrayCalc(years,calculateAge);
var fullAges=arrayCalc(ages,isFullAge);
var rates=arrayCalc(ages,maxHeartRate);

var fullJapan=arrayCalc(ages,isFullAge.bind(this,20));


console.log(ages);
console.log('japon');
console.log(fullJapan);

console.log(fullAges);
console.log(rates);
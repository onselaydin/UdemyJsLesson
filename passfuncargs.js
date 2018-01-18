//passing functions as arguments

var years=[1990,1956,1937,2005,1998];
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



var ages=arrayCalc(years,calculateAge);
var fullAges=arrayCalc(ages,isFullAge);

console.log(ages);
console.log(fullAges);
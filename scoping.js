//Tüm bu sayfa Global scope
var a='Merhaba!!';
first();

function first(){   //bu fonksiyonun içi first() scope
    var b='Selam!!';
    second();
    
    function second(){   // second() scobu
        var c='Hey!!';
        //console.log(a+b+c);
        third();
    }
}

function third(){
    var d='Onsel';
   // console.log( a + b + c + d ); //çalışmaz
    //console.log(c); //c ye erilemezsin çalışmaz
   console.log(a + d)
}
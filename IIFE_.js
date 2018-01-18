//lecture: IIFE

/*
function game(){
    var scrore=Math.random()*10;
    console.log(scrore>=5);
}
game();
*/
//Bu fonksiyonu çağırabilirsin.
(function (){
    var score=Math.random()*10;
    console.log(score>=5);
})();

//console.log(score);

//bu fonk. çağıramazsın. Kendi içinde çalışır.
(function (goodluck){
    var score=Math.random()*10;
    console.log(score>=5-goodluck);
})(5);
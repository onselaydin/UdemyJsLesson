function calculateAge(yearOfBirth)
{
    var age=2018-yearOfBirth;
    return age;
}

var ageJohn=calculateAge(1975);
var ageMike=calculateAge(2008);
var ageSen=calculateAge(1952);
console.log(ageJohn);

function yearsUntilRetirement(name,yearOfBirth){
    var age=calculateAge(yearOfBirth);
}
//fonksiyon içinden başka fonksiyonu çağırabiliriz.
yearsUntilRetirement('John',1975);

var names=['Onsel','Yagmur','EGe','Sennur','Pinar','Meric'];

/*
for(var i=0;i<10;i++){
    console.log(i);
}

//baştan sonra doğru.
for(var i=0;i<names.length;i++){
    console.log(names[i]);
    
}
//sondan başa doğru
for(var i=names.length -1;i>=0;i--){
    console.log(names[i]);
}

var i=0;
while(i<names.length){
    console.log(names[i]);
    i++;
}

for(var i=0;i<names.length;i++){
    console.log(names[i]);
    if(i===3){
        break;
    }
}
*/

for(var i=0;i<names.length;i++){
    
    if(i===3){
        continue;
    }
    console.log(names[i]);
}

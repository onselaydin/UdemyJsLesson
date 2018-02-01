/*


var budgetController = (function(){
var x=23;
var add=function(a){ 
    //normalde Bu fonksiyon private
    return x+a;
}                        

return{
    publicTest: function(b){ 
       //add burada public oldu.
        return add(b);
    }
}
})();

//consoleda
>budgetController.x enter yaparsak fonksiyona erişemeyeceğiz.
budgetController.add(5);yine erişim yok

budgetController.publictest(5);burada eriştik.



var UIController=(function(){
    //some code
})();

var controller=(function(budgetCtrl, UICtry){
   
    var z=budgetCtrl.publicTest(5);
    return {
        anotherPublic: function(){
            console.log(z);
        }
    }
   
})(budgetController,UIController);
*/

//MVC 
//BUDGET Controller
var budgetController=(function(){
    
    
})();

//UIController
var UIController=(function(){
    
    
})();

//GLOBAL APP CONTROLLER
var controller=(function(budgetCtrl,UICtrl){
    
    //kontrolün css  eventine erişmek için nokta
   var ctrlAddItem=function(){
       // 1. get the field input data
        
        // 2. add the item to the budget controller
        
        // 3. add the item to the UI
        
        // 4. Calculate the budget
        
        // 5. Display the budget on the UI
       console.log('it works');
   } 
   document.querySelector('.add__btn').addEventListener('click',ctrlAddItem);
    //https://developer.mozilla.org/en-US/docs/Web/Events
    //http://keycodes.atjayjo.com/
    document.addEventListener('keypress',function(event){      
        //console.log(event);
        if(event.keyCode===13 || event.which===13){
            //console.log('ENTER was pressed.');
            
        }
    });
    
})(budgetController,UIController);


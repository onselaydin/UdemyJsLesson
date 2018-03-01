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
var budgetController = (function(){
    
    var Expense = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };
    
    var Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };
    
      
    var data = {
      allItems: {
          exp:[],
          inc:[]
      },
        totals: {
            exp: 0,
            inc: 0
        }
        
    };
    
    return {
    addItem: function(type, des, val){
        //browser test için >budgetController.testing()
        var newItem, ID;
        if(data.allItems[type].length > 0){
         ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
        } else {
            ID = 0;
        }
        
        
        //create new item based on 'inc' or 'exp' type
        if(type === 'exp'){
            newItem = new Expense(ID, des, val);
        }else if(type === 'inc') {
            newItem = new Income(ID, des, val);
        }
        //Push it into out dta structure
        data.allItems[type].push(newItem);
        return newItem;
        }
        
    };
    
})();

/*  stracture Test için browser consoleda 
> var exp= new Expense(1,'Test',100)

var Expense=function(id,description,value){
        this.id=id;
        this.description=description;
        this.value=value;
    };
*/
//UIController
var UIController = (function() {
    
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list'
    };
    
    return {
        getInput: function() {
            return {
            type: document.querySelector(DOMstrings.inputType).value,
            description: document.querySelector(DOMstrings.inputDescription).value,
            //parseFloat ile bu değeri decimale çevirdik 
            value: parseFloat(document.querySelector(DOMstrings.inputValue).value)               
            };
    },
        addListItem: function(obj, type){
            
            // Create Html string with placeholder text
            //%id% %value% persentage ekledik
            var html, newHtml, element;
            if(type === 'inc'){
                
                element = DOMstrings.incomeContainer;
                 html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if(type === 'exp'){
                element = DOMstrings.expensesContainer;
                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
       
            //Replace the placeholder text with some actural data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);
            
            //Insert the HTML 
            //beforeend i aşağıdaki siteden bulduk.
            //https://developer.mozilla.org/en-US/docs/web/api/element/insertAdjacentHTML
         
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },
        
        clearFields: function(){
           var fields,fieldsArr; 
            fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);
          
            fieldsArr = Array .prototype.slice.call(fields);
            
            fieldsArr.forEach(function(current, index, array){
                current.value="";
            });
            
        },
        
        getDOMstrings: function() {         
            return DOMstrings;
        }
};
})();

    //GLOBAL APP CONTROLLER
    var controller=(function(budgetCtrl,UICtrl){
    var DOM = UICtrl.getDOMstrings();
    var setupEventListeners=function(){
    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
    //https://developer.mozilla.org/en-US/docs/Web/Events
    //http://keycodes.atjayjo.com/
    document.addEventListener('keypress', function(event){      
    //console.log(event);
        if(event.keyCode === 13 || event.which === 13){
            //console.log('ENTER was pressed.');
            ctrlAddItem();
            }
        });
    };
   
        
    var updateBadget=function(){
      //1 Calculate budget
        
      //2 Return the bugdet

      //3 Display the budget on the UI
    };    
    //kontrolün css  eventine erişmek için nokta
    var ctrlAddItem = function() {
        
        var input,newItem;
        
       // 1. get the field input data
        input = UICtrl.getInput();
        
        if(input.description!=="" isNaN(input.value))
       // console.log(input);
        // 2. add the item to the budget controller
        newItem = budgetCtrl.addItem(input.type,input.description,input.value);
        // 3. add the item to the UI
        UICtrl.addListItem(newItem, input.type);
        // 4. Calculate the budget
        UICtrl.clearFields();
        //clear field
        
        // 5. Display the budget on the UI
      // console.log('it works');
        
        //5 Calculate and update budget
        updateBadget();
   }; 
  
    return{
        init: function(){
            console.log('Application has started.');
            setupEventListeners();
        }
    }
    
    
})(budgetController, UIController);

controller.init();


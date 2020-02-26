// BUDGET Controller
var budgetController = (function () {
//budget Controller  is object include

    var x = 23;
    // private function in the closer 
    var add = function (a) {
        return x + a;
    };

    // toto funguje pomocou vdaka closer
//object contains methods
    return { // public function
        publicTest: function (b) {
            return add(b);
        }
    }
})(); //  okamžite zavolany


// UI Controller
var UIController = (function () {
// other controler

    var DOMstrings = {
        inputType: ".add__type",
        inputDescription: ".add_description",
        inputValue: "add_value ",
        inputButton :".add_btn"
    };

    return { // public method
        getinput: function () {// data from user interface

            return {// we have the value from classs add type
                //will be either inc or exp
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
                // three input value  we return 3 values same time we return object with 3 properties
            };
        },

        getDOMstring: function () {
            return DOMstrings; // return object DOMstrings
        }
    }


})();

// We have diffrent moduls
/// Global app controller
var controller = (function (budgetCtrl, UICtrl) {

    var DOM = UICtrl.getDOMstring;// we have data in controller

    var ctrlAddItem = function () {
        //     console.log("The button click");

        // 1.Get the file input data
        // 2. Add the item to the budget controller

        // 3. Add the item to the UI
        // 4. Calculate the budget
        // 5 . Dispalay th ebudget ont the UI
        // console.log("its work");

        var input = UICtrl.getinput();
        console.log(input);


    };

    document.querySelector(DOM.inputButton).addEventListener(
        "click", ctrlAddItem);// after click call the function ctrlAddItem

    document.addEventListener("keypress", function (event) {
        //console.log(event);

        if (event.keyCode === 13 || event.which === 13) {
            //console.log("Enter was pressed");
            ctrlAddItem();

        }
 // 2 :56 : 52

    });

})(budgetController, UIController); // ma pristup k ostatnym modulom
// pretoze su v inych scope
// 2:41 how to take data fro from different  html input ypes
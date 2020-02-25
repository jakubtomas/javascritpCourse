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

})();

// We have diffrent moduls
/// Global app controller
var controller = (function (budgetCtrl, UICtrl) {


    document.querySelector(".add__btn").addEventListener(
        "click", function () {
            //     console.log("The button click");

            // 1.Get the file input data
            // 2. Add the item to the budget controller

            // 3. Add the item to the UI
            // 4. Calculate the budget
            // 5 . Dispalay th ebudget ont the UI
        });

    document.addEventListener("keypress" , function (event) {
        //console.log(event);

        if (event.keyCode ===13 || event.which ===13) {
            //console.log("Enter was pressed");

        }// the end 2>39

        
    });

})(budgetController, UIController); // ma pristup k ostatnym modulom
// pretoze su v inych scope

// BUDGET Controller
var budgetController = (function () {
//budget Controller  is object include

    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;

    };

    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;

    };


    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };

    return {
        addItem: function (type, des, val) {
            var newItem;
            ID = 0; //unique number
            //[1 2 3 4 5 ] next ID = 6
            // [ 1 2 4 6 8 ] next ID = 9
            // ID = last ID + 1;

            // select the last item from object
            // last ide
            // create new ID
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }


            // Create new item base on "inc" or exp type
            if (type === "exp") {
                newItem = new Expense(ID, des, val);
            } else if (type === "inc") {
                newItem = new Expense(ID, des, val);
            }
            // push it into our data structure
            data.allItems[type].push(newItem);

            //return the new element
            return newItem;
        },

        testing: function () {
            console.log(data);

        }
    }


    // how to avoid conflicts i nour data structres
    // how and why to pass data from one module to another 
    // toto funguje pomocou vdaka closer
//object contains methods

})(); //  okamžite zavolany


// UI Controller
var UIController = (function () {
// other controler

    var DOMstrings = {// object with class name
        inputType: ".add__type",
        inputDescription: ".add__description",
        inputValue: ".add__value",
        inputBtn: '.add__btn',
        incomeContainer : '.income__list',
        expensesContainer: '.expenses__list'
    };

    return { // public method
        getInput: function () {// data from user interface

            return {// we have  the value from classs add type
                //will be either inc or exp
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
                // three input value  we return 3 values same time we return object with 3 properties
            };
        },

        addListItem: function (obj, type) {
            var html, newHtml, element;
            // create HTML string with place older text

            if (type === "inc") {

                element = DOMstrings.incomeContainer; // into which element we push the html code
                // %id% what is it ??
                html = '<div class="item clearfix" id="income-%id%">' +
                    '<div class="item__description">%description%</div>' +
                    '<div class="right clearfix">' +
                    '<div class="item__value">%value%</div>' +
                    '<div class="item__delete">' +
                    '<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>' +
                    '</div>' +
                    '</div>' +
                    '</div>';
            } else if (type === "exp") {
                element = DOMstrings.expensesContainer;// into which element we push the html code

                html = ' <div class="item clearfix" id="expense-%id%">' +
                    '<div class="item__description">%description%</div>' +
                    '<div class="right clearfix"> ' +
                    '<div class="item__value">%value%</div>' +
                    '<div class="item__percentage">21%</div>' +
                    '<div class="item__delete">' +
                    '<button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> ' +
                    '</div> ' +
                    '</div> ' +
                    '</div>';

            }

            // replace the placeholder text actual data

            newHtml = html.replace('%id%', obj.id );
            newHtml = newHtml.replace('%description%',obj.description);
            newHtml = newHtml.replace('%value%',obj.value);


            // insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },

        getDOMstring: function () {
            return DOMstrings; // return object DOMstrings
        }
    }


})();

// We have different moduls
/// Global app controller
var controller = (function (budgetCtrl, UICtrl) {

    var setupEventListenters = function () { // what is result of this function

        var DOM = UICtrl.getDOMstring();// return object with parameters
        // I have posibility work with element from html I mean the form and button
        // I have class name what I need
        // we have data in controller from UI controller

        //queryselector                    // addeventlistener
        document.querySelector(DOM.inputBtn).addEventListener(//call dom
            "click", ctrlAddItem);// after click call the function ctrlAddItem
        // which return values from from html documents

        // and also if we used keypress Enter this work also
        document.addEventListener("keypress", function (event) {
            //console.log(event);

            if (event.keyCode === 13 || event.which === 13) {
                //console.log("Enter was pressed");
                ctrlAddItem();

            }
            //   How and why to create an initialization function


        });

    };


    var ctrlAddItem = function () {

        var input, newItem;
        // 1.Get the file input data

        input = UICtrl.getInput(); // return object with data from html document
        console.log(input);

        //     console.log("The button click");

        // 2. Add the item to the budget controller
        // we have new object

        newItem = budgetCtrl.addItem(input.type, input.description, input.value);

        // 3. Add the item to the UI

        UICtrl.addListItem(newItem, input.type);
        // 4. Calculate the budget
        // 5 . Dispalay th ebudget ont the UI
        // console.log("its work");


    };
    return {
        init: function () {
            console.log("application has started .");
            setupEventListenters(); // call the function
        }
    };


})(budgetController, UIController); // ma pristup k ostatnym modulom
// pretoze su v inych scope
// 2:41 how to take data fro from different  html input ypes

controller.init();


/// videos 3:03:00
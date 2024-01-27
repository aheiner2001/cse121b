/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2)
{
   return number1 + number2;
}


function addNumber() 
{
    let addnumber1 = Number(document.querySelector("#add1").value);
let addnumber2 = Number(document.querySelector("#add2").value);

    document.querySelector("#sum").value = add(addnumber1, addnumber2);
}

document.querySelector("#addNumbers").addEventListener("click", addNumber);



// Using function expressions, repeat the items in Step 2
//  with new functions named subtract and subtractNumbers and 
//  HTML form controls with IDs of subtract1, subtract2, subtractNumbers, 
//  and difference.



function subtract(number1, number2){
    return number1 - number2;
}

function subtractNumbers(){
    let subtractnumber1 = Number(document.querySelector("#subtract1").value);
    let subtractnumber2 = Number(document.querySelector("#subtract2").value);

    document.querySelector("#difference").value = subtract(subtractnumber1, subtractnumber2);
}

document.querySelector("#subtractNumbers").addEventListener("click",subtractNumbers);


// arrow functions named multiply and multiplyNumbers and HTML form controls with IDs of factor1, factor2, multiplyNumbers, and product.

const multiply = (number1, number2) => number1 * number2;

function multiplyNumbers(){
    let multiplyNumber1 = Number(document.querySelector("#factor1").value);
    let multiplyNumber2 = Number(document.querySelector("#factor2").value);

    document.querySelector("#product").value = multiply(multiplyNumber1, multiplyNumber2);

    
}


document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers)

// divide and divideNumbers and HTML form controls with IDs of dividend, divisor, divideNumbers, and quotient.?

const divide = (number1, number2) => number1 / number2;

function divideNumbers(){
    let divideNumber1 = Number(document.querySelector("#dividend").value);
    let divideNumber2 = Number(document.querySelector("#divisor").value);

    document.querySelector("#quotient").value = divide(divideNumber1, divideNumber2);

    
}


document.querySelector("#divideNumbers").addEventListener("click", divideNumbers)

function findsSubTotal(){
    let subtotal = Number(document.querySelector("#subtotal").value);

    let member = document.querySelector("#member");
    if (member.checked){
        subtotal *= .8;
    }

    document.querySelector("#total").textContent =`Total Due: $${subtotal.toFixed(2)}`

}

document.querySelector("#getTotal").addEventListener("click", findsSubTotal);

let numbersArray = [1, 2, 3, 4,5,6, 7, 8, 9,10,11,12,13 ];
document.querySelector("#array").innerHTML = numbersArray.join(", ");

document.querySelector("#odds").innerHTML = numbersArray.filter(number => number % 2  !== 0)
document.querySelector("#evens").innerHTML = numbersArray.filter(number => number % 2  === 0)


document.querySelector("#sumOfArray").innerHTML = numbersArray.reduce((sum, number) => sum + number);
document.querySelector("#multiplied").innerHTML = numbersArray.map(number => number * 2);

let mutArray = numbersArray.map(number => number * 2);
document.querySelector("#sumOfMultiplied").innerHTML = mutArray.reduce((sum, number) => sum + number);
/* Function Expression - Subtract Numbers */


/* Arrow Function - Multiply Numbers */


/* Open Function Use - Divide Numbers */


/* Decision Structure */


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */

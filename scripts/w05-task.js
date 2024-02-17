/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templesElement = document.querySelector("#temples");

let templeList = [];
/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        const article = document.createElement("article");
        const h3 = document.createElement("h3");
        h3.textContent = temple.templeName;
        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.location;
        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
    });
}


/* async getTemples Function using fetch()*/

const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json")
    templeList = await response.json();

    // The last statement in the getTemples function calls the displayTemples function and passes it the list of temples (templeList).
    displayTemples(templeList);

}
/* reset Function */
const reset = () => {
    templesElement.innerHTML = '';
}

function filterTemples(temples){
    reset();
    let filter = document.querySelector("#filtered").value;

    // Use a switch statement that uses the filter value as the selector responding to four (4) cases.
    // For each case, call the displayTemples function using an filter statement that filters the temples parameter for the four options provided.
    // "utah": filter for temples where the location contains "Utah" as a string.
    // "nonutah": filter for temples where the location does not contain "Utah" as a string.
    // "older": filter for temples where the dedicated date is before 1950. (compare versus new Date(1950, 0, 1)).
    // "all": no filter. Just use temples as the argument.

    switch(filter) {
        case "utah":
            displayTemples(temples.filter(temple => temple.location.includes("Utah")));
            break;
        case "nonutah":
            displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
            break;
        case "older":
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case "all": 
            displayTemples(temples);
            break;
        default:
            console.log("Invalid filter value");
    }
}

/* filterTemples Function */

//Add a change event listener to the HTML element with an ID of filtered that calls the filterTemples function and sends a arrow function result with the templeList as the argument.
document.querySelector("#filtered").addEventListener("change", () => filterTemples(templeList));
getTemples();
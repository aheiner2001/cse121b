/* Step 1 - Setup type tasks - no code required */
let full_name = "Aaron Heiner";
let current_year = "2024";
let profile_picture = "images/image.jpg";

const name_element = document.getElementById("name");
const food_element = document.getElementById("food");
const year_element = document.querySelector("#year");
const image_element = document.querySelector("img")

name_element.innerHTML = `<strong>${full_name}</strong>`;
year_element.textContent = current_year;
image_element.setAttribute("src", profile_picture);
image_element.setAttribute("alt", `Profile image of ${full_name}`);

let favorite_foods = ["beans", "pizza", "eggs"];
food_element.textContent = favorite_foods.join(", ");
let new_food = "banana";
favorite_foods.push(new_food);
food_element.innerHTML += `<br>${favorite_foods.join(", ")}`;
favorite_foods.shift()
food_element.innerHTML += `<br>${favorite_foods.join(", ")}`;
favorite_foods.pop()
food_element.innerHTML += `<br>${favorite_foods.join(", ")}`;



 
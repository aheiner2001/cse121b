/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Aaron Heiner",
    photo: "w02-task/images/image.jpg",
    favorite_foods: ["Pizza","beans", "salad","regatone", "beetle","slamjuice", "rigour"],
    hobbies: ["Reading", "Hiking", "Photography", "Gaming", "Cooking"],
    places_lived: [],

};

myProfile.places_lived.push(
    {
        places:"Nampa, Idaho",
        length:"20 Years"
    },
    {
        places:"Chile",
        length:"2 Years"
    },
    {
        places:"Rexburg",
        length:"1 Year"
    }
)

/* Populate Profile Object with placesLive objects */
document.querySelector("#name").textContent = myProfile.name;
document.querySelector("#photo").src = myProfile.photo;
document.querySelector("#photo").alt = myProfile.name;

myProfile.favorite_foods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);

});

myProfile.hobbies.forEach(hobby =>{
    let li = document.createElement("li");
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
});

myProfile.places_lived.forEach(place =>{
    let dt = document.createElement("dt");
    let dd = document.createElement("dd");
    dt.textContent = place.places;
    dd.textContent = place.length;
    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);
});


/* DOM Manipulation - Output */

/* Name */

/* Photo with attributes */


/* Favorite Foods List*/


/* Hobbies List */


/* Places Lived DataList */



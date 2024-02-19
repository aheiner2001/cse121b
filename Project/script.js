const leaderElement = document.querySelector("#leaders_of_church");
let leaderList = [];

/* async displayLeaders Function */
const displayLeaders = (leaders) => {
    leaders.forEach(leader => {
        const article = document.createElement("article");
        const h3 = document.createElement("h3");
        h3.textContent = leader.leaderName;
        const img = document.createElement("img");
        img.src = leader.imageUrl;
        article.appendChild(h3);
        article.appendChild(img);
        leaderElement.appendChild(article);
    });
}

const getLeaders = async () => {
    const response = await fetch("json.json");
    leaderList = await response.json();
    displayLeaders(leaderList);
}

getLeaders();

let text = "This is my website about the important topics in the church. Although this website contains many different pages, the home page is the what I wanted to do for my project";
const mainElement = document.getElementById("main");
const h5 =document.createElement("h5");
const h1 =document.createElement("h1");
h5.textContent = text;
h1.textContent = "Apostles of the Lord"
mainElement.appendChild(h1);
mainElement.appendChild(h5);



let hour = new Date().getHours();

if (hour > 12){
    hour -=12;
    pm_am = "pm"
}
else{
    pm_am = "am"
}


if (new Date().getHours() < 12) {
    document.getElementById("greeting").innerHTML = `Good Morning! Welcome to my page. The current time is ${hour}:${new Date().getMinutes()}${pm_am}`;
    
}

else if (new Date().getHours() < 18) {
    document.getElementById("greeting").innerHTML = `Good Afternoon! Welcome to my page. The current time is ${hour}:${new Date().getMinutes()}${pm_am}`;
}

else if (new Date().getHours() >= 18 ) {
    document.getElementById("greeting").innerHTML = `Good Evening! Welcome to my page. The current time is ${new Date().getHours()}:${new Date().getMinutes()}${pm_am}`;
}



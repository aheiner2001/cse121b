const leaderElement = document.querySelector("#leaders_of_church");
let leaderList = [];

/* async displayLeaders Function */
const displayLeaders = (leaders) => {
    leaders.forEach(leader => {
        const article = document.createElement("article");
        const h3 = document.createElement("h3");
        h3.textContent = leader.templeName;
        const img = document.createElement("img");
        img.src = leader.imageUrl;
        article.appendChild(h3);
        article.appendChild(img);
        leaderElement.appendChild(article);
    });
}

/* async getLeaders Function using fetch() */
const getLeaders = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    leaderList = await response.json();
    displayLeaders(leaderList);
}

const reset = () => {
    leaderElement.innerHTML = '';
}

/* Call getLeaders to fetch and display the data when the page loads */
getLeaders();

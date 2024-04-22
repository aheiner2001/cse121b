document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('DOMContentLoaded', function () {
        const addRecipeForm = document.getElementById('addRecipeForm');
        const recipeList = document.querySelector('.recipielist');
        
        // Load recipes from localStorage when the page loads
        loadRecipes();
    
        addRecipeForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent form submission
    
            const recipeName = document.getElementById('recipeName').value;
            const recipeDescription = document.getElementById('recipeDescription').value;
    
            if (recipeName && recipeDescription) {
                // Create new recipe object
                const newRecipe = { name: recipeName, description: recipeDescription };
                
                // Add the new recipe to localStorage
                addRecipeToLocalStorage(newRecipe);
                
                // Display the new recipe
                displayRecipe(newRecipe);
    
                // Clear form inputs
                document.getElementById('recipeName').value = '';
                document.getElementById('recipeDescription').value = '';
            } else {
                alert('Please fill in both recipe name and description.');
            }
        });
    
        function loadRecipes() {
            const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
            recipes.forEach(recipe => {
                displayRecipe(recipe);
            });
        }
    
        function addRecipeToLocalStorage(recipe) {
            const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
            recipes.push(recipe);
            localStorage.setItem('recipes', JSON.stringify(recipes));
        }
    
        function displayRecipe(recipe) {
            const newRecipe = document.createElement('div');
            newRecipe.classList.add('recipe');
            newRecipe.textContent = recipe.name + ': ' + recipe.description;
            recipeList.appendChild(newRecipe);
        }
    });
    

    const buttons = document.querySelectorAll('button');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
        

            // this will assign the curnet button text to button text that way I can use it a bit later.
            const buttonText = this.textContent;

            // Navigate to a different page based on the button text
            if (buttonText === "Add Recipe") {
                window.location.href = "add_recipe.html"; // Change the URL to your desired page
            } else if (buttonText === "View Recipe") {
                window.location.href = "view_recipe.html"; // Change the URL to your desired page
            }
           
        });
    });
    
});

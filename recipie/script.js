document.addEventListener('DOMContentLoaded', function() {
    const recipes = document.querySelectorAll('.recipielist .recipe');

    recipes.forEach(function(recipe) {
        recipe.addEventListener('click', function() {
            // Toggle 'selected' class when a recipe is clicked
            const selectedRecipe = document.querySelector('.recipielist .recipe.selected');
            if (selectedRecipe && selectedRecipe !== this) {
                // If another recipe is selected and it's not the clicked one, unselect it
                selectedRecipe.classList.remove('selected');
            }
            
            this.classList.toggle('selected');
        });
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

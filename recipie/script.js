document.addEventListener('DOMContentLoaded', function() {
    // Get all recipe items
    const recipes = document.querySelectorAll('.recipe');
    
    // Add event listener to each recipe
    recipes.forEach(function(recipe) {
        recipe.addEventListener('click', function() {
            // Toggle 'selected' class when a recipe is clicked
            this.classList.toggle('selected');
        });
    });
});

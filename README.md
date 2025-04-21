This is a simple API that helps users manage recipes, users and comments. 
The app supports adding, reading, and updating recipes, as well as managing comments and users.
This API is built in relation to the previous project, which renders recipes from a 3rd-party recipe API.

**File Structure**

**/controllers:**   Contains the business logic for recipes, comments and users.
**/data:**   Stores the data for recipes, comments and users.
**/middleware:**   Includes custom middleware for logging, error handling and validating ingredient for post request.
**/routes:**   Defines the routes for the recipes, comments and users.
**/views:**   Holds the EJS templates for rendering recipes views.
**/public:**   Holds the static CSS file.

**sample data for each method**

to-get-the-HATEOAS-links:   GET http://localhost:3000
get-all-recipes:   GET http://localhost:3000/recipes/
create-new-recipe:   POST http://localhost:3000/recipes/
body {
  "userId": "006",
  "recipename": "Mango Lassi",
  "ingredients": ["mango", "yogurt", "milk", "sugar"],
  "recipe": "Blend mango, yogurt, milk, and sugar together until smooth. Serve chilled."
}
get-recipe-by-userid:   GET http://localhost:3000/recipes/002
get-all-users:   GET http://localhost:3000/users/
delete-user-by-id:   DELETE http://localhost:3000/users/?id=003
get-all-comments:   GET http://localhost:3000/comments
get-comments-by-userId: GET http://localhost:3000/comments/002
update-comment-by-userId-and-recipename:   http://localhost:3000/comments/002/Veg Biryani
body {
  "comment": "I tried it last night, it was amazing!"
}


**What would you add to or change about your application if given more time?**
If I had more time, I’d add features like favoriting recipes, so users could keep track of the ones they like. 
Also I’d work on better error handling with all possible test cases to make sure everything runs smoothly.

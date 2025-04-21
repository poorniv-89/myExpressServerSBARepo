// Import users data
import { users } from '../data/users.mjs';

// Get all users
export function getAllUsers(req, res, next) {
    try {
        // Send the list of all users as a JSON response
        res.json(users);
    }
    catch (err) {
        // Pass any errors to the error handler
        next(err);
    }
}

// Delete a user by userId (using query parameter)
export function deleteUserByUserId(req, res, next) {
    try {
        // Get the userId from the query parameters 
        const userId = req.query.id?.trim();
        console.log(userId); 

        // If userId is provided
        if (userId) {
            // Find the user with the matching ID
            const user = users.find(element => element.id === userId);
            console.log(user); 

            // If the user is found
            if (user) {
                // Find the index of the user and remove them from the users array
                const userIndex = users.indexOf(user);
                users.splice(userIndex, 1);

                // Respond with a success message
                return res.json(`User with the username: '${user.username}' is deleted from the users DB`);
            } else {
                // If the user is not found, send a 404 error
                const err = new Error('User not found in DB');
                err.status = 404;
                return next(err);
            }
        } else {
            // If no userId is provided, send a 400 error
            const err = new Error('User ID is required');
            err.status = 400;
            return next(err);
        }
    } catch (err) {
        next(err);
    }
}

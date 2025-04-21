  // Import comments and user data
import { comments } from '../data/comments.mjs';
import { users } from '../data/users.mjs';

// Get all comments
export function getAllComments(req, res, next) {
  try {
    // Send all comments as a response
    res.json(comments);
  } catch (err) {
    // Pass any errors to the error handler
    next(err);
  }
}

// Get comments for a specific user by userId
export function getUserComments(req, res, next) {
  try {
    const userId = req.params.id;

    // Filter comments that match the userId
    const Usercomments = comments.filter(element => element.userId === userId);

    if (Usercomments.length > 0) {
      // Send the user's comments
      res.json(Usercomments);
    } else {
      // If no comments are found, send 404 error
      const error = new Error("Comments not found for the user");
      error.status = 404; 
      next(error); 
    }
  } catch (err) {
    next(err);
  }
}

// Update a user's comment on a specific recipe
export function updateComments(req, res, next) {
  try {
    const newComment = req.body.comment;
    const userId = req.params.id?.trim();
    const recipeName = req.params.recipename?.trim();

    // If no new comment is provided
    if (!newComment) {
      const err = new Error("New comment is required.");
      err.status = 400;
      return next(err);
    }

    // Find the user's current comment on the given recipe
    const userOldComment = comments.find(
      element => element.userId === userId && element.recipename.toLowerCase() === recipeName.toLowerCase()
    );

    // If no matching comment found
    if (!userOldComment) {
      const error = new Error("Comments not found for the user");
      error.status = 404;
      return next(error);  
    }

    // Update the comment text
    userOldComment.comment = newComment;

    // Send success response
    return res.status(200).json({
      message: `Comment with id ${userId} on '${recipeName}' updated successfully.`
    });

  } catch (err) {
    next(err); 
  }
}
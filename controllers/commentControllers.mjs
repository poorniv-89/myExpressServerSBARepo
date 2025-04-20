import { comments } from '../data/comments.mjs';
import { users } from '../data/users.mjs';
export function getAllComments(req, res) {
   try {
      res.json(comments);
   } catch (err) {
      next(err);
   }
}
export function getUserComments(req, res, next) {
   try {
      const userId = req.params.id;
      const Usercomments = comments.filter(element => element.userId === userId);
  
      if (Usercomments.length > 0) {
        res.json(Usercomments);
      } else {
         const error = new Error("Comments not found for the user");
         error.status = 404; 
         next(error); 
      }
    } catch (err) {
      next(err);
    }
  }

export function updateComments(req, res, next) {
   try {
      const newComment = req.body.comment;
      const userId = req.params.id;
  
      if (!newComment) {
        return res.status(400).send('New comment is required.');
      }
  
      const userOldComment = comments.find(element => element.userId === userId);
  
      if (!userOldComment) {
        const error = new Error("Comments not found for the user");
        error.status = 404;
        return next(error);  
      }
  
      // Update the comment
      userOldComment.comment = newComment;
  
      return res.status(200).json({
        message: `Comment with id ${userId} updated successfully.`,
        updatedComment: newComment
      });
  
    } catch (err) {
      next(err); 
    }
  }
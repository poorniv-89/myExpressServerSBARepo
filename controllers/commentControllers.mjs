import { comments } from '../data/comments.mjs';

export function getAllComments(req, res)
{
   res.json(comments);
}

export function getUserComments(req, res)
{
   const userId = req.params.id;
   const Usercomments = comments.filter(element => element.userId === userId);
   if(Usercomments.length > 0)
   {
      res.json(Usercomments);
   }
   else
   {
      res.status(404).send("Comments not found for the user");
   }
}

import { comments } from '../data/comments.mjs';

function getAllComments(req, res, next)
{
   res.send(comments);
   next();
}

export default getAllComments;
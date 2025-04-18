import { comments } from '../data/comments.mjs';

function getAllComments(req, res)
{
   res.json(comments);
}

export default getAllComments;
import { users } from '../data/users.mjs'

export function getAllUsers(req, res)
{
    res.json(users);
}
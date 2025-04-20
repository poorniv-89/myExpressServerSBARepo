import { users } from '../data/users.mjs'

export function getAllUsers(req, res)
{
    res.json(users);
}

export function deleteUserByUserId(req, res)
{
    const userId = req.query;
    console.log(userId);
    if(userId)
    {
        const user = users.find(element => element.id === userId.id);
        console.log(user);
        if(user)
        {
            const userIndex  = users.indexOf(user);
            users.splice(userIndex, 1);
            return res.json(`user with the username: '${user.username}' is deleted from the users DB`);
        }
        else
        {
            res.status(404).send("User not found in DB");
        }
    }
    else
    {
        res.status(404).send("Invalid input");
    }

}
import { users } from '../data/users.mjs'

export function getAllUsers(req, res, next) {
    try {
        res.json(users);
    }
    catch (err) {
        next(err);
    }
}

export function deleteUserByUserId(req, res, next) {
    try {
        const userId = req.query.id?.trim();
        console.log(userId);
        if (userId) {
            const user = users.find(element => element.id === userId);
            console.log(user);
            if (user) {
                const userIndex = users.indexOf(user);
                users.splice(userIndex, 1);
                return res.json(`user with the username: '${user.username}' is deleted from the users DB`);
            }
            else {
                const err = new Error('User not found in DB');
                err.status = 404;
                return next(err);
            }
        }
        else {
            const err = new Error('User ID is required');
            err.status = 400;
            return next(err);
        }
    }
    catch (err) {
        next(err);
    }

}
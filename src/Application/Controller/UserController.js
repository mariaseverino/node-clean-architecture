const UserUseCases = require("../UseCase/UserUseCases");
const User = require("../../Domain/Entities/User");

class UserController {
    async handle(req, res) {
        const { name, email, password } = req.body;

        let user = new User({ name, email, password });
        let userCase = new UserUseCases();

        const result = await userCase.create(user);

        return res.json(result);
    }

    async auth(req, res) {
        const { name, email, password } = req.body;

        let user = new User({ name, email, password });
        let userCase = new UserUseCases();

        const result = await userCase.authenticate(user);

        return res.json(result);
    }
}

module.exports = UserController;

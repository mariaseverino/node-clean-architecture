const UserUseCases = require("../UseCase/UserCreateUserCase");
const User = require("../../Domain/Entities");

class UserController {
    constructor() {
        this.userCase = new UserUseCases();
    }
    async handle(newUser) {
        let user = User(newUser);

        await this.userCase.create(user);
    }

    async auth(newUser) {
        let user = User(newUser);

        await this.userCase.authenticate(user);
    }
}

module.exports = UserController;

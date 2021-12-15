const UserRepository = require("../../Domain/EntitiesRepository/UserRepository");

class UserUseCases {
    constructor() {
        this.userRepository = new UserRepository();
    }
    async create(user) {
        const userAlreadyExist = await this.userRepository.findByEmail(user);

        if (!!userAlreadyExist) {
            return { done: false };
        }
        const done = !!(await this.userRepository.addUser(user));

        return { done };
    }

    async authenticate(user) {
        const userExists = await this.userRepository.findByEmail(user);

        if (!userExists) {
            return { done: false };
        }

        if (user.password != userExists.password) {
            return { done: false };
        }

        return { done: true };
    }
}

module.exports = UserUseCases;

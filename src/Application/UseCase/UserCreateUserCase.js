const UserRepository = require("../../Domain/EntitiesRepository/UserRepository");

class UserUseCases {
    constructor() {
        this.userRepository = new UserRepository();
    }
    async create(user) {
        const userAlreadyExist = await this.userRepository.findByEmail(user);

        if (userAlreadyExist) {
            return { status: "not done" };
        }
        const status = await this.userRepository.addUser(user);

        return { status };
    }

    async authenticate(user) {
        const userExists = await this.userRepository.findUser(user);

        if (!userExists) {
            return { status: "not done" };
        }

        if (user.password != userExists.password) {
            return { status: "not done" };
        }

        return { status: "done" };
    }
}

module.exports = UserUseCases;

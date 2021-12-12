class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
}

class UserSQLiteRepository {
    addUser({ name, email, password }) {
        return "done";
    }
}

class UserMongoBDRepository {
    addUser({ name, email, password }) {
        return "done";
    }
}

class UserRepository extends UserSQLiteRepository {}

class UserUseCases {
    async create(user) {
        let userRepository = new UserRepository();

        const status = await userRepository.addUser(user);

        return { status };
    }
}
describe("User's tests", () => {
    it("Should create a new user ", async () => {
        let user = new User("maria", "email@gmail.com", "123456");

        let userCase = new UserUseCases();

        expect((await userCase.create(user)).status).toBe("done");
    });
});

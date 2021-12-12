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

    findByEmail({ email }) {
        return email;
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

        const userAlreadyExist = await userRepository.findByEmail(user);

        if (!userAlreadyExist) {
            return { status: "not done" };
        }
        const status = await userRepository.addUser(user);

        return { status };
    }
}

describe("User's tests", () => {
    it("Should return status 'done' when create a new user ", async () => {
        let user = new User("name", "email@gmail.com", "123456");

        let userCase = new UserUseCases();

        expect((await userCase.create(user)).status).toBe("done");
    });

    it("Should return status 'not done' when the user already exists ", async () => {
        let user = new User("name", false, "123456");

        let userCase = new UserUseCases();

        expect((await userCase.create(user)).status).toBe("not done");
    });
});

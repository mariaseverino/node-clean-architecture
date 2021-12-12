class User {
    constructor({ name, email, password }) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
}

class UserSQLiteRepository {
    addUser({ name, email, password }) {
        return "done";
    }

    findUser(user) {
        if (user === undefined) return undefined;

        if (user.password === undefined) {
            return { password: "wrongPassword" };
        }
        return user;
    }

    findByEmail({ email }) {
        return email === false ? true : false;
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

        const userAlreadyExists = await userRepository.findByEmail(user);

        if (userAlreadyExists) {
            return { status: "not done" };
        }
        const status = await userRepository.addUser(user);

        return { status };
    }

    async authenticate(user) {
        let userRepository = new UserRepository();

        const userExists = await userRepository.findUser(user);

        if (!userExists) {
            return { status: "not done" };
        }

        if (user.password != userExists.password) {
            return { status: "not done" };
        }

        return { status: "done" };
    }
}

describe("User's create tests", () => {
    it("Should return status 'done' when create a new user ", async () => {
        let newUser = {
            name: "name",
            email: "email@gmail.com",
            password: "123456",
        };
        let user = new User(newUser);

        let userCase = new UserUseCases();

        expect((await userCase.create(user)).status).toBe("done");
    });

    it("Should return status 'not done' when the user already existss ", async () => {
        let newUser = {
            name: "name",
            email: false,
            password: "123456",
        };
        let user = new User(newUser);

        let userCase = new UserUseCases();

        expect((await userCase.create(user)).status).toBe("not done");
    });
});

describe("User's authenticate tests", () => {
    it("Should return status 'done' when the user is able to authenticate", async () => {
        let newUser = {
            name: undefined,
            email: "email@gmail.com",
            password: "123456",
        };
        let user = new User(newUser);

        let userCase = new UserUseCases();

        expect((await userCase.authenticate(user)).status).toBe("done");
    });
});

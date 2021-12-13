const User = require("../src/Domain/Entities/User");
const UserUseCases = require("../src/Application/UseCase/UserCreateUserCase");

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

    it("Should return status 'not done' when the user's email is not correct", async () => {
        let user = undefined;

        let userCase = new UserUseCases();

        expect((await userCase.authenticate(user)).status).toBe("not done");
    });

    it("Should return status 'not done' when the user's password is not correct", async () => {
        let newUser = {
            name: undefined,
            email: "email@gmail.com",
            password: undefined,
        };
        let user = new User(newUser);

        let userCase = new UserUseCases();

        expect((await userCase.authenticate(user)).status).toBe("not done");
    });
});

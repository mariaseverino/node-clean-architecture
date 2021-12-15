const User = require("../src/Domain/Entities/User");
const UserUseCases = require("../src/Application/UseCase/UserUseCases");

describe("User's create tests", () => {
    it("Should return done 'done' when create a new user ", async () => {
        let newUser = {
            name: "name test",
            email: "email.test@gmail.com",
            password: "123456",
        };
        let user = new User(newUser);

        let userCase = new UserUseCases();

        expect((await userCase.create(user)).done).toBe(true);
    });

    it("Should return done 'false' when the user already existss ", async () => {
        let newUser = {
            name: "name test",
            email: "email.test@gmail.com",
            password: "123456",
        };
        let user = new User(newUser);

        let userCase = new UserUseCases();

        expect((await userCase.create(user)).done).toBe(false);
    });
});

describe("User's authenticate tests", () => {
    it("Should return done 'true' when the user is able to authenticate", async () => {
        let newUser = {
            name: undefined,
            email: "email.test@gmail.com",
            password: "123456",
        };
        let user = new User(newUser);

        let userCase = new UserUseCases();

        expect((await userCase.authenticate(user)).done).toBe(true);
    });

    it("Should return done 'false' when the user's email is not correct", async () => {
        let newUser = {
            name: "name test",
            email: "email.test1@gmail.com",
            password: "123456",
        };

        let user = new User(newUser);

        let userCase = new UserUseCases();

        expect((await userCase.authenticate(user)).done).toBe(false);
    });

    it("Should return done 'false' when the user's password is not correct", async () => {
        let newUser = {
            name: "name test",
            email: "email.test@gmail.com",
            password: "1234568",
        };
        let user = new User(newUser);

        let userCase = new UserUseCases();

        expect((await userCase.authenticate(user)).done).toBe(false);
    });
});

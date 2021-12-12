class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
}

describe("User tests", () => {
    it("Should get the user's name ", async () => {
        let user = new User("maria", "email@gmail.com", "123456");

        expect(user.name).toBe("maria");
    });
});

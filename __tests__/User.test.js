class User {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
}

class UserRepository extends User {
    findByName() {
        return this.name;
    }
}

describe("User's tests", () => {
    it("Should get the user's name ", async () => {
        let user = new UserRepository("maria", "email@gmail.com", "123456");

        expect(user.findByName()).toBe("maria");
    });
});

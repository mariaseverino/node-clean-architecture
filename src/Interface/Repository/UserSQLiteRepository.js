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

module.exports = UserSQLiteRepository;

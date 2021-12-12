class UserSQLiteRepository {
    addUser({ name, email, password }) {
        return "done";
    }

    findByEmail({ email }) {
        return email;
    }
}

export { UserSQLiteRepository };

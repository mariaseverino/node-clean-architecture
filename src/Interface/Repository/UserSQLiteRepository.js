const knex = require("../../Infrastructure/knex");

class UserSQLiteRepository {
    async addUser({ name, email, password }) {
        const [userCreated] = await knex("users").insert({
            name,
            email,
            password,
        });

        return userCreated;
    }

    async findByEmail({ email }) {
        return await knex("users").where({ email }).select().first();
    }
}

module.exports = UserSQLiteRepository;

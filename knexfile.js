// Update with your config settings.

module.exports = {
    development: {
        client: "sqlite3",
        connection: {
            filename: "./src/Infrastructure/knex/database/db.sqlite3",
        },
        migrations: {
            directory: "./src/Infrastructure/knex/database/migrations",
        },
        useNullAsDefault: true,
    },
};

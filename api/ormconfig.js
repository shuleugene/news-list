const path = require('path'); // eslint-disable-line

module.exports = {
    host: "localhost",
    username: "postgres",
    password: "postgres",
    port: 5432,
    name: "postgres",
    seeds: ['src/db/seeding/seeds/*.ts'],
    factories: ['src/db/seeding/factories/*.ts'],
    type: 'postgres',
    entities: ['src/**/*.entity{.ts,.js}'],
    synchronize: true,
    logging: false,
};

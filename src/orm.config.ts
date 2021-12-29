import { TypeOrmModuleOptions } from '@nestjs/typeorm';

function ormConfig(): TypeOrmModuleOptions {
    const commonConf = {
        SYNCRONIZE: false,
        ENTITIES: [__dirname + '/domain/*.entity{.ts,.js}'],
        MIGRATIONS: [__dirname + '/migrations/**/*{.ts,.js}'],
        CLI: {
            migrationsDir: 'src/migrations',
        },
        MIGRATIONS_RUN: true,
    };

    let ormconfig: TypeOrmModuleOptions = {
        name: 'default',
        type: 'mysql',
        // database: process.env.DATABASE_NAME,
        // host: process.env.DATABASE_HOST,
        // port: 3306,
        // username: process.env.DATABASE_USERNAME,
        // password: process.env.DATABASE_PASSWORD,

        // database: 'reactjs_jira_bugs_clone',
        // host: '103.142.26.103',
        // port: 3306,
        // username: 'monty29',
        // password: '123456789',

        database: 'reactjs_jira_bugs_clone',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '123456789',

        logging: false,
        synchronize: true,
        entities: commonConf.ENTITIES,
        migrations: commonConf.MIGRATIONS,
        cli: commonConf.CLI,
        migrationsRun: commonConf.MIGRATIONS_RUN,
    };

    if (process.env.BACKEND_ENV === 'prod') {
        ormconfig = {
            name: 'default',
            type: 'mysql',

            database: 'reactjs_jira_bugs_clone',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '123456789',

            logging: false,
            synchronize: commonConf.SYNCRONIZE,
            entities: commonConf.ENTITIES,
            migrations: commonConf.MIGRATIONS,
            cli: commonConf.CLI,
            migrationsRun: commonConf.MIGRATIONS_RUN,
        };
    }

    if (process.env.BACKEND_ENV === 'test') {
        ormconfig = {
            name: 'default',
            type: 'mysql',

            database: 'reactjs_jira_bugs_clone',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: '123456789',

            logging: false,
            synchronize: true,
            entities: commonConf.ENTITIES,
            migrations: commonConf.MIGRATIONS,
            cli: commonConf.CLI,
            migrationsRun: commonConf.MIGRATIONS_RUN,
        };
    }
    return ormconfig;
}

export { ormConfig };

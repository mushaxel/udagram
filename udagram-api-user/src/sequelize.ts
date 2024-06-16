import {Sequelize} from 'sequelize-typescript';
import {config} from './config/config';


export const sequelize = new Sequelize({
  'username': config.username,
  'password': config.password,
  'database': config.database,
  'host': config.host,
  'storage': ':memory:',
  // 'dialect': config.dialect,
  'dialect': 'postgres',
  dialectOptions: {
    ssl: {
      require: true, 
      rejectUnauthorized: false // This line will fix error
    }
  },
});

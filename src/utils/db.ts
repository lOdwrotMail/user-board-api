import { Sequelize } from 'sequelize-typescript';
import * as models from '../model';

const URI = 'postgres://users_board_db_uilp_user:NA4qs986tXDbsHBKS75WbLePQJ3NiaxP@dpg-ckroea01hnes7384l7q0-a.frankfurt-postgres.render.com/users_board_db_uilp';


console.log('LOG', process.env.DB_NAME)
export const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  dialect: 'postgres', 
  models: Object.values(models),
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    }
  }
});

export async function connect() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
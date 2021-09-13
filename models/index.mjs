import { Sequelize } from 'sequelize';
import allConfig from '../config/config.js';

import initDrummerModel from './drummer.mjs';
import initReservationModel from './reservation.mjs';

const env = process.env.NODE_ENV || 'development';

const config = allConfig[env];

const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

// add your model definitions to db here
db.Drummer = initDrummerModel(sequelize, Sequelize.DataTypes);
db.Reservation = initReservationModel(sequelize, Sequelize.DataTypes);

db.Drummer.hasMany(db.Reservation);
db.Reservation.belongsTo(db.Drummer);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;

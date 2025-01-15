import pools from '../database.js';
import { SQL_QUERISE } from './user.queries.js';
import { v4 as uuidv4 } from 'uuid';

export const findUserByDeviceId = async (deviceId) => {
  const [rows] = await pools.USER_DB.query(SQL_QUERISE.FIND_USER_BY_DEVICE_ID, [deviceId]);
  return rows[0];
};

export const createUser = async (deviceId) => {
  const id = uuidv4();
  await pools.USER_DB.query(SQL_QUERISE.CREATE_USER, [id, deviceId]);
  return { id, deviceId };
};

export const updateUserLogin = async (id) => {
  await pools.USER_DB.query(SQL_QUERISE.UPDATE_USER_LOGIN, [id]);
};

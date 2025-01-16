export const SQL_QUERISE = {
  FIND_USER_BY_DEVICE_ID: 'SELECT * FROM user WHERE device_id = ?',
  CREATE_USER: 'INSERT INTO user (id, device_id, x, y) VALUES (?, ?, ?, ?)',
  UPDATE_USER_LOGIN:
    'UPDATE user SET last_login = CURRENT_TIMESTAMP, x = ?, y = ? WHERE device_id = ?',
};

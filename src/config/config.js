// 모든 상수, 환경변수들을 모아둔 파일
import { PORT, HOST, CLIENT_VERSION } from '../constants/env.js';
import { TOTAL_LENGTH, PACKET_TYPE_LENGTH } from '../constants/header.js';
import { DB1_NAME, DB1_USER, DB1_PASSWORD, DB1_HOST, DB1_PORT } from '../constants/env.js';
import { DB2_NAME, DB2_USER, DB2_PASSWORD, DB2_HOST, DB2_PORT } from '../constants/env.js';

export const config = {
  server: {
    port: PORT,
    host: HOST,
  },
  client: {
    version: CLIENT_VERSION,
  },
  packet: {
    totalLength: TOTAL_LENGTH,
    typeLength: PACKET_TYPE_LENGTH,
  },
  database: {
    GAME_DB: {
      name: DB1_NAME,
      user: DB1_USER,
      password: DB1_PASSWORD,
      host: DB1_HOST,
      port: DB1_PORT,
    },
    USER_DB: {
      name: DB2_NAME,
      user: DB2_USER,
      password: DB2_PASSWORD,
      host: DB2_HOST,
      port: DB2_PORT,
    },
  },
};

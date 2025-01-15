// 서버 초기화 작업
// 서버 키면 작동됨
import { testAllConnections } from '../utils/db/testConnection.js';
import { loadGameAssets } from './assets.js';
import { loadProtos } from './loadProtos.js';
import pools from '../db/database.js';

const initServer = async () => {
  try {
    await loadGameAssets();
    await loadProtos();
    await testAllConnections(pools);
  } catch (e) {
    console.error(e);
    process.exit(1); // 오류 발생 시 프로세스 종료
  }
};

export default initServer;

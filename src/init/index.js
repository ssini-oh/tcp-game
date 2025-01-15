// 서버 초기화 작업
// 서버 키면 작동됨
import { testAllConnections } from '../utils/db/testConnection.js';
import { loadGameAssets } from './assets.js';
import { loadProtos } from './loadProtos.js';
import pools from '../db/database.js';
import { addGameSession } from '../session/game.session.js';

const initServer = async () => {
  try {
    await loadGameAssets();
    await loadProtos();
    await testAllConnections(pools);

    // 서버 시작과 동시에 기본 게임 세션 생성
    const defaultGame = addGameSession();
    console.log(`기본 게임 인스턴스가 생성되었습니다. (ID: ${defaultGame.id})`);
  } catch (e) {
    console.error(e);
    process.exit(1); // 오류 발생 시 프로세스 종료
  }
};

export default initServer;

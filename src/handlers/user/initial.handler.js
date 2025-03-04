// 가장 최초에 접속했을 때 호출되는 핸들러 (클라에서 서버 접속 시)
import { addUser } from '../../session/user.session.js';
import { HANDLER_IDS, RESPONSE_SUCCESS_CODE } from '../../constants/handlerIds.js';
import { createResponse } from '../../utils/response/createResponse.js';
import { handleError } from '../../utils/error/errorHandler.js';
import { findUserByDeviceId, createUser, updateUserLogin } from '../../db/user/user.db.js';
import { getGameSession } from '../../session/game.session.js';

const initialHandler = async ({ socket, userId, payload }) => {
  try {
    const { deviceId, playerId, latency, x = 0, y = 0 } = payload;

    let user = await findUserByDeviceId(deviceId);
    if (!user) {
      user = await createUser(deviceId, x, y);
    } else {
      await updateUserLogin(deviceId, user.x, user.y);
    }

    // 유저 세션 추가
    const userSession = addUser(socket, userId, user.x, user.y);
    userSession.playerId = playerId;
    userSession.latency = latency;
    console.log('initialHandler 호출-userSession', userSession);

    // 게임 세션에 자동 등록
    const gameSession = getGameSession();
    gameSession.addUser(userSession);

    // 유저 정보 응답 생성
    const initialResponse = createResponse(
      HANDLER_IDS.INITIAL,
      RESPONSE_SUCCESS_CODE,
      { userId: user.id, x: user.x, y: user.y, message: '게임에 입장하였습니다.' },
      deviceId,
    );

    socket.write(initialResponse);
  } catch (error) {
    handleError(socket, error);
  }
};

export default initialHandler;

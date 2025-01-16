// 가장 최초에 접속했을 때 호출되는 핸들러 (클라에서 서버 접속 시)
import { addUser } from '../../session/user.session.js';
import { HANDLER_IDS, RESPONSE_SUCCESS_CODE } from '../../constants/handlerIds.js';
import { createResponse } from '../../utils/response/createResponse.js';
import { handleError } from '../../utils/error/errorHandler.js';
import { findUserByDeviceId, createUser, updateUserLogin } from '../../db/user/user.db.js';
import { getGameSession } from '../../session/game.session.js';

const initialHandler = async ({ socket, userId, payload }) => {
  try {
    const { deviceId, playerId, latency } = payload;

    let user = await findUserByDeviceId(deviceId);

    if (!user) {
      user = await createUser(deviceId);
    } else {
      await updateUserLogin(user.id);
    }

    // 유저 세션 추가
    const userSession = addUser(socket, userId);
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
      { userId: user.id, gameId: gameSession.id, message: '게임에 입장하였습니다.' },
      deviceId,
    );

    // 소켓을 통해 클라이언트에게 응답 메세지 전송
    socket.write(initialResponse);
  } catch (error) {
    handleError(socket, error);
  }
};

export default initialHandler;

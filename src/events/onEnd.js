import { userSessions, gameSessions } from '../session/sessions.js';
import { getUserBySocket, removeUser } from '../session/user.session.js';
import { updateUserCoordinates } from '../db/user/user.db.js';
import { getGameSession } from '../session/game.session.js';

export const onEnd = (socket) => () => {
  console.log('클라이언트 연결이 종료되었습니다.');

  // console.log(userSessions);
  // console.log(gameSessions);

  // const user = getUserBySocket(socket);
  // console.log(user.id, user.x, user.y);
  // if (user) {
  //   updateUserCoordinates(user.id, user.x, user.y);
  // }

  const user = getUserBySocket(socket);
  if (user) {
    const gameSession = getGameSession();
    const gameUser = gameSession.getUser(user.id);

    if (gameUser) {
      console.log('유저 연결 종료:', gameUser.id, gameUser.x, gameUser.y);
      updateUserCoordinates(gameUser.id, gameUser.x, gameUser.y);
    }
  }

  // 세션에서 유저 삭제
  removeUser(socket);
};

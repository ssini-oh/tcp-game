import { gameSessions } from './sessions.js';
import Game from '../classes/models/game.class.js';
import { v4 as uuidv4 } from 'uuid';

export const addGameSession = (id) => {
  // 이미 게임 세션이 있다면 첫 번째 세션 반환
  if (gameSessions.length > 0) {
    return gameSessions[0];
  }

  // 게임 세션이 없는 경우에만 새로 생성
  const gameId = id || uuidv4();
  const session = new Game(gameId);
  gameSessions.push(session);
  return session;

  // const session = new Game(id);
  // gameSessions.push(session);
  // return session;
};
export const removeGameSession = (id) => {
  const index = gameSessions.findIndex((session) => session.id === id);
  if (index !== -1) {
    return gameSessions.splice(index, 1)[0];
  }
};

export const getGameSession = (id) => {
  if (!id) {
    return gameSessions[0];
  }
  return gameSessions.find((session) => session.id === id);
};

export const getAllGameSessions = () => {
  return gameSessions;
};

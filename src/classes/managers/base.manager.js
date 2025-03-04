// 각 종 매니저들의 부모 클래스

class BaseManager {
  constructor() {
    if (new.target === BaseManager) {
      throw new TypeError('Cannot construct BaseManager instances directly');
    }
  }

  addPlayer(playerId, ...args) {
    throw new Error('Must implement addPlayer method');
  }

  removePlayer(playerId) {
    throw new Error('Must implement removePlayer method');
  }

  clearAll() {
    throw new Error('Must implement clearAll method');
  }
}

export default BaseManager;

// 전체 길이와 패킷 타입 길이 정의

export const TOTAL_LENGTH = 4; // 전체 길이를 나타내는 4바이트
export const PACKET_TYPE_LENGTH = 1; // 패킷타입을 나타내는 1바이트 // 0 = 핑, 1 = 일반 패킷

export const PACKET_TYPE = {
  PING: 0,
  NORMAL: 1,
  GAME_START: 2,
  LOCATION: 3,
};

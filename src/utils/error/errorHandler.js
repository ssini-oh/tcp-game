// 클라이언트와 연결되어 어떠한 동작을 하던 중 에러가 발생할 경우 호출되는 함수

import { createResponse } from '../response/createResponse.js';
import { ErrorCodes } from './errorCodes.js';

export const handleError = (socket, error) => {
  let responseCode;
  let message;
  console.error(error);

  if (error.code) {
    responseCode = error.code;
    message = error.message;

    console.log(`에러 코드: ${error.code}, 메세지: ${error.message}`);
  } else {
    responseCode = ErrorCodes.SOCKET_ERROR;
    message = error.message;
    console.log(`일반 에러: ${error.message}`);
  }

  const errorResponse = createResponse(-1, responseCode, { message });
  socket.write(errorResponse);
};

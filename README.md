# TCP Game

## 목차

- [프로젝트 소개](#프로젝트-소개)
- [기술 스택](#기술-스택)
- [시스템 아키텍처](#시스템-아키텍처)
- [주요 기능](#주요-기능)
- [시스템 요구사항](#시스템-요구사항)
- [설치 및 실행 방법](#설치-및-실행-방법)
- [프로젝트 구조](#프로젝트-구조)
- [주요 클래스 설명](#주요-클래스-설명)
- [라이선스](#라이선스)

## 프로젝트 소개

TCP 소켓 통신을 기반으로 한 실시간 멀티플레이어 게임 서버입니다. AWS RDS를 활용하여 안정적인 데이터베이스 운영과 실시간 게임 상태 동기화를 지원합니다.

## 기술 스택

### Backend

- **Node.js**: 서버 런타임 환경
- **TCP Socket**: 실시간 양방향 통신
- **AWS SDK**: AWS 서비스 연동

### Database

- **AWS RDS (MySQL 8.0)**: 안정적인 데이터 저장 및 관리

### 개발 도구

- **Prettier**: 코드 포맷팅
- **nodemon**: 개발 환경에서의 자동 서버 재시작

### 통신 프로토콜

- **TCP/IP**: 신뢰성 있는 데이터 전송
- **Custom Binary Protocol**: 효율적인 게임 데이터 직렬화

## 시스템 아키텍처

### 게임 시스템

- 실시간 위치 동기화
- 레이턴시 측정 및 보정

### 네트워크 동기화

- 안정적인 실시간 통신
- 상태 동기화 및 위치 업데이트

### 데이터베이스 구조

- 사용자 정보 및 세션 관리
- 자동 마이그레이션 지원

## 주요 기능

- 실시간 멀티플레이어 게임
- 사용자 세션 및 게임 상태 관리
- 위치 기반 게임 로직
- 실시간 알림 시스템

## 시스템 요구사항

- Node.js 18.0.0 이상
- AWS 계정 및 RDS 접근 권한

## 설치 및 실행 방법

1. **저장소 클론**

```bash
git clone [repository-url]
cd tcp-game
```

2. **의존성 설치**

```bash
npm install
```

3. **환경 변수 설정**
   `.env` 파일을 생성하고 다음 환경변수를 설정합니다:

```
PORT=5555
HOST=0.0.0.0
CLIENT_VERSION=1.0.0

DB1_NAME=game_db
DB1_USER=[RDS-username]
DB1_PASSWORD=[RDS-password]
DB1_HOST=[RDS-endpoint]
DB1_PORT=3306

DB2_NAME=user_db
DB2_USER=[RDS-username]
DB2_PASSWORD=[RDS-password]
DB2_HOST=[RDS-endpoint]
DB2_PORT=3306
```

4. **데이터베이스 마이그레이션**

```bash
npm run migrate
```

5. **서버 실행**

```bash
npm start
```

## 프로젝트 구조

```
src/
├── classes/        # 게임 및 사용자 관련 클래스
├── config/         # 설정 파일
├── constants/      # 상수 정의
├── db/            # 데이터베이스 관련 코드
│   ├── migration/ # DB 마이그레이션 스크립트
│   └── sql/      # SQL 스키마 파일
├── events/        # 이벤트 핸들러
├── handlers/      # 요청 핸들러
├── session/       # 세션 관리
└── utils/         # 유틸리티 함수
```

## 주요 클래스 설명

### Game 클래스

- 게임 세션 및 상태 관리
- 위치 정보 동기화

### User 클래스

- 사용자 정보 및 위치 관리
- 레이턴시 측정 및 보정

## 라이선스

MIT License

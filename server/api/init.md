## APIs List

### Google

1.

### Naver

1. /campaigns
2. /adKeyword

- post :

## Kakao

### 광고계정 보고서 보기

- GET /openapi/v1/adAccounts/report HTTP/1.1
- Host: api.keywordad.kakao.com
- Authorization: Bearer {ACCESS_TOKEN}

1. /campaigns

- 액세스 토큰(Access token)과 광고계정 ID(adAccountId)를 헤더에 담아 GET으로 요청합니다. 성공 시 응답 바디에 JSON 객체로 캠페인 보고서를 받습니다.

2. /adKeyword

### 키워드 목록 보기(키워드별 ID 를 받아야함)

키워드 목록을 조회합니다.

액세스 토큰(Access token)과 광고계정 ID(adAccountId)를 헤더에 담아 GET으로 요청합니다. 성공 시 응답 바디에 JSON 객체로 키워드의 목록을 받습니다. 실패 시 에러 코드 및 상세 에러 코드로 사유를 확인합니다

#### Request

- GET /openapi/v1/keywords HTTP/1.1
- Host: api.keywordad.kakao.com
- Authorization: Bearer {ACCESS_TOKEN}

#### Response

```js
[
  {
    adGroupId: "4444444441",
    id: "55555555551",
    text: "키워드1",
    config: "ON",
    landingInfo: {
      rspvLandingUrl: "https://www.daum.net",
      pcLandingUrl: null,
      mobileLandingUrl: null,
    },
    bidStrategy: { // 키워드 입찰전략 
      type: "MANUAL",
      bidAmount: 1000,
    },
    status: ["WAITING", "OFF_BY_BIZ_CHANNEL_WAITING", "OFF"],
    reviewStatus: "WAITING",
  },
  {
    adGroupId: "4444444441",
    id: "55555555552",
    text: "키워드2",
    config: "ON",
    landingInfo: {
      rspvLandingUrl: null,
      pcLandingUrl: "https://www.daum.net",
      mobileLandingUrl: "https://www.daum.net",
    },
    bidStrategy: {
      type: "AD_GROUP",
      bidAmount: null,
    },
    status: ["WAITING", "OFF_BY_BIZ_CHANNEL_WAITING", "OFF"],
    reviewStatus: "WAITING",
  },
];
```

### 키워드 보고서 보기

키워드 보고서를 조회합니다. 액세스 토큰(Access token)과 광고계정 ID(adAccountId)를 헤더에 담아 GET으로 요청합니다. 성공 시 응답 바디에 JSON 객체로 키워드 보고서를 받습니다. 실패 시 에러 코드 및 상세 에러 코드로 사유를 확인합니다.

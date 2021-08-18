import { GoogleSpreadsheet } from "google-spreadsheet";
import AccountInfo from "../../credentials.json";

// / 처음 시작할 때 문서 접속에 대한 인증을 처리하고 해당 문서를 로드하기.

/* 클라이언트로부터 받은 문서 ID 에 접근하기 위한 인증 진행*/

export const Authentication = async (): Promise<GoogleSpreadsheet> => {
  const doc = new GoogleSpreadsheet("<the sheet ID from the url");
  await doc.useServiceAccountAuth({
    client_email: AccountInfo.client_email,
    private_key: AccountInfo.private_key,
  });
  await doc.loadInfo();
  return doc;
};

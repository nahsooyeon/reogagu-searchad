import { GoogleSpreadsheet } from "google-spreadsheet";
import creds from "../../credentials.json";
import axios from "axios";
import { IGoogleAuth } from "../interfaces/googleAuth";

/* export class CreateNewSheet {
  doc = new GoogleSpreadsheet();
  client_email: string;
  private_key: string;

  constructor(creds: IGoogleAuth) {
    this.client_email = creds.client_email;
    this.private_key = creds.private_key;
  }
} */

export const CreateNewSheet = async (): Promise<GoogleSpreadsheet> => {
  const doc = new GoogleSpreadsheet();
  await doc.useServiceAccountAuth(creds);
  await doc.createNewSpreadsheetDocument({
    title: "A new document created",
  });
  const sheet1 = doc.sheetsByIndex[0];
  return doc;
};

/* constructor() {
    this.doc.useServiceAccountAuth({
      client_email: creds.client_email,
      private_key: creds.private_key,
    });
    this.doc.createNewSpreadsheetDocument({
      title: "sample spreadsheet",
    });
    AccountAuth(): void {
			return
		}
    console.log(this.doc.spreadsheetId);
    const sheet1 = this.doc.sheetsByIndex[0];
  } */

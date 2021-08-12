import { google } from "googleapis";
import { auth } from "googleapis/build/src/apis/abusiveexperiencereport";

export const Authentication = async () => {
  const auth = new google.Auth.GoogleAuth({
    keyFile: "credentials.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  const client = await auth.getClient();
  const sheets = google.sheets({
    version: "v4",
    auth: client,
  });
  return { sheets };
};

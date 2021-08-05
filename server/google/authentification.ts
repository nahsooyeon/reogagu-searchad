import { google } from "googleapis";

export const Authentication = async () => {
  const auth = new google.Auth.GoogleAuth({
    keyFile: "crednetials.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });

  const client = await auth.getClient();
  const sheets = google.sheets({
    version: "v4",
    auth: client,
  });
  return { sheets };
};

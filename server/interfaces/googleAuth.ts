export interface IGoogleAuth {
  type: string;
  project_id: string;
  private_key_id: string;
  private_key: string;
  client_email: string;
  client_id: string;
  auth_uri: "https://accounts.google.com/o/oauth2/auth";
  token_uri: "https://oauth2.googleapis.com/token";
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs";
  client_x509_cert_url: string;
}



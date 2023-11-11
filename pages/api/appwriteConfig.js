import { Client, Account, Databases } from "appwrite";

const client = new Client();

const appwrite_api_key = process.env.REACT_APP_APPWRITE_API_KEY;
const database_key = process.env.REACT_APP_DATABASE_APPWRITE_API_KEY;

// Set the endpoint URL and project ID for the client
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(appwrite_api_key);

// Create a new account instance using the client
export const account = new Account(client);

// Create a new databases instance using the client and database ID
export const databases = new Databases(client, database_key);

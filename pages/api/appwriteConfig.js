import { Client, Account, Databases } from "appwrite";

const client = new Client();

// Set the endpoint URL and project ID for the client
client
  .setEndpoint("https://appwrite.vogueeco.us/v1")
  .setProject("63aaeaf74d0ae48e48a5");

// Create a new account instance using the client
export const account = new Account(client);

// Create a new databases instance using the client and database ID
export const databases = new Databases(client, "63aaef5036cc3edd20a3");

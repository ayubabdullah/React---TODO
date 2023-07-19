import { Client } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://appwrite.ayubdev.me/v1")
  .setProject("64b6c9740751bd9ee542");

export default client;

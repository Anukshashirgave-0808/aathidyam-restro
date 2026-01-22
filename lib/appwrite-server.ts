import { Client, Databases } from "appwrite"

const client = new Client()

client
  .setEndpoint("https://nyc.cloud.appwrite.io/v1") // Your Appwrite endpoint
  .setProject("696dc849001dcfd3e246") // Needed even for API key
  

export const databases = new Databases(client)



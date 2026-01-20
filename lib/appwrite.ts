import { Client, Databases } from "appwrite"

const client = new Client()

client
  .setEndpoint("https://nyc.cloud.appwrite.io/v1")
  .setProject("696dc849001dcfd3e246")

export const databases = new Databases(client)

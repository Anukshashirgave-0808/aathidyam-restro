import { databases } from "./appwrite"
import { ID } from "appwrite"

export async function createOrder(orderData: any) {
  return await databases.createDocument(
    "696dc87b003d202d96ea",        // Database ID
    "order_details",      // Collection ID
    ID.unique(),
    orderData
  )
}

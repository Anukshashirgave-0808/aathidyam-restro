import { ID } from "node-appwrite";
import { createAdminClient } from "./appwrite-server";

export async function createOrder(data: any) {
  try {
    const { databases } = await createAdminClient();

    const dbId = process.env.APPWRITE_DATABASE_ID!;
    const colId = process.env.APPWRITE_COLLECTION_ID!;

    // 1. Create a CLEAN version of the items (No images)
    const cleanItems = data.cartItems.map((item: any) => ({
      name: item.name,
      price: item.price,
      quantity: item.quantity
    }));

    const response = await databases.createDocument(
      dbId,
      colId,
      ID.unique(),
      {
        name: data.name,
        email: data.email,
        phone: data.phone,
        // 2. Ensure these match your Form keys and Appwrite column keys
        street: data.street || "",
        city: data.city || "", 
        state: data.state || "Andhra Pradesh",
        country: data.country || "India",
        pincode: data.pincode || data.pin, 
        
        isGuest: data.isGuest,
        paymentMethod: data.paymentMethod,
        total: Number(data.total),
        
        // 3. Store the CLEAN items as a string
        items: JSON.stringify(cleanItems), 
      }
    );
    
    return response;
  } catch (error: any) {
    console.error("Appwrite Server Error:", error.message);
    throw error; 
  }
}
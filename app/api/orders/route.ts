import { NextResponse } from "next/server";
import { createOrder } from "@/lib/order";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Validate that body is not empty
    if (!body) return NextResponse.json({ error: "No data provided" }, { status: 400 });

    const order = await createOrder(body);
    return NextResponse.json(order, { status: 200 });

  } catch (error: any) {
    console.error("Route Error:", error);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" }, 
      { status: 500 }
    );
  }
}
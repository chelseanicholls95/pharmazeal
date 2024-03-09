import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Store from "@/models/Store";

export async function GET() {
  await dbConnect();

  try {
    const stores = await Store.find({});
    return NextResponse.json(stores);
  } catch (error) {
    return NextResponse.json({ errors: error.message });
  }
}

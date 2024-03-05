import { NextResponse } from "next/server";
import dbConnect from "@/app/lib/dbConnect";
import Store from "@/app/models/Store";

export async function GET() {
  await dbConnect();

  try {
    const stores = await Store.find({});
    return NextResponse.json("got stores");
  } catch (error) {
    return NextResponse.json({ errors: error.message });
  }
}

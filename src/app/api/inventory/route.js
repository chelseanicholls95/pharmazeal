import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Drug from "@/models/Drug";

export async function GET() {
  await dbConnect();

  try {
    const drugs = await Drug.find({});
    return NextResponse.json(drugs);
  } catch (error) {
    return NextResponse.json({ errors: error.message });
  }
}

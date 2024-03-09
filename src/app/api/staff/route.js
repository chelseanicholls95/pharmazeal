import { NextResponse } from "next/server";
import dbConnect from "@/app/lib/dbConnect";
import Staff from "../../models/Staff";

export async function GET() {
  await dbConnect();

  try {
    const customers = await Staff.find({});
    return NextResponse.json(customers);
  } catch (error) {
    return NextResponse.json({ errors: error.message });
  }
}

import { NextResponse } from "next/server";
import dbConnect from "@/app/lib/dbConnect";
import Customer from "@/app/models/Customer";

export async function GET() {
  await dbConnect();

  try {
    const customers = await Customer.find({});
    return NextResponse.json("got customers");
  } catch (error) {
    return NextResponse.json({ errors: error.message });
  }
}

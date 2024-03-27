import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Sale from "@/models/Sale";

export async function GET() {
  await dbConnect();

  try {
    const sales = await Sale.find({});
    return NextResponse.json(sales);
  } catch (error) {
    return NextResponse.json({ errors: error.message });
  }
}

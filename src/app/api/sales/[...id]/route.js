import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Sale from "@/models/Sale";

export async function POST({ url }) {
  await dbConnect();

  const splitUrl = url.split("/");
  const userInput = splitUrl[5];
  const id = userInput.charAt(0).toUpperCase() + userInput.slice(1);

  try {
    const sales = await Sale.find({ customer: id });
    return NextResponse.json(sales);
  } catch (error) {
    return NextResponse.json({ errors: error.message });
  }
}

import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Customer from "@/models/Customer";

export async function POST({ url }) {
  await dbConnect();

  const splitUrl = url.split("/");
  const userInput = splitUrl[5];
  const surname = userInput.charAt(0).toUpperCase() + userInput.slice(1);

  try {
    const customers = await Customer.find({ surname: surname });
    return NextResponse.json(customers);
  } catch (error) {
    return NextResponse.json({ errors: error.message });
  }
}

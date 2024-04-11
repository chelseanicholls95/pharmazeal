import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Customer from "@/models/Customer";

export async function POST({ url }) {
  await dbConnect();

  const splitUrl = url.split("/");
  const userInput = splitUrl[5];
  const id = userInput.charAt(0).toUpperCase() + userInput.slice(1);

  try {
    const customer = await Customer.find({ _id: id });
    return NextResponse.json(customer);
  } catch (error) {
    return NextResponse.json({ errors: error.message });
  }
}

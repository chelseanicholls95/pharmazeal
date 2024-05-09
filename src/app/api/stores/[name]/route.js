import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Store from "@/models/Store";

export async function POST({ url }) {
  await dbConnect();

  const splitUrl = url.split("/");
  const userInput = splitUrl[5];
  const name = userInput.charAt(0).toUpperCase() + userInput.slice(1);

  try {
    const store = await Store.find({ name: name });
    return NextResponse.json(store);
  } catch (error) {
    return NextResponse.json({ errors: error.message });
  }
}

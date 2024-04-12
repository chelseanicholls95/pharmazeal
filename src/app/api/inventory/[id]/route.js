import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Drug from "@/models/Drug";

export async function POST(url) {
  await dbConnect();

  const splitUrl = url.split("/");
  const userInput = splitUrl[5];
  const id = userInput.charAt(0).toUpperCase() + userInput.slice(1);

  try {
    const drug = await Drug.find({ _id: id });
    return NextResponse.json(drug);
  } catch (error) {
    return NextResponse.json({ errors: error.message });
  }
}

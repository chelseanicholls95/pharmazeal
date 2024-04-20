import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Drug from "@/models/Drug";

export async function POST({ url }) {
  await dbConnect();

  const splitUrl = url.split("/");
  const userInput = splitUrl[6];
  const drugName = userInput.charAt(0).toUpperCase() + userInput.slice(1);

  try {
    const drugs = await Drug.find({ drugName: drugName });
    return NextResponse.json(drugs);
  } catch (error) {
    return NextResponse.json({ errors: error.message });
  }
}

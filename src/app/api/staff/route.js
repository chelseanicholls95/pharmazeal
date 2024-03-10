import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Staff from "@/models/Staff";

export async function GET() {
  await dbConnect();
  try {
    const users = await Staff.find({});
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json({ errors: error.message });
  }
}

export async function POST({ username }) {
  await dbConnect();

  try {
    const user = await Staff.findOne({ username: username });
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ errors: error.message });
  }
}

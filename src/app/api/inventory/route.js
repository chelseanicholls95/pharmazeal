import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Drug from "@/models/Drug";

import inventory from "@/drugs.js";

export async function GET() {
  await dbConnect();

  try {
    const drugs = await Drug.find({});
    return NextResponse.json(drugs);
  } catch (error) {
    return NextResponse.json({ errors: error.message });
  }
}

export async function PUT(req) {
  await dbConnect();
  const { id, quantity } = await req.json();

  try {
    const drug = await Drug.updateOne({ _id: id }, { totalStock: quantity });
    return NextResponse.json(drug);
  } catch (error) {
    return NextResponse.json({ errors: error.message });
  }
}

export async function POST() {
  await dbConnect();

  try {
    const drugs = await Drug.insertMany(inventory);
    return NextResponse.json(drugs);
  } catch (error) {
    return NextResponse.json({ errors: error.message });
  }
}

export async function DELETE() {
  await dbConnect();

  try {
    const deleted = await Drug.deleteMany({});
    return NextResponse.json(deleted);
  } catch (error) {
    return NextResponse.json({ errors: error.message });
  }
}

import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Customer from "@/models/Customer";

import customersArray from "@/customers.js";

export async function GET() {
  await dbConnect();

  try {
    const customers = await Customer.find({});
    return NextResponse.json(customers);
  } catch (error) {
    return NextResponse.json({ errors: error.message });
  }
}

export async function POST() {
  await dbConnect();

  try {
    const customers = await Customer.insertMany(customersArray);
    return NextResponse.json(customers);
  } catch (error) {
    return NextResponse.json({ errors: error.message });
  }
}

export async function DELETE() {
  await dbConnect();

  try {
    const deletedCustomers = await Customer.deleteMany({});
    return NextResponse.json(deletedCustomers);
  } catch (error) {
    return NextResponse.json({ errors: error.message });
  }
}

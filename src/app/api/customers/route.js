import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Customer from "@/models/Customer";

export async function GET() {
  await dbConnect();

  try {
    const customers = await Customer.find({});
    return NextResponse.json(customers);
  } catch (error) {
    return NextResponse.json({ errors: error.message });
  }
}

export async function PUT(req, res) {
  await dbConnect();

  const { id, medicalInfo, allergy, medicalCondition } = await req.json();

  try {
    const customer = await Customer.findById({ _id: id });

    if (medicalCondition) {
      const alreadyIncluded = customer.medicalConditions.includes(medicalInfo);

      if (!alreadyIncluded) {
        customer.medicalConditions.push(medicalInfo);
        const update = await Customer.updateOne(
          { _id: id },
          { medicalConditions: customer.medicalConditions }
        );
        return NextResponse.json(update);
      } else {
        return NextResponse.json({
          message: `${medicalInfo} already in database`,
        });
      }
    } else {
      const alreadyIncluded = customer.allergies.includes(medicalInfo);

      if (!alreadyIncluded) {
        customer.allergies.push(medicalInfo);
        const update = await Customer.updateOne(
          { _id: id },
          { allergies: customer.allergies }
        );
        return NextResponse.json(update);
      } else {
        return NextResponse.json({
          message: `${medicalInfo} already in database`,
        });
      }
    }
  } catch (error) {
    return NextResponse.json({ errors: error.message });
  }
}

import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Product from "@/models/Product";



export async function GET() {
  try {
    await connectDB();

    const products = await Product.find({
      isActive: true,
      stock: { $gte: 0 },
    })
      .select("name slug description price stock category images")
      .sort({ createdAt: -1 })
      .limit(24)
      .lean();

    return NextResponse.json({ products });
  } catch (error) {
    console.error("GET /api/products failed:", error);

    return NextResponse.json(
      { message: "ไม่สามารถโหลดสินค้าได้" },
      { status: 500 }
    );
  }
}

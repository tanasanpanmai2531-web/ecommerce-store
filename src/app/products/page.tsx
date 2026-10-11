import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";

type Product = {
  _id: string;
  name: string;
  slug: string;
  price: number;
  images: { url: string; publicId: string }[];
};

export default async function HomePage() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "http://localhost:3000";

  let products: Product[] = [];

  try {
    const response = await fetch(
      `${baseUrl}/api/products`,
      { cache: "no-store" }
    );

    if (response.ok) {
      const data = await response.json();
      products = data.products;
    }
  } catch (error) {
    console.error("Unable to load products:", error);
  }

  return (
    <>
      <Navbar />

      <main className="container py-5">
        <section className="p-4 p-md-5 mb-5 bg-light rounded-3">
          <h1 className="display-5 fw-bold">
            ร้านค้าออนไลน์ของเรา
          </h1>
          <p className="lead">
            ค้นพบสินค้า IoT และ Robotics ที่คุณต้องการ
          </p>
        </section>

        <h2 className="h3 mb-4">สินค้าแนะนำ</h2>

        {products.length === 0 ? (
          <p>ยังไม่มีสินค้า หรือไม่สามารถโหลดสินค้าได้</p>
        ) : (
          <div className="row g-4">
            {products.map((product) => (
              <div
                key={product._id}
                className="col-12 col-sm-6 col-lg-4 col-xl-3"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        )}
      </main>
    </>
  );
}

import Link from "next/link";

type ProductCardProps = {
  product: {
    name: string;
    slug: string;
    price: number;
    images: { url: string; publicId: string }[];
  };
};

export default function ProductCard({
  product,
}: ProductCardProps) {
  const imageUrl = product.images?.[0]?.url;

  return (
    <div className="card h-100 shadow-sm">
      {imageUrl && (
        <img
          src={imageUrl}
          className="card-img-top"
          alt={product.name}
          style={{ height: 220, objectFit: "contain" }}
        />
      )}

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.name}</h5>

        <p className="text-primary fw-bold fs-5">
          {product.price.toLocaleString("th-TH", {
            style: "currency",
            currency: "THB",
          })}
        </p>

        <Link
          href={`/products/${product.slug}`}
          className="btn btn-outline-primary mt-auto"
        >
          ดูรายละเอียด
        </Link>
      </div>
    </div>
  );
}

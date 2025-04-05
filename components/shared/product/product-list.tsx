import { Product } from "@/types";
import ProductCard from "./product-card";

const ProductPage = ({
  title,
  data,
  limit,
}: {
  data: Product[];
  title?: string;
  limit?: number;
}) => {
  const productsLimit = limit ? data.slice(0, limit) : data;
  return (
    <div>
      <h2 className="h2-bold mb-4">{title}</h2>

      {productsLimit.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data?.map((product: Product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div>No products found</div>
      )}
    </div>
  );
};
export default ProductPage;

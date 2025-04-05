import ProductPage from '@/components/shared/product/product-list';
import { getLatestProducts } from '@/lib/actions/product.actions';





export const metadata = {
  title: "Home",
}

async function HomePage() {
   const latestProducts = await getLatestProducts();
  
  
  return (
    <>
      <ProductPage
        title={"Latest Products"}
        data={latestProducts}

      />
    </>
  );
}

export default HomePage;

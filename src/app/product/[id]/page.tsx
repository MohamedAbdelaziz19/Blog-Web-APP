// app/product_details/[id]/page.tsx

import React from 'react';
import { products } from '@/public/data'; // Adjust path as needed
import FirstBlock from '@/src/app/product_details/components/FirstBlock';
import SecondBlock from '@/src/app/product_details/components/SecondBlock';
import ThredBlock from '@/src/app/product_details/components/ThredBlock';
import ContactBlock from '@/src/app/product_details/components/ContactBlock';
import BlockFive from '@/src/app/product_details/components/BlockFive';
import DecouvreMore from '@/src/app/product_details/components/DecouvreMore';

// Define the props for the component
interface ProductPageProps {
  product: typeof products[number] | null;
}

// Fetch product data
const fetchProduct = (id: number) => {
  return products.find((product) => product.id === id) || null;
};

// Server-side component that fetches data
const ProductPage: React.FC<{ params: { id: string } }> = async ({ params }) => {
  const id = parseInt(params.id, 10);
  const product = fetchProduct(id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <FirstBlock products={[product]} />
      <SecondBlock products={[product]} />
      <ThredBlock products={[product]} />
      <ContactBlock products={[product]} />
      <BlockFive products={[product]} />
      <DecouvreMore />
    </div>
  );
};

// Generate static paths for all products
// Generate static params for all products
export async function generateStaticParams() {
  // Get all product IDs to generate static paths
  const params = products.map((product) => ({
    id: product.id.toString(),
  }));

  return params; // Return just the array of params
}

export default ProductPage;

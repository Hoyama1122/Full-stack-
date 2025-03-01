import SalesCampaignBanner from "@/components/layout/SalesCampaignBanner";
import { getProductById } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import React from "react";

const ProductPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product.price) {
    return <div>Product not found</div>;
  }

  const originalPrice = (product.price || 0) * 5;

  return (
    <div className="bg-gray-50">
      <SalesCampaignBanner />
    </div>
  );
};

export default ProductPage;

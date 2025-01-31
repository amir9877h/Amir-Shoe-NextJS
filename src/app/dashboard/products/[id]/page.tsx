import EditForm from "@/components/Dashboard/EditForm";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import React from "react";
import { unstable_noStore as noStore } from "next/cache";

async function getData(productId: string) {
  const data = await prisma.product.findUnique({
    where: {
      id: productId,
    },
  });

  if (!data) {
    return notFound();
  }

  return data;
}

const ProductEditPage = async ({ params }: { params: { id: string } }) => {
  noStore();
  const { id } = await params;
  const data = await getData(id);
  return <EditForm data={data} isEditMode={true} />;
};

export default ProductEditPage;

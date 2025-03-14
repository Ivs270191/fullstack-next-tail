import {
  Container,
  PizzaImage,
  GroupVariants,
} from "../../../../components/shared";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";

export default async function ProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = await prisma.product.findFirst({
    where: { id: Number(id) },
    include: {
      ingredients: true,
    },
  });

  if (!product) {
    return notFound();
  }

  return (
    <Container className="flex flex-col my-10">
      <div className="flex flex-1">
        <PizzaImage imageUrl={product.imageUrl} size={30} />
        <div className="w-[490px] bg-[#f7f6f5] p-7">
          <p>{product.name} </p>
          {/* <p>{product.categoryId}</p> */}

          {product.ingredients.map((ingredient) => ingredient.name).join(", ")}

          <GroupVariants
            items={[
              { name: "20 см", value: "20" },
              { name: "30 см", value: "30" },
              { name: "40 см", value: "40", disabled: true },
            ]}
            value="30"
          />
        </div>
      </div>
    </Container>
  );
}

"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import React from "react";
import { useRouter } from "next/navigation";
// import { ProductWithRelations } from '@/@types/prisma';
// import { useCartStore } from '@/shared/store';
// import toast from 'react-hot-toast';
// import { ProductForm } from '../product-form';
import { Product } from "@prisma/client";
import { Title } from "../title";

interface Props {
  product: Product;
  className?: string;
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
  const router = useRouter();

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent
        className={cn(
          "p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden",
          className
        )}
      >
        <Title text={product.name}></Title>
      </DialogContent>
    </Dialog>
  );
};

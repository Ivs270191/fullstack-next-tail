"use client";

import {
  CheckoutPersonalForm,
  CheckoutSidebar,
  Container,
  Title,
} from "@/components/shared";
import { CheckoutAddressForm } from "@/components/shared/checkout-address-form";
import { CheckoutCart } from "@/components/shared/checkout-cart";

import { useCart } from "@/hooks";

import React from "react";

export default function CheckoutPage() {
  const [submitting, setSubmitting] = React.useState(false);
  const { totalAmount, updateItemQuantity, items, removeCartItem, loading } =
    useCart();

  const onClickCountButton = (
    id: number,
    quantity: number,
    type: "plus" | "minus"
  ) => {
    const newQuantity = type === "plus" ? quantity + 1 : quantity - 1;
    updateItemQuantity(id, newQuantity);
  };

  return (
    <Container className="mt-10">
      <Title
        text="Оформление заказа"
        className="font-extrabold mb-8 text-[36px]"
      />

      <div className="flex gap-10">
        {/* Левая часть */}
        <div className="flex flex-col gap-10 flex-1 mb-20">
          <CheckoutCart
            onClickCountButton={onClickCountButton}
            removeCartItem={removeCartItem}
            items={items}
            loading={loading}
          />

          <CheckoutPersonalForm
            className={loading ? "opacity-40 pointer-events-none" : ""}
          />

          <CheckoutAddressForm
            className={loading ? "opacity-40 pointer-events-none" : ""}
          />
        </div>

        {/* Правая часть */}
        <div className="w-[450px]">
          <CheckoutSidebar
            totalAmount={totalAmount}
            loading={loading || submitting}
          />
        </div>
      </div>
    </Container>
  );
}

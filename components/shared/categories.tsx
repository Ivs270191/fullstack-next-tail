"use client";

import { cn } from "@/lib/utils";
import { UseCategoryStore } from "@/store/category";
import React from "react";

interface Props {
  className?: string;
}

export const Categories: React.FC<Props> = ({ className }) => {
  const items = [
    { id: 0, name: "Пиццы" },
    { id: 1, name: "Комбо" },
    { id: 2, name: "Закуски" },
    { id: 3, name: "Коктейли" },
    { id: 4, name: "Кофе" },
    { id: 5, name: "Напитки" },
    { id: 6, name: "Дессерты" },
  ];
  const { activeId } = UseCategoryStore((state) => state);

  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}
    >
      {items.map(({ name, id }, index) => (
        <a
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5",
            activeId === id && "bg-white shadow-md shadow-gray-200 text-primary"
          )}
          href={`/#${name}`}
          key={index}
        >
          <button>{name}</button>
        </a>
      ))}
    </div>
  );
};

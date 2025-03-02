"use client";

import React from "react";
import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";
import { Input } from "../ui";
import { CheckboxFiltersGroup, RangeSlider } from "./";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div>
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            defaultValue={0}
          />
          <Input type="number" placeholder="1000" min={100} max={1000} />
        </div>
      </div>
      <RangeSlider min={0} max={1000} step={10} value={[0, 1000]}></RangeSlider>
      <CheckboxFiltersGroup
        title="Ингредиенты"
        className="mt-5"
        limit={6}
        defaultItems={[
          { text: "Tomats", value: "1" },
          { text: "Salad", value: "2" },
          { text: "Ketchup", value: "3" },
          { text: "Pepperoni", value: "4" },
          { text: "Cheese", value: "5" },
        ]}
        items={[
          { text: "Tomats", value: "1" },
          { text: "Salad", value: "2" },
          { text: "Ketchup", value: "3" },
          { text: "Pepperoni", value: "4" },
          { text: "Cheese", value: "5" },
          { text: "Corn", value: "6" },
          { text: "Green", value: "7" },
        ]}
      />
    </div>
  );
};

import {
  Container,
  Filters,
  ProductsGroupList,
  Title,
  TopBar,
} from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container>
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          {/*Filters*/}
          <div className="w-[250px]">
            <Filters />
          </div>
          {/*List*/}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {/* <ProductsGroupList */}
              <ProductsGroupList
                title="Пиццы"
                items={[
                  {
                    id: 2,
                    name: "Pepperoni",
                    imageUrl:
                      "https://assets.surlatable.com/m/15a89c2d9c6c1345/72_dpi_webp-REC-283110_Pizza.jpg",
                    price: 440,
                    items: [{ price: 220 }],
                  },
                  {
                    id: 3,
                    name: "Pepperoni",
                    imageUrl:
                      "https://assets.surlatable.com/m/15a89c2d9c6c1345/72_dpi_webp-REC-283110_Pizza.jpg",
                    price: 440,
                    items: [{ price: 220 }],
                  },
                  {
                    id: 4,
                    name: "Pepperoni",
                    imageUrl:
                      "https://assets.surlatable.com/m/15a89c2d9c6c1345/72_dpi_webp-REC-283110_Pizza.jpg",
                    price: 440,
                    items: [{ price: 220 }],
                  },
                  {
                    id: 5,
                    name: "Pepperoni",
                    imageUrl:
                      "https://assets.surlatable.com/m/15a89c2d9c6c1345/72_dpi_webp-REC-283110_Pizza.jpg",
                    price: 440,
                    items: [{ price: 220 }],
                  },
                  {
                    id: 6,
                    name: "Pepperoni",
                    imageUrl:
                      "https://assets.surlatable.com/m/15a89c2d9c6c1345/72_dpi_webp-REC-283110_Pizza.jpg",
                    price: 440,
                    items: [{ price: 220 }],
                  },
                  {
                    id: 7,
                    name: "Pepperoni",
                    imageUrl:
                      "https://assets.surlatable.com/m/15a89c2d9c6c1345/72_dpi_webp-REC-283110_Pizza.jpg",
                    price: 440,
                    items: [{ price: 220 }],
                  },
                ]}
                categoryId={0}
              />
              <ProductsGroupList
                title="Комбо"
                items={[
                  {
                    id: 8,
                    name: "Pepperoni",
                    imageUrl:
                      "https://assets.surlatable.com/m/15a89c2d9c6c1345/72_dpi_webp-REC-283110_Pizza.jpg",
                    price: 440,
                    items: [{ price: 220 }],
                  },
                  {
                    id: 9,
                    name: "Pepperoni",
                    imageUrl:
                      "https://assets.surlatable.com/m/15a89c2d9c6c1345/72_dpi_webp-REC-283110_Pizza.jpg",
                    price: 440,
                    items: [{ price: 220 }],
                  },
                  {
                    id: 11,
                    name: "Pepperoni",
                    imageUrl:
                      "https://assets.surlatable.com/m/15a89c2d9c6c1345/72_dpi_webp-REC-283110_Pizza.jpg",
                    price: 440,
                    items: [{ price: 220 }],
                  },
                  {
                    id: 12,
                    name: "Pepperoni",
                    imageUrl:
                      "https://assets.surlatable.com/m/15a89c2d9c6c1345/72_dpi_webp-REC-283110_Pizza.jpg",
                    price: 440,
                    items: [{ price: 220 }],
                  },
                  {
                    id: 14,
                    name: "Pepperoni",
                    imageUrl:
                      "https://assets.surlatable.com/m/15a89c2d9c6c1345/72_dpi_webp-REC-283110_Pizza.jpg",
                    price: 440,
                    items: [{ price: 220 }],
                  },
                  {
                    id: 16,
                    name: "Pepperoni",
                    imageUrl:
                      "https://assets.surlatable.com/m/15a89c2d9c6c1345/72_dpi_webp-REC-283110_Pizza.jpg",
                    price: 440,
                    items: [{ price: 220 }],
                  },
                ]}
                categoryId={1}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

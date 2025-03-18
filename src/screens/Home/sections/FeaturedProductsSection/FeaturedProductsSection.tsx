import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";

export const FeaturedProductsSection = (): JSX.Element => {
  // Product data for mapping
  const products = [
    {
      id: 1,
      image: "public/grupo-de-m-scara-20-1-11.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      originalPrice: "R$ 30,90",
      currentPrice: "R$ 28,90",
      installment: "ou 2x de R$ 49,95 sem juros",
      freeShipping: true,
    },
    {
      id: 2,
      image: "public/grupo-de-m-scara-20-1-11.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      originalPrice: "R$ 30,90",
      currentPrice: "R$ 28,90",
      installment: "ou 2x de R$ 49,95 sem juros",
      freeShipping: true,
    },
    {
      id: 3,
      image: "public/grupo-de-m-scara-20-1-11.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      originalPrice: "R$ 30,90",
      currentPrice: "R$ 28,90",
      installment: "ou 2x de R$ 49,95 sem juros",
      freeShipping: true,
    },
    {
      id: 4,
      image: "public/grupo-de-m-scara-20-1-11.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      originalPrice: "R$ 30,90",
      currentPrice: "R$ 28,90",
      installment: "ou 2x de R$ 49,95 sem juros",
      freeShipping: true,
    },
  ];

  // Category tabs data
  const categories = [
    { id: "celular", label: "CELULAR", active: true },
    { id: "acessorios", label: "ACESSÓRIOS", active: false },
    { id: "tablets", label: "TABLETS", active: false },
    { id: "notebooks", label: "NOTEBOOKS", active: false },
    { id: "tvs", label: "TVS", active: false },
    { id: "ver-todos", label: "VER TODOS", active: false },
  ];

  return (
    <section className="w-full max-w-[1364px] mx-auto py-8">
      <div className="w-full max-w-[1280px] mx-auto mb-6">
        <div className="flex items-center justify-center mb-4">
          <img
            className="w-[360px] h-px object-cover"
            alt="Line"
            src="public/line-27.svg"
          />
          <h2 className="mx-8 [font-family:'Poppins',Helvetica] font-bold text-[#3341b5] text-3xl">
            Produtos relacionados
          </h2>
          <img
            className="w-[360px] h-px object-cover"
            alt="Line"
            src="public/line-27.svg"
          />
        </div>

        <div className="flex justify-center mb-2">
          <span className="font-bold text-preto text-[15px] text-center [font-family:'Poppins',Helvetica]">
            Ver todos
          </span>
        </div>

        <Tabs defaultValue="celular" className="w-full">
          <TabsList className="w-full h-10 p-0 bg-transparent">
            {categories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className={`flex-1 h-10 rounded-none border border-[#bdbdbd] ${
                  category.active
                    ? "[font-family:'Poppins',Helvetica] font-bold text-[#3341b5]"
                    : "[font-family:'Poppins',Helvetica] font-normal text-[#3b3b3b]"
                } text-base`}
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      <div className="relative w-full">
        <div className="flex justify-center gap-[18px]">
          {products.map((product) => (
            <Card
              key={product.id}
              className="w-[304px] rounded-[10px] shadow-[0px_3px_19px_#00000038] border-none"
            >
              <CardContent className="p-3">
                <div className="pt-4 pb-0">
                  <img
                    className="w-full h-[228px] object-cover"
                    alt="Product image"
                    src={product.image}
                  />

                  <p className="mt-2 [font-family:'Poppins',Helvetica] font-light text-preto text-[15px]">
                    {product.description}
                  </p>

                  <div className="mt-6">
                    <p className="[font-family:'Poppins',Helvetica] font-normal text-[#808080] text-base line-through">
                      {product.originalPrice}
                    </p>
                    <p className="[font-family:'Poppins',Helvetica] font-bold text-preto text-xl">
                      {product.currentPrice}
                    </p>
                  </div>

                  <p className="mt-4 [font-family:'Poppins',Helvetica] font-normal text-preto text-xs">
                    {product.installment}
                  </p>

                  {product.freeShipping && (
                    <p className="mt-1 [font-family:'Poppins',Helvetica] font-normal text-[#3341b5] text-xs">
                      Frete grátis
                    </p>
                  )}

                  <Button className="w-full h-11 mt-4 bg-azul rounded [font-family:'Poppins',Helvetica] font-bold text-[#ffffff] text-sm">
                    COMPRAR
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex w-full items-center justify-between absolute top-1/2 -translate-y-1/2">
          <Button
            variant="outline"
            size="icon"
            className="w-8 h-8 rounded-2xl shadow-[0px_4px_4px_#00000040] border-none bg-white"
          >
            <img
              className="w-[7px] h-[13px]"
              alt="Previous"
              src="public/vector-2.svg"
            />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="w-8 h-8 rounded-2xl shadow-[0px_4px_4px_#00000040] border-none bg-white"
          >
            <img
              className="w-[7px] h-[13px] rotate-180"
              alt="Next"
              src="public/vector-2.svg"
            />
          </Button>
        </div>
      </div>
    </section>
  );
};

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const FeaturedProductsWrapperSection = (): JSX.Element => {
  // Product data that can be mapped over
  const products = [
    {
      id: 1,
      image: "public/grupo-de-m-scara-20-1-11.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      originalPrice: "R$ 30,90",
      currentPrice: "R$ 28,90",
      installments: "ou 2x de R$ 49,95 sem juros",
      freeShipping: true,
    },
    {
      id: 2,
      image: "public/grupo-de-m-scara-20-1-11.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      originalPrice: "R$ 30,90",
      currentPrice: "R$ 28,90",
      installments: "ou 2x de R$ 49,95 sem juros",
      freeShipping: true,
    },
    {
      id: 3,
      image: "public/grupo-de-m-scara-20-1-11.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      originalPrice: "R$ 30,90",
      currentPrice: "R$ 28,90",
      installments: "ou 2x de R$ 49,95 sem juros",
      freeShipping: true,
    },
    {
      id: 4,
      image: "public/grupo-de-m-scara-20-1-11.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      originalPrice: "R$ 30,90",
      currentPrice: "R$ 28,90",
      installments: "ou 2x de R$ 49,95 sem juros",
      freeShipping: true,
    },
  ];

  return (
    <section className="w-full max-w-[1364px] mx-auto my-8">
      <div className="flex flex-col items-center mb-6">
        <div className="flex items-center w-full max-w-[1140px] mb-4">
          <img
            className="flex-1 h-px object-cover"
            alt="Line"
            src="public/line-27.svg"
          />
          <h2 className="mx-8 font-['Poppins',Helvetica] font-bold text-azul text-3xl">
            Produtos relacionados
          </h2>
          <img
            className="flex-1 h-px object-cover"
            alt="Line"
            src="public/line-27.svg"
          />
        </div>
        <button className="font-['Poppins',Helvetica] font-bold text-preto text-[15px]">
          Ver todos
        </button>
      </div>

      <div className="relative">
        <div className="flex gap-[18px] justify-center">
          {products.map((product) => (
            <Card
              key={product.id}
              className="w-[304px] rounded-[10px] shadow-[0px_3px_19px_#00000038] bg-white"
            >
              <CardContent className="p-3">
                <div className="pt-5">
                  <div className="bg-white">
                    <img
                      className="w-full h-[228px] object-cover"
                      alt="Product image"
                      src={product.image}
                    />
                    <p className="mt-2 font-['Poppins',Helvetica] font-light text-preto text-[15px]">
                      {product.description}
                    </p>
                    <div className="mt-6">
                      <p className="font-normal text-[#808080] text-base line-through font-['Poppins',Helvetica]">
                        {product.originalPrice}
                      </p>
                      <p className="font-bold text-preto text-xl font-['Poppins',Helvetica]">
                        {product.currentPrice}
                      </p>
                    </div>
                  </div>

                  <p className="mt-6 font-['Poppins',Helvetica] font-normal text-preto text-xs">
                    {product.installments}
                  </p>

                  {product.freeShipping && (
                    <p className="mt-2 font-['Poppins',Helvetica] font-normal text-[#3341b5] text-xs">
                      Frete grátis
                    </p>
                  )}

                  <Button className="w-full mt-4 h-11 bg-azul rounded font-['Poppins',Helvetica] font-bold text-sm">
                    COMPRAR
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-between w-full absolute top-1/2 -translate-y-1/2">
          <Button
            variant="outline"
            size="icon"
            className="w-8 h-8 rounded-2xl bg-white shadow-[0px_4px_4px_#00000040] border-none"
          >
            <ChevronLeftIcon className="h-[13px] w-[7px]" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="w-8 h-8 rounded-2xl bg-white shadow-[0px_4px_4px_#00000040] border-none"
          >
            <ChevronRightIcon className="h-[13px] w-[7px]" />
          </Button>
        </div>
      </div>
    </section>
  );
};

import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../components/ui/carousel";

// Product data to map over
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

export const BrandNavigationSection = (): JSX.Element => {
  return (
    <section className="w-full max-w-[1364px] mx-auto py-12">
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

      <Carousel className="w-full">
        <CarouselContent className="-ml-4">
          {products.map((product) => (
            <CarouselItem key={product.id} className="pl-4 md:basis-1/4">
              <Card className="rounded-[10px] shadow-[0px_3px_19px_#00000038] border-none">
                <CardContent className="p-3">
                  <div className="pt-4 pb-2">
                    <div className="relative">
                      <img
                        className="w-full h-[228px] object-cover"
                        alt="Product image"
                        src={product.image}
                      />
                      <p className="mt-2 font-['Poppins',Helvetica] font-light text-preto text-[15px]">
                        {product.description}
                      </p>
                      <div className="mt-4">
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
                    <p className="font-['Poppins',Helvetica] font-normal text-[#3341b5] text-xs">
                      Frete grátis
                    </p>
                    <Button className="w-full mt-4 bg-azul rounded font-['Poppins',Helvetica] font-bold text-sm">
                      COMPRAR
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 bg-white rounded-2xl shadow-[0px_4px_4px_#00000040]" />
        <CarouselNext className="right-0 bg-white rounded-2xl shadow-[0px_4px_4px_#00000040]" />
      </Carousel>
    </section>
  );
};

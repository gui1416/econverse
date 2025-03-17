import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const CategorySelectionSection = (): JSX.Element => {
  // Define categories data for mapping
  const categories = [
    {
      id: 1,
      name: "Tecnologia",
      image: "public/image.png",
      isSelected: true,
    },
    {
      id: 2,
      name: "Supermercado",
      image: "public/supermercados-1.png",
      isSelected: false,
    },
    {
      id: 3,
      name: "Bebidas",
      image: "public/whiskey.png",
      isSelected: false,
    },
    {
      id: 4,
      name: "Ferramentas",
      image: "public/ferramentas-1.png",
      isSelected: false,
    },
    {
      id: 5,
      name: "Saúde",
      image: "public/cuidados-de-saude-1.png",
      isSelected: false,
    },
    {
      id: 6,
      name: "Esportes e Fitness",
      image: "public/corrida-1.png",
      isSelected: false,
    },
    {
      id: 7,
      name: "Moda",
      image: "public/moda-1.png",
      isSelected: false,
    },
  ];

  return (
    <section className="flex items-center gap-[42px] w-full py-6">
      {categories.map((category) => (
        <div
          key={category.id}
          className="flex flex-col items-center w-32 h-[171px]"
        >
          <Card
            className={`w-32 h-32 rounded-[10px] ${category.isSelected
                ? "bg-[#ffffff] shadow-[0px_2px_9px_#00000038]"
                : "bg-[#f4f4f4] shadow-[0px_4px_11px_#00000021]"
              }`}
          >
            <CardContent className="flex items-center justify-center h-full p-0">
              <img
                className="flex items-center justify-center w-[61px] h-[61px] object-cover"
                alt={category.name}
                src={category.image}
              />
            </CardContent>
          </Card>

          <div
            className={`mt-[22px] text-center text-sm [font-family:'Poppins',Helvetica] ${category.isSelected
                ? "font-semibold text-[#3019b2]"
                : "font-medium text-[#4d4d4d]"
              }`}
          >
            {category.name}
          </div>
        </div>
      ))}
    </section>
  );
};

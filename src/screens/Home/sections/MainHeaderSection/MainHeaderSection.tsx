import {
  CreditCardIcon,
  CrownIcon,
  HeartIcon,
  SearchIcon,
  ShieldCheckIcon,
  ShoppingCartIcon,
  TruckIcon,
  UserIcon,
} from "lucide-react";
import React from "react";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";

export const MainHeaderSection = (): JSX.Element => {
  // Data for top bar features
  const topBarFeatures = [
    {
      icon: <ShieldCheckIcon className="w-5 h-5" />,
      text: (
        <>
          <span className="font-medium text-[#9f9f9f]">Compra</span>
          <span className="font-semibold text-[#3019b2]"> 100% segura</span>
        </>
      ),
      width: "158px",
    },
    {
      icon: <TruckIcon className="w-5 h-5" />,
      text: (
        <>
          <span className="font-semibold text-[#3019b2]">Frete grátis</span>
          <span className="font-medium text-[#9f9f9f]"> acima de R$ 200</span>
        </>
      ),
      width: "205px",
    },
    {
      icon: <CreditCardIcon className="w-5 h-5" />,
      text: (
        <>
          <span className="font-semibold text-[#3019b2]">Parcele</span>
          <span className="font-medium text-[#9f9f9f]"> suas compras</span>
        </>
      ),
      width: "167px",
    },
  ];

  // Data for navigation categories
  const categories = [
    { name: "TODAS CATEGORIAS", active: false },
    { name: "SUPERMERCADO", active: false },
    { name: "LIVROS", active: false },
    { name: "MODA", active: false },
    { name: "LANÇAMENTOS", active: false, className: "text-cinza-mdio" },
    { name: "OFERTAS DO DIA", active: true, className: "text-[#3019b2]" },
  ];

  return (
    <header className="w-full h-36 bg-transparent">
      {/* Top bar */}
      <div className="w-full h-8 bg-white">
        <div className="flex items-center justify-center gap-[119px] h-full max-w-[1280px] mx-auto px-5">
          {topBarFeatures.map((feature, index) => (
            <div
              key={index}
              className="flex items-center"
              style={{ width: feature.width }}
            >
              {feature.icon}
              <div className="ml-[29px] [font-family:'Poppins',Helvetica] font-normal text-gray-1 text-xs text-center">
                {feature.text}
              </div>
            </div>
          ))}
        </div>
        <Separator className="w-full" />
      </div>

      {/* Main navigation bar */}
      <div className="w-full h-[72px] bg-white">
        <div className="flex items-center justify-between h-full max-w-[1280px] mx-auto px-5">
          {/* Logo */}
          <div className="w-[139px] h-[41px]">
            <div className="relative w-[139px] h-[41px]">
              <img
                className="w-[41px] h-[41px] absolute top-0 left-0"
                alt="Exclude"
                src="public/exclude-5.svg"
              />
              <img
                className="absolute w-[15px] h-[15px] top-3.5 left-[38px]"
                alt="Caminho"
                src="public/caminho-33.svg"
              />
              <img
                className="absolute w-[13px] h-[15px] top-3.5 left-[55px]"
                alt="Caminho"
                src="public/caminho-34.svg"
              />
              <img
                className="absolute w-[15px] h-3.5 top-[15px] left-[70px]"
                alt="Caminho"
                src="public/caminho-35.svg"
              />
              <img
                className="absolute w-[15px] h-[15px] top-3.5 left-[85px]"
                alt="Caminho"
                src="public/caminho-36.svg"
              />
              <img
                className="absolute w-2 h-3.5 top-3.5 left-[103px]"
                alt="Caminho"
                src="public/caminho-37.svg"
              />
              <img
                className="absolute w-3 h-[15px] top-3.5 left-[111px]"
                alt="Caminho"
                src="public/caminho-38.svg"
              />
              <img
                className="absolute w-[15px] h-[15px] top-3.5 left-[124px]"
                alt="Caminho"
                src="public/caminho-39-6.svg"
              />
            </div>
          </div>

          {/* SearchIcon bar */}
          <div className="relative w-[630px] h-12 bg-[#f6f5f2] rounded-[10px]">
            <Input
              className="h-12 bg-transparent border-none pl-4 [font-family:'Poppins',Helvetica] font-medium text-gray-1 text-sm"
              placeholder="O que você está buscando?"
            />
            <SearchIcon className="absolute w-7 h-7 top-2.5 right-3 text-gray-1" />
          </div>

          {/* UserIcon actions */}
          <div className="flex items-center gap-8">
            <img
              className="w-[24.4px] h-[24.4px]"
              alt="Group"
              src="public/group.png"
            />
            <HeartIcon className="w-8 h-8 text-gray-1" />
            <UserIcon className="w-8 h-8 text-gray-1" />
            <ShoppingCartIcon className="w-8 h-8 text-gray-1" />
          </div>
        </div>
        <Separator className="w-full" />
      </div>

      {/* Categories navigation */}
      <div className="w-full h-10 bg-white shadow-[0px_8px_16px_#3930131f]">
        <div className="flex items-center justify-center gap-[91px] h-full max-w-[1280px] mx-auto px-5">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`[font-family:'Poppins',Helvetica] font-semibold text-xs text-center ${category.className || "text-gray-1"}`}
            >
              {category.name}
            </div>
          ))}
          <div className="flex items-center">
            <CrownIcon className="w-5 h-5 text-gray-1" />
            <span className="ml-3 [font-family:'Poppins',Helvetica] font-semibold text-gray-1 text-xs">
              ASSINATURA
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

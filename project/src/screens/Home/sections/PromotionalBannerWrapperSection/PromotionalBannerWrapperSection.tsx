import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const PromotionalBannerWrapperSection = (): JSX.Element => {
  // Banner data for mapping
  const banners = [
    {
      id: 1,
      backgroundImage: "public/mask-group-2.png",
      title: "Parceiros",
      description: "Lorem ipsum dolor sit amet, consectetur",
      buttonText: "CONFIRA",
    },
    {
      id: 2,
      backgroundImage: "public/mask-group-3.png",
      title: "Parceiros",
      description: "Lorem ipsum dolor sit amet, consectetur",
      buttonText: "CONFIRA",
    },
  ];

  return (
    <section className="flex flex-row items-center gap-[13px] w-full">
      {banners.map((banner) => (
        <Card
          key={banner.id}
          className="relative w-[634px] h-[350px] rounded-[20px] overflow-hidden"
          style={{
            backgroundImage: `url(${banner.backgroundImage})`,
            backgroundSize: "100% 100%",
          }}
        >
          <div className="absolute w-full h-[261px] bottom-0 rounded-[0px_0px_20px_20px] [background:linear-gradient(180deg,rgba(0,0,0,0)_0%,rgb(0,0,0)_85.04%)] opacity-80" />

          <CardContent className="relative z-10 pt-[114px] pl-11 pr-11 pb-0 h-full flex flex-col">
            <h2 className="w-[216px] [font-family:'Poppins',Helvetica] font-bold text-white text-[40px] tracking-[0] leading-[normal]">
              {banner.title}
            </h2>

            <p className="w-[200px] mt-7 [font-family:'Poppins',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal]">
              {banner.description}
            </p>

            <Button className="w-[145px] h-12 mt-10 bg-amarelo rounded-md [font-family:'Poppins',Helvetica] font-bold text-roxo text-base text-center tracking-[1.28px] leading-[normal]">
              {banner.buttonText}
            </Button>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};

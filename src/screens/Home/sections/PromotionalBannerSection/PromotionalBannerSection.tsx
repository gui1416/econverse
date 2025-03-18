import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

// Banner data for mapping
const bannerData = [
  {
    id: 1,
    backgroundImage: "public/mask-group.png",
    title: "Parceiros",
    description: "Lorem ipsum dolor sit amet, consectetur",
    buttonText: "CONFIRA",
  },
  {
    id: 2,
    backgroundImage: "public/mask-group-1.png",
    title: "Parceiros",
    description: "Lorem ipsum dolor sit amet, consectetur",
    buttonText: "CONFIRA",
  },
];

export const PromotionalBannerSection = (): JSX.Element => {
  return (
    <section className="flex flex-row items-center gap-[13px] w-full">
      {bannerData.map((banner) => (
        <Card
          key={banner.id}
          className="relative w-[638px] h-[350px] rounded-[20px] overflow-hidden"
        >
          <CardContent className="p-0">
            <div
              className="relative w-[634px] h-[350px] bg-cover bg-center"
              style={{ backgroundImage: `url(${banner.backgroundImage})` }}
            >
              {/* Gradient overlay */}
              <div className="absolute w-full h-[261px] bottom-0 rounded-[0px_0px_20px_20px] [background:linear-gradient(180deg,rgba(0,0,0,0)_0%,rgb(0,0,0)_85.04%)] opacity-80" />

              {/* Title */}
              <div className="absolute w-[216px] top-[114px] left-11 font-['Poppins',Helvetica] font-bold text-white text-[40px] tracking-[0] leading-[normal]">
                {banner.title}
              </div>

              {/* Description */}
              <div className="absolute w-[200px] top-[182px] left-11 font-['Poppins',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal]">
                {banner.description}
              </div>

              {/* Button */}
              <div className="absolute left-11 bottom-[44px]">
                <Button className="w-[145px] h-12 bg-amarelo rounded-md hover:bg-amarelo/90">
                  <span className="font-['Poppins',Helvetica] font-bold text-roxo text-base text-center tracking-[1.28px]">
                    {banner.buttonText}
                  </span>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
};

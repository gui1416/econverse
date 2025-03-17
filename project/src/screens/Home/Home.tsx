import React from "react";
import { BrandNavigationSection } from "./sections/BrandNavigationSection";
import { CategorySelectionSection } from "./sections/CategorySelectionSection";
import { FeaturedProductsSection } from "./sections/FeaturedProductsSection";
import { FeaturedProductsWrapperSection } from "./sections/FeaturedProductsWrapperSection";
import { MainHeaderSection } from "./sections/MainHeaderSection";
import { NewsletterSubscriptionSection } from "./sections/NewsletterSubscriptionSection";
import { PromotionalBannerSection } from "./sections/PromotionalBannerSection";
import { PromotionalBannerWrapperSection } from "./sections/PromotionalBannerWrapperSection";

export const Home = (): JSX.Element => {
  // Brand data for the brand navigation circles
  const brandLogos = Array(5).fill({
    logo: {
      exclude: "public/exclude.svg",
      paths: [
        {
          src: "public/caminho-33.svg",
          className: "w-[13px] h-[13px] top-0 left-0",
        },
        {
          src: "public/caminho-34.svg",
          className: "w-[11px] h-3 top-0 left-[15px]",
        },
        {
          src: "public/caminho-35.svg",
          className: "w-[13px] h-3 top-0 left-[27px]",
        },
        {
          src: "public/caminho-36-1.svg",
          className: "w-3 h-[13px] top-0 left-10",
        },
        {
          src: "public/caminho-37.svg",
          className: "w-[7px] h-3 top-0 left-[54px]",
        },
        {
          src: "public/caminho-38.svg",
          className: "w-2.5 h-[13px] top-0 left-[62px]",
        },
        {
          src: "public/caminho-39.svg",
          className: "w-3 h-[13px] top-0 left-[73px]",
        },
      ],
    },
  });

  // Category data
  const categories = [
    { name: "Oriental" },
    { name: "Padarias" },
    { name: "Mercados" },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full max-w-[1440px] relative">
        {/* Main Header Section */}
        <MainHeaderSection />

        {/* Category Selection Section */}
        <CategorySelectionSection />

        {/* Featured Products Section */}
        <FeaturedProductsSection />

        {/* Promotional Banner Section */}
        <PromotionalBannerSection />

        {/* Featured Products Wrapper Section */}
        <FeaturedProductsWrapperSection />

        {/* Promotional Banner Wrapper Section */}
        <PromotionalBannerWrapperSection />

        {/* Brand Navigation Section */}
        <BrandNavigationSection />

        {/* Newsletter Subscription Section */}
        <NewsletterSubscriptionSection />
      </div>
    </div>
  );
};

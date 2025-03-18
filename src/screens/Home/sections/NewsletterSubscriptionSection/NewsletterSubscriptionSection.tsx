import { FacebookIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Checkbox } from "../../../../components/ui/checkbox";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";

export const NewsletterSubscriptionSection = (): JSX.Element => {
  // Footer links data
  const footerSections = [
    {
      title: "Institucional",
      links: ["Sobre Nós", "Movimento", "Trabalhe conosco"],
    },
    {
      title: "Ajuda",
      links: ["Suporte", "Fale Conosco", "Perguntas Frequentes"],
    },
    {
      title: "Termos",
      links: [
        "Termos e Condições",
        "Política de Privacidade",
        "Troca e Devolução",
      ],
    },
  ];

  return (
    <section className="flex flex-col items-center w-full">
      {/* Newsletter Subscription */}
      <div className="w-full py-10 bg-cores-principaisvioleta">
        <div className="container flex flex-col items-start justify-between gap-8 md:flex-row">
          {/* Left side - Text */}
          <div className="flex flex-col items-start gap-2">
            <h2 className="font-['Outfit',Helvetica] font-semibold text-white text-[32px] leading-[38.4px]">
              Inscreva-se na nossa newsletter
            </h2>
            <p className="font-['Poppins',Helvetica] font-light text-white text-sm leading-[18px] max-w-[515px]">
              Assine a nossa newsletter e receba as novidades e conteúdos
              exclusivos da Econverse.
            </p>
          </div>

          {/* Right side - Form */}
          <div className="flex flex-col items-start gap-2">
            <div className="flex flex-col items-start gap-6 sm:flex-row">
              <div className="flex flex-col items-start gap-2">
                <Input
                  className="w-[233px] px-6 py-3 bg-white rounded-lg border border-solid border-[#e6e6e6] font-['Poppins',Helvetica] text-[#676767] text-sm"
                  placeholder="Digite seu nome"
                />
              </div>

              <div className="flex flex-col items-start gap-2">
                <Input
                  className="w-[233px] px-6 py-3 bg-white rounded-lg border border-solid border-[#e6e6e6] font-['Poppins',Helvetica] text-[#676767] text-sm"
                  placeholder="Digite seu e-mail"
                />
              </div>

              <Button className="px-10 py-[15px] bg-[#f7ca11] rounded-lg font-['Poppins',Helvetica] font-semibold text-[#161615] text-sm leading-3">
                INSCREVER
              </Button>
            </div>

            <div className="flex items-center gap-1">
              <Checkbox
                id="terms"
                className="w-[15px] h-[15px] bg-neutral-100 rounded-[1px] border border-solid border-[#8c342b]"
              />
              <label
                htmlFor="terms"
                className="font-['Poppins',Helvetica] font-normal text-white text-sm leading-[21px]"
              >
                Aceito os termos e condições
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-[#f4f4f4]">
        <div className="container flex flex-col md:flex-row items-start justify-between gap-[90px] py-[42px]">
          {/* Company Info */}
          <div className="flex flex-col items-start gap-[27px]">
            <div className="flex flex-col items-start gap-[18px]">
              {/* Logo */}
              <div className="relative w-[164px] h-12">
                <div className="relative h-12">
                  <img
                    className="absolute w-[49px] h-12 top-0 left-0"
                    alt="Caminho"
                    src="public/caminho-30.svg"
                  />
                  <img
                    className="absolute w-[17px] h-[17px] top-4 left-2"
                    alt="Caminho"
                    src="public/caminho-39-6.svg"
                  />
                  <img
                    className="absolute w-4 h-[17px] top-4 left-[27px]"
                    alt="Caminho"
                    src="public/caminho-32.svg"
                  />
                  <img
                    className="absolute w-[18px] h-[17px] top-4 left-[45px]"
                    alt="Caminho"
                    src="public/caminho-33.svg"
                  />
                  <img
                    className="absolute w-4 h-[17px] top-4 left-[65px]"
                    alt="Caminho"
                    src="public/caminho-34.svg"
                  />
                  <img
                    className="absolute w-[18px] h-4 top-[17px] left-[83px]"
                    alt="Caminho"
                    src="public/caminho-35.svg"
                  />
                  <img
                    className="absolute w-[17px] h-[17px] top-4 left-[101px]"
                    alt="Caminho"
                    src="public/caminho-36.svg"
                  />
                  <img
                    className="absolute w-[9px] h-[17px] top-[17px] left-[121px]"
                    alt="Caminho"
                    src="public/caminho-37.svg"
                  />
                  <img
                    className="absolute w-3.5 h-[17px] top-4 left-[131px]"
                    alt="Caminho"
                    src="public/caminho-38.svg"
                  />
                  <img
                    className="absolute w-[17px] h-[17px] top-4 left-[147px]"
                    alt="Caminho"
                    src="public/caminho-39-6.svg"
                  />
                  <div className="absolute w-[164px] h-12 top-0 left-0">
                    <div className="absolute w-[62px] h-12 top-0 left-0">
                      <img
                        className="absolute w-[49px] h-12 top-0 left-0"
                        alt="Group"
                        src="public/group-1.png"
                      />
                      <img
                        className="absolute w-[18px] h-[17px] top-4 left-[45px]"
                        alt="Caminho"
                        src="public/caminho-33.svg"
                      />
                    </div>
                    <img
                      className="absolute w-4 h-[17px] top-4 left-[65px]"
                      alt="Caminho"
                      src="public/caminho-34.svg"
                    />
                    <img
                      className="absolute w-[18px] h-4 top-[17px] left-[83px]"
                      alt="Caminho"
                      src="public/caminho-35.svg"
                    />
                    <img
                      className="absolute w-[17px] h-[17px] top-4 left-[101px]"
                      alt="Caminho"
                      src="public/caminho-36.svg"
                    />
                    <img
                      className="absolute w-[9px] h-[17px] top-[17px] left-[121px]"
                      alt="Caminho"
                      src="public/caminho-37.svg"
                    />
                    <img
                      className="absolute w-3.5 h-[17px] top-4 left-[131px]"
                      alt="Caminho"
                      src="public/caminho-38.svg"
                    />
                    <img
                      className="absolute w-[17px] h-[17px] top-4 left-[147px]"
                      alt="Caminho"
                      src="public/caminho-39-6.svg"
                    />
                  </div>
                </div>
              </div>

              <p className="text-sm font-['Poppins',Helvetica] font-light text-preto max-w-[354px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-[26px]">
              <InstagramIcon className="w-6 h-6" />
              <FacebookIcon className="w-6 h-6" />
              <LinkedinIcon className="w-6 h-6" />
            </div>
          </div>

          <Separator orientation="vertical" className="h-[198px]" />

          {/* Footer Links */}
          <div className="flex flex-wrap gap-[100px]">
            {footerSections.map((section, index) => (
              <div key={index} className="flex flex-col items-start gap-5">
                <h3 className="font-['Poppins',Helvetica] font-bold text-[#222222b5] text-base leading-4">
                  {section.title}
                </h3>
                <div className="flex flex-col items-start gap-4">
                  {section.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href="#"
                      className={`font-${section.title === "Institucional" ? "'Work_Sans'" : "'Poppins'"}, Helvetica font-normal text-[#222222b5] text-sm leading-4`}
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </footer>

      {/* Copyright */}
      <div className="w-full py-3 bg-white">
        <div className="container text-center">
          <p className="text-[13px] font-['Poppins',Helvetica] font-light text-preto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </section>
  );
};

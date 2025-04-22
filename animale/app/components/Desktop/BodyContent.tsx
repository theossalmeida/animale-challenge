import React from "react";
import TextCard from "../ui/TextCard";
import ImageCard from "../ui/ImageCard";

const BodyContent: React.FC = () => {
  return (
    <div className="flex flex-col gap-0">

      {/* Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <ImageCard src="/imgs/body_1.png" />
        <TextCard
          title="GOLDEN FRIDAY"
          subtitle="Joias selecionadas com descontos especiais"
          linkText="SHOP NOW"
          linkHref="#"
          align="left"
          subtitleWidth="w-full md:w-[30%]"
        />
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <TextCard
          title="GO MODERN"
          subtitle="Nada óbvios, os shapes são contemporâneos com recortes estratégicos e estampas abstratas."
          linkText="SHOP NOW"
          linkHref="#"
          align="right"
          subtitleWidth="w-full md:w-[40%]"
        />
        <ImageCard src="/imgs/body_2.png" />
      </div>

      {/* Row 3 */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <ImageCard src="/imgs/body_3.png" />
        <TextCard
          title="CORES DA CIDADE"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et"
          linkText="SHOP NOW"
          linkHref="#"
          align="left"
          subtitleWidth="w-full md:w-[40%]"
        />
      </div>

      {/* Row 4 */}
      <div className="relative w-full flex justify-center items-center aspect-[5/2]">
        <ImageCard src="/imgs/body_4.png" className="absolute inset-0 z-0" />
        <div className="absolute inset-0 bg-black opacity-40 z-10" />
        <div className="relative z-10 text-white p-8 max-w-xl text-center">
          <h2 className="text-2xl font-bold">INSIDE ANIMALE</h2>
          <p className="mt-2 text-sm">Fique por dentro do Universo Animale com apenas um clique.</p>
          <a href="#" className="underline mt-4 inline-block text-sm hover:opacity-80">
            SHOP NOW
          </a>
        </div>
      </div>

      {/* Row 5 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <div className="flex flex-col">
          <ImageCard src="/imgs/body_5.png" />
          <TextCard
            title="LUNAR"
            subtitle="De Sevilla, capital do flamenco, o vestuário típico da dança mais celebrada da Espanha inspira as novas peças da coleção."
            linkText="SHOP NOW"
            linkHref="#"
            bg="white"
            textColor="black"
          />
        </div>
        <div className="flex flex-col">
          <ImageCard src="/imgs/body_6.png" />
          <TextCard
            title="FLUTUA"
            subtitle="A natureza dos célebres jardins espanhóis dá vida às estampas florais"
            linkText="SHOP NOW"
            linkHref="#"
            bg="white"
            textColor="black"
          />
        </div>
        <div className="flex flex-col">
          <ImageCard src="/imgs/body_7.png" />
          <TextCard
            title="FLASH LIGHTS"
            subtitle="O último editorial também se inspira em Barcelona, cidade iluminada pelo sol. Conheça as cores que são aposta da coleção."
            linkText="SHOP NOW"
            linkHref="#"
            bg="white"
            textColor="black"
          />
        </div>
      </div>
    </div>
  );
};

export default BodyContent;

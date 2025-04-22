import { useState, useEffect, useState as useStateAlias } from 'react'
import Carousel from '../ui/Carousel'
import ProductCard from '../ui/ProductCardMobile'
import TitleMobile from '../ui/TitleMobile'
import ImageBannerMobile from '../ui/ImageBannerMobile'

const MobileBodyContent = () => {
  const [carousel1Index, setCarousel1Index] = useState(0)
  const [carousel6Index, setCarousel6Index] = useState(0)
  const [produtos, setProdutos] = useStateAlias<any[]>([])

  useEffect(() => {
    fetch('/dados/produtos.json')
      .then((res) => res.json())
      .then((data) => setProdutos(data))
  }, [])

  const destaques = produtos.filter((p) => p.productClusters?.[328] === 'colecao').slice(0, 2)
  const maisVendidos = produtos.filter((p) => p.productClusters?.[219] === 'Bestsellers').slice(0, 2)

  const getImagemPrincipal = (produto: any) => produto.items?.[0]?.images?.[0]?.imageUrl || ''
  const getPreco = (produto: any) => produto.items?.[0]?.sellers?.[0]?.commertialOffer?.Price || 0

  const formatParcelado = (valor: number, parcelas: number) => {
    const parcela = (valor / parcelas).toFixed(2).replace('.', ',')
    return `${parcelas}x de R$${parcela}`
  }

  /* images that will appear on first carousel */
  const imgsSection1: string[] = ["/imgs/body_1.png", "/imgs/body_4.png"];

  /* images that will appear on last carousel */
  const imgsSection6: string[] = ["/imgs/body_2.png", "/imgs/body_3.png", "/imgs/body_5.png", "/imgs/body_4.png"];


  return (
    <div className="flex flex-col w-full">
      {/* Section 1 */}
      <div className="w-full h-[calc(100vh-10vh-48px)]">
        <Carousel
          images={imgsSection1}
          index={carousel1Index}
          setIndex={setCarousel1Index}
          indicatorsPosition="bottom-right"
          overlayContent={(i) => (
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6">
              <h2 className="text-xl w-[60%] pb-3">LANÇAMENTO{i}</h2>
              <p className="text-xl text-[56px] leading-[62px] font-didot w-[60%]">LOREM IPSUM{i}</p>
              <button className="mt-3 text-white border w-[60%] p-2 py-3 font-light text-xs">SHOP NOW</button>
            </div>
          )}
          indicatorStyle="white"
          aspect="h-full"
        />
      </div>

      {/* Section 2 */}
      <div className="w-full py-6 text-center">
        <TitleMobile text="BESTSELLERS" />
        <div className="grid grid-cols-2 gap-2 mt-4 px-4">
          {destaques.map((produto, idx) => (
            <ProductCard
              key={produto.productId}
              name={produto.productName}
              price={formatParcelado(getPreco(produto), 4)}
              image={getImagemPrincipal(produto)}
            />
          ))}
        </div>
      </div>

      {/* Section 3 and 4 */}
      <div className='space-y-5 p-2'>
        <ImageBannerMobile image="/imgs/body_6.png" text="VESTIDOS" />
        <ImageBannerMobile image="/imgs/body_7.png" text="SEDA" />
      </div>

      {/* Section 5 */}
      <div className="w-full py-6 text-center">
        <TitleMobile text="BESTSELLERS" />
        <div className="grid grid-cols-2 gap-2 mt-4 px-4">
          {maisVendidos.map((produto, idx) => (
            <ProductCard
              key={produto.productId}
              name={produto.productName}
              price={formatParcelado(getPreco(produto), 8)}
              image={getImagemPrincipal(produto)}
            />
          ))}
        </div>
      </div>

      {/* Section 6 */}
      <div className="w-full py-6 text-center">
        <TitleMobile text="INSTASHOP" />
        <div className="relative">
          <Carousel
            images={imgsSection6}
            index={carousel6Index}
            setIndex={setCarousel6Index}
            itemsPerPage={2}
            aspect="aspect-[2]"
          />
          <div className="flex justify-center mt-2 gap-2">
            {Array.from({ length: Math.ceil(imgsSection6.length / 2) }).map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-sm ${carousel6Index === i ? 'bg-black' : 'border border-black bg-white'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileBodyContent

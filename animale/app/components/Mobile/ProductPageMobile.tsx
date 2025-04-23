'use client'
import Image from 'next/image'
import { FC, useState } from 'react'

import ImageCard from '../ui/ImageCard'
import TitleMobile from '../ui/TitleMobile'

import { useCart } from '../context/CartContext'

interface ProductPageMobileProps {
  product: any
}

const ProductPageMobile: FC<ProductPageMobileProps> = ({ product }) => {
  const [showComposition, setShowComposition] = useState(false)
  const [showSizeDetails, setShowSizeDetails] = useState(false)

  const images = product.items.flatMap((item: any) => item.images.map((i: any) => i.imageUrl))
  const price = product.items[0].sellers[0].commertialOffer.Price
  const installment = (price / 10).toFixed(2).replace('.', ',')
  const sizes = product.skuSpecifications.find((s: any) => s.field.name === 'Tamanho')?.values.map((v: any) => v.name)

  const { dispatch } = useCart()
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState('')

  const addToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Selecione cor e tamanho antes de adicionar ao carrinho.')
      return
    }
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.productId,
        name: product.productName,
        price: product.items[0].sellers[0].commertialOffer.Price,
        quantity: 1,
        image: product.items[0].images[0].imageUrl,
      },
    })
  }

  return (
    <main className="pt-[100px] pb-[120px] relative">
      <div className="w-full overflow-x-auto whitespace-nowrap snap-x snap-mandatory">
        {images.map((url: string, i: number) => (
          <div key={i} className="inline-block w-full snap-center">
            <ImageCard src={url} />
          </div>
        ))}
      </div>

      <div className="p-5">
        <p className="text-xs text-gray-500">Ref.   {product.productReference}</p>
        <h1 className="text-lg font-semibold">{product.productName}</h1>
        <p className="mt-2 text-lg font-bold">R$ {price.toFixed(2).replace('.', ',')} <a className='font-light'>ou 10x de R$ {installment}</a></p>
      </div>

      <div className="grid grid-cols-2 gap-0">
        <select 
          className="border border-black text-sm font-bold"
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}>
          <option>🟥 EST</option>
          <option value="preto">⬛ Preto</option>
          <option value="branco">⬜ Branco</option>
        </select>
        <select 
          className="border border-black text-sm font-bold p-4"
          value={selectedSize}
          onChange={(e) => setSelectedSize(e.target.value)}>
          <option>TAMANHO</option>
          {sizes?.map((size: string) => <option key={size}>{size}</option>)}
        </select>
      </div>

      <button 
        className="w-[80%] m-auto my-5 p-5 flex justify-center items-center bg-black text-white text-m font-bold"
        onClick={addToCart}>
          COMPRAR
      </button>

      <div className="border-t">
        <div className="flex justify-between text-m font-light border-b py-4 px-5 cursor-pointer" onClick={() => setShowComposition(v => !v)}>
            <span>Composição</span><span>{showComposition ? '˄' : '˅'}</span>
        </div>
        {showComposition && <div className="text-sm text-gray-600 py-4 px-5">{product.Composição[0]}</div>}

        <div className="flex justify-between text-m font-light border-b py-4 px-5 cursor-pointer" onClick={() => setShowSizeDetails(v => !v)}>
            <span>Medidas desta peça</span><span>{showSizeDetails ? '˄' : '˅'}</span>
        </div>
        {showSizeDetails && (
            <div className="text-sm text-gray-600 space-x-2 py-4 px-5">
            Tamanhos disponíveis: 
            {sizes?.map((size: string) => (
                <span key={size}> {size},</span>
            ))}
            </div>
        )}

        <div className="flex justify-between text-m font-light border-b py-4 px-5">
            <span>Como cuidar desse produto</span>
            <Image src="/icons/icon_share.svg" alt="Saiba mais sobre cuidados com o produto" width={12} height={12} className="w-[12px] h-[12px]" />
        </div>

        <div className="flex justify-between text-m font-light border-b py-4 px-5">
            <span>Dúvidas? (5 avaliações) ★★★☆☆</span>
            <span className="text-black">&gt;</span>
        </div>
        </div>


      <div className="mt-8 bg-black text-white px-4 py-7 text-center">LOOKS SIMILARES:</div>
      <div className="grid grid-cols-2">
        {[1, 2].map(i => (
          <div key={i} className="flex flex-col">
            <ImageCard src="/imgs/body_5.png" className='aspect-[4/5]'/>
            <p className="text-xs mt-1 px-6">Nome Produto</p>
            <p className="font-bold text-xs px-6 pt-2">R$ 999,99</p>
            <p className="text-xs px-6">ou 10x de R$ 99,99</p>
          </div>
        ))}
      </div>

      <div className="mt-20">
        <TitleMobile text='AVALIAÇÕES DO PRODUTO' />
        <div className="flex flex-col cols-1 mt-3 items-center">
            <p>Tem esse produto?</p>
            <p className='font-bold'>Seja o primeiro a avalia-lo!</p>
            <button className='bg-black text-white py-5 px-20 m-auto mt-4 font-bold'>
                ENVIAR AVALIAÇÃO
            </button>
        </div>
      </div>

      <div className="mt-12">
      <TitleMobile text='DÚVIDAS DAS CLIENTES' />
        <div className="flex flex-col cols-1 mt-3 items-center">
            <p>Você tem alguma dúvida sobre este produto?</p>
            <textarea
              maxLength={200}
              placeholder="DIGITE SUA DÚVIDA (máximo 200 caracteres)"
              className="w-[90%] border border-black p-2 mt-2 text-sm h-28 resize-y"
            />
            <button className='bg-black text-white py-5 px-20 m-auto mt-4 font-bold'>
                ENVIAR AVALIAÇÃO
            </button>
        </div>
      </div>

      <div className="fixed  bottom-0 left-0 w-full bg-white border-t h-[7%]">
        <div className="grid grid-cols-8 h-full">
          <select 
            className="border border-black text-sm p-2 col-span-2"
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}>
            <option className='bg-white'>TAM</option>
            {sizes?.map((size: string) => <option key={size}>{size}</option>)}
          </select>
          <select 
            className="border border-black text-sm p-2 col-span-2 bg-white"
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}>
            <option className='bg-white'>🟥 EST</option>
            <option value="preto">⬛ Preto</option>
            <option value="branco">⬜ Branco</option>
          </select>
          <button 
            className="w-full bg-black text-white text-sm font-bold py-3 col-span-4"
            onClick={addToCart}>
              COMPRAR
          </button>
        </div>
      </div>
    </main>
  )
}

export default ProductPageMobile

// components/Mobile/ColecaoPageMobile.tsx
'use client'
import { useState } from 'react'
import { SlidersHorizontal } from 'lucide-react'
import ProductColecaoMobile from '../ui/ProductColecaoMobile'

interface Product {
  id: string
  name: string
  price: number
  image: string
  categories: string[]
}

interface ColecaoPageMobileProps {
  productsData: Product[]
}

export default function ColecaoPageMobile({ productsData }: ColecaoPageMobileProps) {
  const [filter, setFilter] = useState<string>('')
  const [openFilter, setOpenFilter] = useState<boolean>(false)
  const [openOrder, setOpenOrder] = useState<boolean>(false)
  const [order, setOrder] = useState<string>('')

  const handleFilter = (type: string) => setFilter(type)

  const filteredProducts = productsData
  .filter((p) =>
    p.name && p.price !== undefined && p.image && // Garante que todas as propriedades existam
    (filter === ''
      ? true
      : filter === 'CAMISA'
      ? p.categories.some((cat) => cat.includes('/COLEÇÃO/CAMISA/'))
      : p.categories.some((cat) => cat.includes('/COLEÇÃO/VESTIDO/')))
  )
  .sort((a, b) => {
    if (order === 'maior') return b.price - a.price
    if (order === 'menor') return a.price - b.price
    return 0
  })

  const formatParcelado = (valor: number, parcelas: number) => {
    const parcela = (valor / parcelas).toFixed(2).replace('.', ',')
    return `${parcelas}x de R$${parcela}`
  }

  return (
    <>
      <div>
        <div className="flex justify-between items-center py-4 border-y border-black text-center">
          <div className="flex cursor-pointer items-center gap-2 justify-center w-full" onClick={() => setOpenFilter(openFilter ? false : true)}>
            <img src='/icons/icon_filtro.svg' className='w-[16px]'/>
            <span className="text-sm font-semibold">FILTRAR</span>
          </div>
          <div className="w-px h-5 bg-black" />
          <div className="flex flex-col items-center cursor-pointer w-full" onClick={() => setOpenOrder(openOrder ? false : true)}>
            <span className="text-sm font-semibold">ORDENAR POR</span>
          </div>
        </div>

          {openFilter && (
            <div className="py-2">
              <select
                className="border border-black p-2 w-full"
                onChange={(e) => handleFilter(e.target.value)}
                value={filter}
              >
                <option value="">TODOS</option>
                <option value="CAMISA">CAMISA</option>
                <option value="VESTIDO">VESTIDO</option>
              </select>
            </div>
          )}

          {openOrder && (
            <div className="py-2">
              <select
                className="border border-black p-2 w-full"
                onChange={(e) => setOrder(e.target.value)}
                value={order}
              >
                <option value="">PADRÃO</option>
                <option value="maior">Preço: Maior → Menor</option>
                <option value="menor">Preço: Menor → Maior</option>
              </select>
            </div>
          )}
        <div className="grid grid-cols-2 gap-3 p-2">
          {filteredProducts.map((product) => (
            <ProductColecaoMobile
                id={product.id}
                name={product.name}
                priceParcelado={formatParcelado(product.price, 4)}
                price={product.price.toFixed(2).replace('.', ',')}
                image={product.image}
            />
          ))}
        </div>
      </div>
    </>
  )
}

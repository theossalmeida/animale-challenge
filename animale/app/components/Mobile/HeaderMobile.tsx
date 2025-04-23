// components/Mobile/HeaderMobile.tsx
'use client'
import { FC } from 'react'
import Image from 'next/image'
import { useCart } from '../context/CartContext'

interface Props {
  onMenuClick: () => void
  onCartClick: () => void
}

const HeaderMobile: FC<Props> = ({ onMenuClick, onCartClick }) => {
  const { state } = useCart()
  const itemCount = state.items.reduce((sum, i) => sum + i.quantity, 0)

  return (
    <header className="fixed z-50 top-0 left-0 w-full bg-white overflow-hidden flex items-center justify-between w-full h-[10%] bg-white p-4">
      {/* menu toggle */}
      <button aria-label="Open menu" className="flex flex-col items-center justify-center h-full" onClick={onMenuClick}>
        <Image src="/icons/icon_menu.svg" alt="Menu" width={24} height={24} className="w-[24px] h-[24px] items-end" />
        <span className="mt-[2px] text-[10px] leading-none uppercase font-bold">MENU</span>
      </button>

      {/* logo */}
      <a href='/' className="absolute left-1/2 transform -translate-x-1/2">
        <Image src="/icons/icon_animale.svg" alt="Logo" width={94} height={94} className="w-[94px] h-[94px]" />
      </a>


      {/* search + cart */}
      <div className="flex space-x-4 items-center">
        <Image src="/icons/icon_busca.svg" alt="Buscar" width={24} height={24} className="w-[24px] h-[24px]" />
        <div className="relative cursor-pointer" onClick={onCartClick}>
          <Image src="/icons/icon_sacola.svg" alt="Sacola" width={24} height={24} className="w-[24px] h-[24px]" />
          {itemCount > 0 && (
            <div className="absolute -bottom-1 -right-1 bg-black text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
              {itemCount}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default HeaderMobile
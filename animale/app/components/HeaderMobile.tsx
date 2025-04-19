import { FC } from 'react'
import Image from 'next/image'


export const HeaderMobile: FC = () => (
  <header className="fixed top-0 left-0 w-full bg-white z-50 overflow-hidden flex items-center justify-between w-full h-10% bg-white p-4">
    {/* menu toggle */}
    <button aria-label="Open menu" className="flex flex-col items-center justify-center h-full">
      <Image
        src="/icons/icon_menu.svg"
        alt="Menu"
        width={24}
        height={24}
        className="w-[24px] h-[24px] items-end"
      />
      <span
        className={`mt-[2px] text-[10px] leading-none uppercase font-bold`}
      >
        MENU
      </span>
    </button>

    {/* logo/text */}
    <h1 className="text-[20px] font-light leading-none">
      ANIMALE
    </h1>

    {/* search + cart */}
    <div className="flex space-x-4">
      <Image
        src="/icons/icon_busca.svg"
        alt="Buscar"
        width={24}
        height={24}
        className="w-[24px] h-[24px]"
      />
      <Image
        src="/icons/icon_sacola.svg"
        alt="Sacola"
        width={24}
        height={24}
        className="w-[24px] h-[24px]"
      />
    </div>
  </header>
)

export default HeaderMobile

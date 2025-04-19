import { useState, useEffect, JSX } from 'react'
import Image from 'next/image'

type NavItem =
  | { label: string; href: string }
  | { icon: JSX.Element; href: string }

const NAV_ITEMS: NavItem[] = [
  { label: 'NOVIDADES', href: '/' },
  { label: 'COLEÇÃO', href: '/colecao' },
  { label: 'JOIAS', href: '/joias' },
  { label: 'SALE', href: '/sale' },
  {
    icon: <Image src="/icons/icon_inside.svg" alt="INSIDE" width={60} height={55} />,
    href: '/inside',
  }
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`
        fixed top-0 left-0 w-full bg-white z-50 overflow-hidden
        transition-[height] duration-300 ease-in-out
        ${scrolled ? 'h-[92px]' : 'h-[140px]'}
      `}
    >
      <div className="relative h-full">
        {/* Header when not scrolled */}
        <div
          className={`
            absolute inset-0
            transition-transform duration-300 ease-in-out
            ${scrolled ? '-translate-y-full' : 'translate-y-0'}
          `}
        >
          <div className="flex flex-col h-full">

            {/* Logo on top center | 1st header row */}
            <div className="flex items-end justify-center h-1/2">
              <h1 className="text-[34px] leading-none">ANIMALE</h1>
            </div>

            {/* 2nd header row */}
            <div className="flex items-center justify-between h-1/2 px-[45px]">

              {/* Icons on top left */}
              <div className="text-black flex space-x-4">
                <img
                  src="/icons/icon_lojas.svg"
                  width={20}
                  height={20}
                  alt="Lojas"
                  className="w-[20px] h-[20px]"
                />
                <img
                  src="/icons/icon_telefone.svg"
                  width={20}
                  height={20}
                  alt="Contato"
                  className="w-[20px] h-[20px]"
                />
              </div>

              {/* Navbar on center */}
              <nav className="flex items-center space-x-6">
                {NAV_ITEMS.map((item, i) => (
                  <a key={i} href={item.href} className="font-medium hover:underline">
                    {'label' in item ? item.label : item.icon}
                  </a>
                ))}
              </nav>

              {/* Icons on top right */}
              <div className="flex space-x-4">
                <img
                  src="/icons/icon_conta.svg"
                  width={20}
                  height={20}
                  alt="Minha Conta"
                  className="w-[20px] h-[20px]"
                />
                <img
                  src="/icons/icon_sacola.svg"
                  width={20}
                  height={20}
                  alt="Carrinho"
                  className="w-[20px] h-[20px]"
                />
                <img
                  src="/icons/icon_busca.svg"
                  width={20}
                  height={20}
                  alt="Buscar"
                  className="w-[20px] h-[20px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Header when scrolled */}
        <div
          className={`
            absolute inset-0
            transition-transform duration-300 ease-in-out
            ${scrolled ? 'translate-y-0' : 'translate-y-[140px]'}
          `}
        >
          <div className="flex items-center justify-between h-full px-[174px]">
            {/* Icons on left */}
            <nav className="flex items-center space-x-8">
              <img
                src="/icons/icon_lojas.svg"
                width={20}
                height={20}
                alt="Lojas"
                className="w-[20px] h-[20px]"
              />
              <img
                src="/icons/icon_telefone.svg"
                width={20}
                height={20}
                alt="Contato"
                className="w-[20px] h-[20px]"
              />

              {/* LOGO */}
              <div className="flex items-end justify-center h-1/2">
                <h1 className="text-[34px] leading-none">ANIMALE</h1>
              </div>

              {/* Navbar */}
              {NAV_ITEMS.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="font-futura font-light hover:underline"
                >
                  {'label' in item ? item.label : item.icon}
                </a>
              ))}
            </nav>

            {/* icons on right */}
            <div className="flex space-x-4">
              <img
                src="/icons/icon_conta.svg"
                width={20}
                height={20}
                alt="Minha conta"
                className="w-[20px] h-[20px]"
              />
              <img
                src="/icons/icon_sacola.svg"
                width={20}
                height={20}
                alt="Carrinho"
                className="w-[20px] h-[20px]"
              />
              <img
                src="/icons/icon_busca.svg"
                width={20}
                height={20}
                alt="Buscar"
                className="w-[20px] h-[20px]"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

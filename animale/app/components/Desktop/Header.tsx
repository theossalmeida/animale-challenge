import { useState, useEffect, JSX } from 'react'
import Image from 'next/image'
import SubMenu from '../ui/SubMenu'


type NavItem =
  | { label: string; href: string }
  | { icon: JSX.Element; href: string }

const NAV_ITEMS: NavItem[] = [
  { label: 'NOVIDADES', href: '/' },
  { label: 'COLEÇÃO', href: '/colecao' },
  { label: 'JOIAS', href: '/joias' },
  { label: 'SALE', href: '/sale' },
  {
    label: 'INSIDE',
    icon: <Image src="/icons/icon_inside.svg" alt="INSIDE" width={60} height={55} />,
    href: '/inside',
  }
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [menuData, setMenuData] = useState<any>({})

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
  
    fetch('/dados/submenu.json')
      .then((res) => res.json())
      .then((data) => setMenuData(data))
  
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
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
            {/* Logo */}
            <div className="flex items-end justify-center h-1/2">
              <a href='/'>
                <img
                  src="/icons/icon_animale.svg"
                  width={180}
                  height={180}
                  alt="Lojas"
                  className="items-end cursor-pointer max-w-[120px] md:max-w-[180px]"
                />
              </a>
            </div>

            {/* Top bar */}
            <div className="flex flex-wrap items-center justify-between flex-1 px-4 md:px-[45px]">
              <div className="text-black flex space-x-4">
                <a href='/lojas'>
                  <img src="/icons/icon_lojas.svg" alt="Lojas" className="w-5 h-5 cursor-pointer" />
                </a>
                <a href='/contatos'>
                  <img src="/icons/icon_telefone.svg" alt="Contato" className="w-5 h-5 cursor-pointer" />
                </a>
              </div>
              <nav className="flex flex-wrap items-center space-x-3 md:space-x-6 text-[10px] md:text-[12px] h-[100%]">
                {NAV_ITEMS.map((item, i) => (
                  <a 
                    key={i}
                    href={item.href}
                    className={`flex font-futura [font-family:'Futura_Lt_BT'] items-center h-full ${'label' in item && item.label === activeCategory ? 'font-bold border-b border-black' : ''}`}
                    onMouseEnter={() => setActiveCategory('label' in item ? item.label : '')}
                  >
                    {'icon' in item ? item.icon : item.label}
                  </a>
                ))}
              </nav>
              <div className="flex space-x-4 mt-2 md:mt-0">
                <a href='/minha-conta'><img src="/icons/icon_conta.svg" alt="Minha Conta" className="w-5 h-5 cursor-pointer" /></a>
                <a href='/minha-conta'><img src="/icons/icon_sacola.svg" alt="Carrinho" className="w-5 h-5 cursor-pointer" /></a>
                <a href='/minha-conta'><img src="/icons/icon_busca.svg" alt="Buscar" className="w-5 h-5 cursor-pointer" /></a>
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
          <div className="flex flex-col md:flex-row items-center justify-between h-full px-4 md:px-[174px]">
            <nav className="flex items-center space-x-4 md:space-x-8 justify-center h-[100%]">
              <div className="flex items-center justify-center h-1/2">
                <img
                  src="/icons/icon_animale.svg"
                  width={150}
                  height={150}
                  alt="Lojas"
                  className="items-end"
                />
              </div>
              {NAV_ITEMS.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className={`flex font-futura font-light text-xs md:text-sm h-full items-center ${'label' in item && item.label === activeCategory ? 'font-bold border-b border-black' : ''}`}
                  onMouseEnter={() => setActiveCategory('label' in item ? item.label : '')}
                >
                  {'icon' in item ? item.icon : item.label}
                </a>
              ))}
            </nav>
            <div className="flex justify-center mt-2 md:mt-0 space-x-4">
              <img src="/icons/icon_conta.svg" alt="Minha conta" className="w-5 h-5" />
              <img src="/icons/icon_sacola.svg" alt="Carrinho" className="w-5 h-5" />
              <img src="/icons/icon_busca.svg" alt="Buscar" className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </header>
    {!activeCategory ? null : (
      <SubMenu 
        data={menuData[activeCategory]}
        isOpen={true}
        onMouseLeave={() => setActiveCategory(null)}
        isScrolled={scrolled}
      />
    )}
    </>
  )
}

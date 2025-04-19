import { useState, useEffect } from 'react'
import Image from 'next/image'

interface Option {
  icon: string
  label: string
  href: string
}

const OPTIONS: Option[] = [
  { icon: '/icons/icon_devolucao.svg', label: '| DEVOLUÇÃO', href: '/devolucao' },
  { icon: '/icons/icon_sacola.svg', label: '| STATUS DO PEDIDO', href: '/status-pedido' },
  { icon: '/icons/icon_faq.svg', label: '| PERGUNTAS FREQUENTES', href: '/faq' },
  { icon: '/icons/icon_chat.svg', label: '| CHAT', href: '/chat' },
  { icon: '/icons/icon_wpp.svg', label: '| WHATSAPP', href: '/whatsapp' },
  { icon: '/icons/icon_vendOnline.svg', label: '| VENDEDOR ONLINE', href: '/vendedor-online' },
]

export default function FloatingMenu() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Calculate top offset below header
  const topPx = (scrolled ? 92 : 140) + 10
  const buttonSize = 40 // 24px icon + 8px vertical padding * 2

  return (
    <>
      {/* Toggle button fixed on the left */}
      <button
        onClick={() => setOpen(o => !o)}
        className="fixed right-0 z-50 bg-white border border-gray-200 p-2 rounded-r-lg shadow-md index-1"
        style={{ top: `${topPx}px` }}
        aria-label="Abrir opções"
      >
        <Image
          src="/icons/icon_floating.svg"
          width={24}
          height={24}
          alt="Opções"
        />
      </button>

      {/* Options panel, fixed below the button */}
      {open && (
        <div
          className="fixed right-0 z-40 bg-white border border-gray-200 shadow-md rounded-tr-lg rounded-br-lg w-56"
          style={{ top: `${topPx + buttonSize + 10}px` }}
        >
          {OPTIONS.map(({ icon, label, href }) => (
            <a
              key={href}
              href={href}
              className="flex items-center px-4 py-2 hover:bg-gray-100"
            >
              <Image
                src={icon}
                width={20}
                height={20}
                alt={label}
                className="mr-3"
              />
              <span className="text-sm font-light">{label}</span>
            </a>
          ))}
        </div>
      )}
    </>
  )
}

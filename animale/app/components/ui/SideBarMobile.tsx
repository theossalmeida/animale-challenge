'use client'
import { Dispatch, SetStateAction, useState } from 'react'
import Image from 'next/image'

const CATEGORIES = {
  'ROUPAS': {
    'NOVIDADES': [],
    'COLEÇÃO': ['VESTIDOS', 'MACACÕES', 'CALÇAS', 'BLUSAS', 'VER TUDO'],
    'BOLSAS': [],
    'CALÇADOS': [],
    'ACESSÓRIOS': ['ANEL', 'COLAR', 'BRINCO', 'PULSEIRA', 'VER TUDO'],
    'INTIMATES': ['INTIMATES', 'INTIMATES2', 'VER TUDO'],
    'SALE': ['ROUPAS', 'JOIAS', 'ACESSÓRIOS', 'VER TUDO']
  },
  'APOLONIAS': {
    'APOLONIAS': []
  },
  'JOIAS': {
    'JOIAS': []
  },
  'IMPRENSA': {
    'EDITORIAIS': ['EDITORIAIS 1'],
    'LOOBOOK': ['LOOBOOK 1'],
    'CAMPANHA': ['CAMPANHA 1'],
    'DESFILE': ['DESFILE 1']
  },
  'INSTITUCIONAL': {
    'LOJAS': ['VER LOJAS'],
    'CONTATO': ['FALE CONOSCO', 'FAQ']
  }
}

interface MobileSidebarProps {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

export default function MobileSidebar({ open, setOpen }: MobileSidebarProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  if (!open) return null

  const allEntries = Object.entries(CATEGORIES).flatMap(([macro, subcats]) =>
    Object.entries(subcats).map(([label, children], idx, arr) => ({
      macro,
      label,
      children,
      isLast: idx === arr.length - 1
    }))
  )

  const total = allEntries.length

  return (
    <>
      {/* backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-70 z-50"
        onClick={() => setOpen(false)}
      />

      {/* sidebar */}
      <div className="fixed top-0 left-0 h-full w-[calc(100%-60px)] bg-white z-50 shadow-lg">
        <div className="flex flex-col h-full">

          {/* topo */}
          <div className="flex items-center justify-between p-4 font-medium">
            <span className="text-xs font-bold uppercase">Login</span>
            <div className="flex gap-4 items-center">
              <Image src="/icons/icon_wpp.svg" alt="Whatsapp" width={20} height={20} />
              <Image src="/icons/icon_estrela.svg" alt="Favoritos" width={30} height={30} />
              <button
                onClick={() => setOpen(false)}
                className="absolute right-0 top-0 translate-x-full p-4 bg-white"
              >
                <Image src="/icons/icon_close.svg" alt="Fechar" width={24} height={24} />
              </button>
            </div>
          </div>

          {/* busca + menu */}
          <div className="flex-1 flex flex-col min-h-0">

            {/* busca */}
            <div className="p-4 shrink-0">
              <div className="flex items-center border border-black px-2 py-1">
                <input
                  type="text"
                  placeholder="BUSCAR..."
                  className="bg-transparent outline-none text-m ml-2 w-full font-bold"
                />
                <Image src="/icons/icon_busca.svg" alt="Buscar" width={16} height={16} />
              </div>
            </div>

            {/* linhas */}
            <div className="flex-1 overflow-y-auto">
              {allEntries.map(({ label, children, isLast }, index) => (
                <div
                  key={label}
                  className={`${isLast ? 'border-b border-gray-300' : ''} flex flex-col`}
                  style={{ minHeight: `calc(100% / ${total})` }}
                >
                  <button
                    onClick={() => setActiveCategory(activeCategory === label ? null : label)}
                    className="w-full px-4 py-3 uppercase text-xs font-bold flex justify-between items-center"
                  >
                    <span>{label}</span>
                    {children.length > 0 && <span className="text-base font-normal">+</span>}
                  </button>

                  {activeCategory === label && children.length > 0 && (
                    <ul className="pl-6 py-2 bg-white border-t border-gray-200">
                      {children.map((item) => (
                        <li key={item}>
                          <a href={`${activeCategory == 'COLEÇÃO' && item == 'VER TUDO' ? '/colecao' : ''}`} className="block py-2 text-xs text-gray-600">{item}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

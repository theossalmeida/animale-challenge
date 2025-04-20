import Link from 'next/link'
import { useMemo } from 'react'


export interface SubMenuProps {
  data: Record<string, string[]>
  isOpen: boolean
  topOffset?: number
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  isScrolled?: boolean
}

const MAX_ITEMS_PER_COLUMN = 6
const ALWAYS_LAST = 'VER TUDO >'

export default function SubMenu({
  data,
  isOpen,
  topOffset = 140,
  onMouseEnter,
  onMouseLeave,
  isScrolled}: SubMenuProps) {
  if (!isOpen || !data) return null

    if (isScrolled) {
      topOffset = 92
    }

  // Build columns with up to MAX_ITEMS_PER_COLUMN-1
  const groups = useMemo(() => {
    return Object.entries(data).map(([key, items]) => {
      const filtered = items.filter(item => item !== ALWAYS_LAST)
      const columns: string[][] = []
      let current: string[] = []
      let current_item: string = ''
      for (let i = 0; i < filtered.length; i++) {
        current_item = items[i].toUpperCase()
        current.push(current_item)
        if (current.length === MAX_ITEMS_PER_COLUMN || current_item == ALWAYS_LAST) {
          columns.push([...current])
          current = []
        }
        else if (i+1 === filtered.length) {
          columns.push([...current, ALWAYS_LAST])
          current = []
        }
      }
      return { key, columns }
    })
  }, [data])

  return (
    <div
      className="fixed left-0 w-full bg-gray-100 h-100 z-40 py-8 shadow-md justify-between"
      style={{ top: `${topOffset}px` }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="items-top max-w-screen-xl mx-auto flex space-x-[200px] items-start justify-center">
        {groups.map(({ key, columns }) => (
          <div key={key} className="">
            <h3 className="px-4 items-start text-sm font-bold uppercase mb-4">{key}</h3>
            <div className="flex">
              {columns.map((col, ci) => (
                <ul
                  className={`${ci > 0 && columns[columns.length-1] != col && col[col.length-1] == ALWAYS_LAST ? ' p-4 border-r border-gray-300' : ''}`}
                  key={ci}
                >
                  {col.map(label => (
                    <li key={ci} className='text-sm'>
                      <Link legacyBehavior href='#'>
                        <a className="hover:underline p-4 whitespace-nowrap">{label}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

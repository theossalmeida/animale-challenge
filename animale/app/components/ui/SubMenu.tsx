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
  isScrolled,
}: SubMenuProps) {
  if (!isOpen || !data) return null

  if (isScrolled) {
    topOffset = 92
  }

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
        } else if (i + 1 === filtered.length) {
          columns.push([...current, ALWAYS_LAST])
          current = []
        }
      }
      return { key, columns }
    })
  }, [data])

  return (
    <div
      className="fixed left-0 w-full bg-gray-100 z-40 py-8 shadow-md"
      style={{ top: `${topOffset}px` }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="max-w-screen-xl mx-auto px-4 md:px-12 flex flex-col md:flex-row gap-10 md:gap-[200px] items-start justify-center">
        {groups.map(({ key, columns }) => (
          <div key={key} className="w-full md:w-auto">
            <h3 className="text-sm font-bold uppercase mb-4">{key}</h3>
            <div className="flex flex-col md:flex-row gap-4">
              {columns.map((col, ci) => (
                <ul
                  className={`space-y-3 ${
                    ci > 0 && columns[columns.length - 1] !== col && col[col.length - 1] === ALWAYS_LAST
                      ? 'md:border-r md:border-gray-300 md:pr-4'
                      : ''
                  }`}
                  key={ci}
                >
                  {col.map(label => (
                    <li key={label} className="text-sm">
                      <Link legacyBehavior href="#">
                        <a className="hover:underline block whitespace-nowrap px-2 md:px-6 py-1">{label}</a>
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
import Link from 'next/link'
import { useMemo } from 'react'


export interface SubMenuProps {
  data: Record<string, string[]>
  isOpen: boolean
  topOffset?: number
}

const MAX_ITEMS_PER_COLUMN = 6
const ALWAYS_LAST = 'ver tudo >'

export default function SubMenu({ data, isOpen, topOffset = 140 }: SubMenuProps) {
  if (!isOpen || !data) return null

  // Build columns with up to MAX_ITEMS_PER_COLUMN-1 + 'ver tudo >'
  const groups = useMemo(() => {
    return Object.entries(data).map(([key, items]) => {
      const filtered = items.filter(item => item !== ALWAYS_LAST)
      const columns: string[][] = []
      for (let i = 0; i < filtered.length; i += MAX_ITEMS_PER_COLUMN - 1) {
        const chunk = filtered.slice(i, i + (MAX_ITEMS_PER_COLUMN - 1))
        columns.push([...chunk, ALWAYS_LAST])
      }
      return { key, columns }
    })
  }, [data])

  return (
    <div
      className="fixed left-0 w-full bg-gray-100 z-40 py-8 shadow-md justify-between"
      style={{ top: `${topOffset}px` }}
    >
      <div className="items-top max-w-screen-xl mx-auto px-8 flex space-x-[200px] items-start justify-center">
        {groups.map(({ key, columns }) => (
          <div key={key} className="">
            <h3 className="items-start text-sm font-bold uppercase mb-4">{key}</h3>
            <div className="flex">
              {columns.map((col, ci) => (
                <ul
                  key={ci}
                  className={`${ci > 0 ? 'border-l border-gray-300 pl-4' : ''} space-y-2 text-sm`}
                >
                  {col.map(label => (
                    <li key={label}>
                      <Link legacyBehavior href="#">
                        <a className="hover:underline">{label}</a>
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

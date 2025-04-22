import Image from 'next/image'

interface CarouselProps {
  images: string[]
  index: number
  setIndex: (i: number) => void
  indicatorsPosition?: 'bottom-right' | 'bottom-center'
  overlayContent?: (index: number) => React.ReactNode
  indicatorStyle?: 'white' | 'black'
  itemsPerPage?: number
  aspect?: string
}

const Carousel: React.FC<CarouselProps> = ({
  images,
  index,
  setIndex,
  indicatorsPosition,
  overlayContent,
  indicatorStyle = 'white',
  itemsPerPage = 1,
  aspect = 'aspect-[3/4]',
}) => {
  const indicatorColor = {
    white: ['bg-white', 'bg-white/40'],
    black: ['bg-black', 'bg-black/10'],
  }[indicatorStyle]

  const pageCount = Math.ceil(images.length / itemsPerPage)
  const pages = Array.from({ length: pageCount }, (_, i) =>
    images.slice(i * itemsPerPage, (i + 1) * itemsPerPage)
  )

  return (
    <div className={`relative w-full ${aspect} overflow-hidden`}>
      <div
        className="flex w-full h-full"
        style={{
          transform: `translateX(-${index * 100}%)`,
          transition: 'transform 0.3s ease-in-out',
        }}
      >
        {pages.map((group, i) => (
          <div key={i} className={`min-w-full h-full flex gap-2 ${itemsPerPage > 1 ? 'px-1' : ''}`}>
            {group.map((src, j) => (
              <div key={j} className="w-full h-full relative">
                <Image src={src} alt={`slide-${i * itemsPerPage + j}`} fill className="object-cover" />
                {overlayContent && overlayContent(i * itemsPerPage + j)}
              </div>
            ))}
          </div>
        ))}
      </div>

      <button
        onClick={() => setIndex((index - 1 + pageCount) % pageCount)}
        className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 text-2xl ${itemsPerPage > 1 ? 'bg-white text-black' : 'text-white m-2'} p-1 opacity-80 font-bold`}
      >
        {'<'}
      </button>
      <button
        onClick={() => setIndex((index + 1) % pageCount)}
        className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 text-2xl ${itemsPerPage > 1 ? 'bg-white text-black' : 'text-white m-2'} p-1 opacity-80 font-bold`}
      >
        {'>'}
      </button>

      {indicatorsPosition && 
      <div
        className={`absolute ${
        indicatorsPosition === 'bottom-right'
          ? 'bottom-4 right-4'
          : 'bottom-4 left-1/2 -translate-x-1/2'
        } flex gap-2`}
      >
        {pages.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-sm ${
              index === i ? indicatorColor[0] : indicatorColor[1]
            }`}
          />
        ))}
      </div>
    }
    </div>
  )
}

export default Carousel

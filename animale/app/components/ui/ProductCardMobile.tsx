import Image from 'next/image'
import Link from 'next/link'

interface ProductCardProps {
  id: string
  name: string
  price: string
  image: string
}

const ProductCardMobile: React.FC<ProductCardProps> = ({ id, name, price, image }) => {
  return (
    <div className="flex flex-col items-center text-s text-nowrap">
      <Image src={image} alt={name} width={150} height={200} className="object-cover w-full" />
      <span className="mt-1 truncate overflow-hidden text-ellipsis whitespace-nowrap w-full text-center font-bold">
        {name.toUpperCase()}
      </span>
      <span className="font-bold mt-1">{price}</span>
      <Link href={`/produto/${id}`} className="mt-2 p-3 px-4 border border-black font-bold text-xs text-center">
        SHOP NOW
      </Link>
    </div>
  )
}

export default ProductCardMobile

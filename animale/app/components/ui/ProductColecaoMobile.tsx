import ImageCard from './ImageCard'

interface ProductColecaoProps {
  id: string
  name: string
  price: string
  image: string
  priceParcelado: string
}

const ProductColecaoMobile: React.FC<ProductColecaoProps> = ({ id, name, price, image, priceParcelado }) => {
  return (
    <a href={`/produto/${id}`}>
    <div key={id} className="relative">
      <img src={image} alt={name} />
      <img
        src="/icons/icon_estrela.svg"
        alt="Favoritar"
        className="absolute top-2 right-2 w-5 h-5"
      />
      <p className="text-sm mt-2">{name}</p>
      <p className="text-sm font-bold">R$ {price}</p>
      <p className="text-sm font-light">ou {priceParcelado}</p>
    </div>
    </a>
  )
}

export default ProductColecaoMobile

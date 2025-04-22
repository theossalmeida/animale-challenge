import Image from 'next/image'

interface ImageBannerMobileProps {
  image: string
  text: string
}

const ImageBannerMobile: React.FC<ImageBannerMobileProps> = ({ image, text }) => (
  <div className="relative w-full aspect-[3/2]">
    <Image src={image} alt={text} fill className="object-cover" />
    <div className="absolute bottom-0 w-full bg-black bg-opacity-80 text-white text-center p-2 text-m font-bold h-[20%] flex justify-center items-center">
      {text.toUpperCase()}
    </div>
  </div>
)

export default ImageBannerMobile

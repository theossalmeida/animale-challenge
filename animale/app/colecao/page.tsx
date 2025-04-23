'use client'
import { useEffect, useState } from 'react'

import HeaderMobile from '../components/Mobile/HeaderMobile'
import ColecaoPageMobile from '../components/Mobile/ColecaoPageMobile'
import FooterMobile from '../components/Mobile/FooterMobile'

import SideBarMobile from '../components/ui/SideBarMobile'
import CartOverlayMobile from '../components/ui/CartOverlayMobile'
import BannerMobile from '../components/ui/BannerMobile'


interface Product {
    id: string
    name: string
    price: number
    image: string
    categories: string[]
  }

export default function ColecaoPage() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [cartOpen, setCartOpen] = useState(false)

    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        fetch('/dados/produtos.json')
          .then((res) => res.json())
          .then((data) => {
            const formatted = data
              .filter((p: any) => p["Coleção Atual"]?.includes("SIM"))
              .map((p: any) => ({
                id: p.productId,
                name: p.productName,
                categories: p.categories || [],
                image: p.items?.[0]?.images?.[0]?.imageUrl || '',
                price: p.items?.[0]?.sellers?.[0]?.commertialOffer?.Price ?? 0,
              }))
              .filter((p: any) => p['price'] > 0)
            setProducts(formatted)
          })
      }, [])
  

    return (
        <>
        <HeaderMobile onMenuClick={() => setMenuOpen(true)} onCartClick={() => setCartOpen(true)} />
        <SideBarMobile open={menuOpen} setOpen={setMenuOpen} />
        <div className="pt-[110px] bg-[#E6E6E6]">
          <BannerMobile />
        </div>
        <ColecaoPageMobile productsData={products}/>
        <FooterMobile />
        <CartOverlayMobile open={cartOpen} onClose={() => setCartOpen(false)} />
        </>
    )
}

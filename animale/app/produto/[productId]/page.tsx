'use client'
import { useEffect, useState } from 'react'
import ProductPageMobile from '../../components/Mobile/ProductPageMobile'
import HeaderMobile from '../../components/Mobile/HeaderMobile'
import FooterMobile from '../../components/Mobile/FooterMobile'
import SideBarMobile from '../../components/ui/SideBarMobile'
import CartOverlayMobile from '../../components/ui/CartOverlayMobile'
import { useParams } from 'next/navigation'

export default function ProductDetailPage() {
  const { productId } = useParams()
  const [product, setProduct] = useState<any>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)

  useEffect(() => {
    fetch('/dados/produtos.json')
      .then(res => res.json())
      .then(data => setProduct(data.find((p: any) => p.productId === productId)))
  }, [productId])

  if (!product) return <div className="pt-[100px] px-4">Carregando...</div>

  return (
    <>
      <HeaderMobile onMenuClick={() => setMenuOpen(true)} onCartClick={() => setCartOpen(true)} />
      <SideBarMobile open={menuOpen} setOpen={setMenuOpen} />
      <ProductPageMobile product={product} />
      <FooterMobile />
      <CartOverlayMobile open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  )
}

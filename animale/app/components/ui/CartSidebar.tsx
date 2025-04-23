// components/ui/CartSidebar.tsx
'use client'
import { FC, useMemo } from 'react'
import { useCart } from '../context/CartContext'
import Image from 'next/image'

const CartSidebar: FC<{ open: boolean; setOpen: (v: boolean) => void }> = ({ open, setOpen }) => {
  const { state, dispatch } = useCart()

  const total = useMemo(() => state.items.reduce((sum, item) => sum + item.price * item.quantity, 0), [state.items])

  return (
    <div className={`fixed top-0 right-0 h-full bg-white w-4/5 z-50 shadow-lg transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-bold">SACOLA</h2>
        <button onClick={() => setOpen(false)}>✕</button>
      </div>
      <div className="overflow-y-auto flex-1 p-4">
        {state.items.length === 0 ? (
          <p className="text-center text-sm">Seu carrinho está vazio</p>
        ) : (
          state.items.map(item => (
            <div key={item.id} className="flex gap-4 border-b pb-4 mb-4">
              {item.image && <Image src={item.image} alt={item.name} width={60} height={80} className="object-cover" />}
              <div className="flex-1">
                <p className="font-bold text-sm truncate">{item.name}</p>
                <p className="text-sm mt-1">R$ {item.price.toFixed(2).replace('.', ',')}</p>
                <div className="flex items-center mt-2 gap-2">
                  <button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: { id: item.id } })} className="px-2 border">-</button>
                  <span className="text-sm">{item.quantity}</span>
                  <button onClick={() => dispatch({ type: 'ADD_ITEM', payload: item })} className="px-2 border">+</button>
                  <button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: { id: item.id } })} className="ml-auto text-xs text-red-500">x</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      {state.items.length > 0 && (
        <div className="p-4 border-t">
          <div className="flex justify-between font-bold text-sm">
            <span>Subtotal</span>
            <span>R$ {total.toFixed(2).replace('.', ',')}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default CartSidebar

'use client'
import { useCart } from '../context/CartContext'
import Image from 'next/image'

const CartOverlayMobile = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const { state, dispatch } = useCart()
  const subtotal = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    open && (
      <div className="mt-[90px] fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
        <div className="bg-white w-full max-w-md h-full flex flex-col p-4">
          <div className='flex justify-between items-center p-2'>
            {`Sacola (${state.items.reduce((sum, i) => sum + i.quantity, 0)} produtos)`}
            <button className="self-end font-bold" onClick={onClose}>
              X
            </button>
          </div>
          <div className="overflow-auto flex-1">
            {state.items.map((item) => (
              <div key={item.id} className="flex items-center mb-4">
                <Image src={item.image || ''} alt={item.name} width={60} height={60} />
                <div className='px-2'>
                  <div>{item.name}</div>
                  <span className="text-right">R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}</span>
                  <div>Qtd: {item.quantity}</div>
                  <button onClick={() => dispatch({ type: 'DELETE_ITEM', payload: { id: item.id } })} className='underline text-xs'>Remover produto</button>
                </div>
              </div>
            ))}
          </div>
          <div className="border-t pt-2 text-right font-bold">Subtotal: R$ {subtotal.toFixed(2)}</div>
        </div>
      </div>
    )
  )
}

export default CartOverlayMobile

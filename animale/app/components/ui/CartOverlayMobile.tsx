'use client'
import { useCart } from '../context/CartContext'
import Image from 'next/image'

const CartOverlayMobile = ({ open, onClose }: { open: boolean; onClose: () => void }) => {
  const { state, dispatch } = useCart()
  const subtotal = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    open && (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
        <div className="bg-white w-[80%] max-w-md h-full flex flex-col p-4">
          <button className="self-end font-bold" onClick={onClose}>
            X
          </button>
          <div className="overflow-auto flex-1">
            {state.items.map((item) => (
              <div key={item.id} className="flex items-center justify-between mb-4">
                <Image src={item.image || ''} alt={item.name} width={50} height={50} className="rounded" />
                <div>
                  <div>{item.name}</div>
                  <div>Qtd: {item.quantity}</div>
                </div>
                <div className="flex gap-2 items-center">
                  <button
                    onClick={() =>
                      dispatch({ type: item.quantity > 1 ? 'REMOVE_ITEM' : 'DELETE_ITEM', payload: { id: item.id } })
                    }
                    className="border px-2"
                  >
                    -
                  </button>
                  <button
                    onClick={() => dispatch({ type: 'ADD_ITEM', payload: { ...item, quantity: 1 } })}
                    className="border px-2"
                  >
                    +
                  </button>
                  <span className="text-right">R$ {(item.price * item.quantity).toFixed(2)}</span>
                  <button onClick={() => dispatch({ type: 'DELETE_ITEM', payload: { id: item.id } })}>❌</button>
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

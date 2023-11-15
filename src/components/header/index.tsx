import { CartContext, CartItem } from '@/context/CartContext'
import * as Dialog from '@radix-ui/react-dialog'
import { ShoppingCart } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'
import { ShoppingCartModal } from '../shoppingCartModal'
import { Branding, HeaderContainer, ShoppingCartIcon } from './styles'

export function Header() {
  const { cartItems } = useContext(CartContext)
  const [totalQuantity, setTotalQuantity] = useState(0)

  useEffect(() => {
    const calculateTotalQuantity = (items: CartItem[] | undefined) => {
      return items ? items.reduce((total, item) => total + item.quantity, 0) : 0
    }

    setTotalQuantity(calculateTotalQuantity(cartItems))

    const cartItemsJSON = JSON.stringify(cartItems)
    localStorage.setItem('@mks-sistemas:cart-items', cartItemsJSON)
  }, [cartItems])

  return (
    <HeaderContainer>
      <Branding>
        <span>MKS</span> Sistemas
      </Branding>

      <Dialog.Root>
        <Dialog.Trigger asChild>
          <ShoppingCartIcon>
            <ShoppingCart size={20} weight="fill" />
            {cartItems && <span>{totalQuantity}</span>}
          </ShoppingCartIcon>
        </Dialog.Trigger>

        <ShoppingCartModal />
      </Dialog.Root>
    </HeaderContainer>
  )
}

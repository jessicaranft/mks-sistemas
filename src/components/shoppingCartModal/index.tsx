import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import {
  CheckoutButton,
  Close,
  Content,
  EmptyCartListMessage,
  IncrementalBox,
  IncrementalContainer,
  MainContainer,
  ShoppingCartList,
  ShoppingCartListClose,
  ShoppingCartListItem,
  Title,
  TotalPrice,
} from './styles'

import { CartContext } from '@/context/CartContext'
import { useContext } from 'react'

export function ShoppingCartModal() {
  const {
    cartItems,
    removeItemFromCart,
    incrementQuantity,
    decrementQuantity,
  } = useContext(CartContext)

  const itemTotalPrices = cartItems
    ? cartItems.map((item) => item.price * item.quantity)
    : []

  const cartTotalPrice = itemTotalPrices.reduce(
    (acc, current) => acc + current,
    0,
  )

  return (
    <Dialog.Portal>
      <Content>
        <Close>X</Close>
        <MainContainer>
          <Title>Carrinho de compras</Title>

          {cartItems?.length === 0 ? (
            <EmptyCartListMessage>
              Não há itens no carrinho.
            </EmptyCartListMessage>
          ) : (
            <ShoppingCartList>
              {cartItems?.map((item) => (
                <li key={item.id}>
                  <ShoppingCartListItem>
                    <Image src={item.photo} alt="" width={46} height={57} />

                    <h3>
                      {item.brand} {item.name}
                    </h3>

                    <IncrementalContainer>
                      <p>Qtd:</p>

                      <IncrementalBox>
                        <button onClick={() => decrementQuantity(item.id)}>
                          -
                        </button>
                        <div>{item.quantity}</div>
                        <button onClick={() => incrementQuantity(item.id)}>
                          +
                        </button>
                      </IncrementalBox>
                    </IncrementalContainer>

                    <strong>
                      {itemTotalPrices[cartItems.indexOf(item)].toLocaleString(
                        'pt-BR',
                        {
                          style: 'currency',
                          currency: 'BRL',
                          maximumFractionDigits: 0,
                        },
                      )}
                    </strong>

                    <ShoppingCartListClose
                      onClick={() => removeItemFromCart(item.id)}
                    >
                      X
                    </ShoppingCartListClose>
                  </ShoppingCartListItem>
                </li>
              ))}
            </ShoppingCartList>
          )}
        </MainContainer>

        <footer>
          <TotalPrice>
            <p>Total:</p>
            <p>
              {cartTotalPrice.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                maximumFractionDigits: 0,
              })}
            </p>
          </TotalPrice>

          <CheckoutButton>Finalizar Compra</CheckoutButton>
        </footer>
      </Content>
    </Dialog.Portal>
  )
}

import Image from 'next/image'
import {
  CardActions,
  CardContainer,
  CardHeader,
  Content,
  Price,
} from './styles'

import { CartContext } from '@/context/CartContext'
import { ShoppingBagOpen } from 'phosphor-react'
import { useContext, useState } from 'react'

export interface Product {
  id: number
  name: string
  brand: string
  description: string
  photo: string
  price: number
}

export function Card({ id, name, brand, description, photo, price }: Product) {
  const { addItemToCart } = useContext(CartContext)
  const [quantity, setQuantity] = useState(1)

  const numericPrice = Number(price)

  function handleAddToCart(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()

    const item = {
      id,
      brand,
      name,
      photo,
      price,
      quantity,
    }

    addItemToCart(item, quantity)
    alert('Item adicionado com sucesso!')
  }

  return (
    <CardContainer>
      <Content>
        <Image src={photo} alt="" width={111} height={138} />

        <CardHeader>
          <h2>
            {brand} {name}
          </h2>
          <Price>
            {numericPrice.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              maximumFractionDigits: 0,
            })}
          </Price>
        </CardHeader>

        <p>{description}</p>
      </Content>

      <footer>
        <CardActions onClick={handleAddToCart}>
          <ShoppingBagOpen size={16} weight="fill" />
          Comprar
        </CardActions>
      </footer>
    </CardContainer>
  )
}

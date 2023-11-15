import { Card, Product } from '@/components/card'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { api } from './api/api'
import { CardList, Container, SkeletonCard } from './styles'

interface HomeProps {
  products: Product[]
}

export default function Home({ products }: HomeProps) {
  const [productsList, setProductsList] = useState<Product[]>(products)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await api.get(
          '/products?page=1&rows=8&sortBy=id&orderBy=ASC',
        )

        setProductsList(response.data.products)
        setLoading(false)
      } catch (error) {
        console.error('Erro ao buscar os produtos.', error)
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return (
    <>
      <Head>
        <title>MKS Sistemas</title>
      </Head>

      <Container>
        <Header />

        <main>
          <CardList>
            {loading
              ? Array.from({ length: 8 }).map((_, index) => (
                  <li key={index}>
                    <SkeletonCard />
                  </li>
                ))
              : productsList.map((item) => {
                  return (
                    <li key={item.id}>
                      <Card
                        id={item.id}
                        brand={item.brand}
                        description={item.description}
                        name={item.name}
                        photo={item.photo}
                        price={item.price}
                      />
                    </li>
                  )
                })}
          </CardList>
        </main>

        <Footer />
      </Container>
    </>
  )
}

import { CartContextProvider } from '@/context/CartContext'
import { GlobalStyle } from '@/styles/globals'
import { theme } from '@/styles/theme'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <CartContextProvider>
          <Component {...pageProps} />
        </CartContextProvider>
      </ThemeProvider>
    </>
  )
}

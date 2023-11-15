import * as Dialog from '@radix-ui/react-dialog'
import styled, { keyframes } from 'styled-components'

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0%);
  }
`

const slideOut = keyframes`
  from {
    transform: translateX(0%);
  }

  to {
    transform: translateX(100%);
  }
`

export const Content = styled(Dialog.Content)`
  width: 48.6rem;
  height: 100vh;
  background-color: ${(props) => props.theme && props.theme?.colors?.blue};
  box-shadow: -5px 0px 6px 0px rgba(0, 0, 0, 0.13);

  position: fixed;
  top: 0;
  right: 0;

  display: flex;
  flex-direction: column;

  &[data-state='open'] {
    animation: ${slideIn} 200ms ease-out;
  }

  &[data-state='closed'] {
    animation: ${slideOut} 200ms ease-out;
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 3rem 3rem 0;
  display: flex;
  flex-direction: column;
`

export const Title = styled(Dialog.Title)`
  font-size: 2.7rem;
  font-weight: 700;
  color: ${(props) => props.theme && props.theme?.colors?.white};
`

export const Close = styled(Dialog.Close)`
  border: 0;
  background-color: ${(props) => props.theme && props.theme?.colors?.black};
  color: ${(props) => props.theme && props.theme?.colors?.white};
  font-size: 2.8rem;
  font-weight: 400;
  width: 3.8rem;
  height: 3.8rem;
  border-radius: 50%;

  position: absolute;
  top: 2.8rem;
  right: 2.8rem;

  cursor: pointer;
`

export const EmptyCartListMessage = styled.p`
  color: ${(props) => props.theme && props.theme?.colors?.white};
  margin-top: 4rem;
`

export const ShoppingCartList = styled.ul`
  flex-grow: 1;
  list-style: none;

  display: flex;
  flex-direction: column;
  gap: 2.2rem;

  margin-top: 7rem;
`

export const ShoppingCartListItem = styled.div`
  background-color: ${(props) => props.theme && props.theme?.colors?.white};
  padding: 1.9rem 2.3rem;
  border-radius: 8px;

  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr;
  align-items: center;
  gap: 1.4rem;

  position: relative;

  h3 {
    font-size: 1.3rem;
    font-weight: 400;
  }

  strong {
    font-size: 1.4rem;
    font-weight: 700;
    color: ${(props) => props.theme && props.theme?.colors?.black};
  }
`

export const ShoppingCartListClose = styled.button`
  border: 0;
  background-color: ${(props) => props.theme && props.theme?.colors?.black};
  color: ${(props) => props.theme && props.theme?.colors?.white};
  font-size: 1.4rem;
  font-weight: 400;
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 50%;

  position: absolute;
  top: -0.8rem;
  right: -0.8rem;

  cursor: pointer;
`

export const TotalPrice = styled.div`
  font-size: 2.8rem;
  font-weight: 700;
  color: ${(props) => props.theme && props.theme?.colors?.white};

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3rem;
`

export const CheckoutButton = styled.button`
  width: 100%;
  height: 9.7rem;

  border: 0;
  background-color: ${(props) => props.theme && props.theme?.colors?.black};
  color: ${(props) => props.theme && props.theme?.colors?.white};
  font-size: 2.8rem;
  font-weight: 700;

  cursor: pointer;
`

export const IncrementalContainer = styled.div`
  color: ${(props) => props.theme && props.theme?.colors?.black};

  p {
    font-size: 0.8rem;
    font-weight: 400;
  }
`

export const IncrementalBox = styled.div`
  border: 1px solid #bfbfbf;
  border-radius: 4px;

  width: 8rem;

  padding: 0.4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    font-size: 1.4rem;
    font-weight: 400;
    border-right: 1px solid #bfbfbf;
    border-left: 1px solid #bfbfbf;
    padding: 0 1rem;
    width: 3rem;
  }

  button {
    font-size: 1.6rem;
    font-weight: 400;
    background: none;
    border: none;
    width: 2.2rem;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`

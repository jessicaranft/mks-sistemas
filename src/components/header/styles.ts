import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 10rem;
  background-color: ${(props) => props.theme && props.theme?.colors?.blue};

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 6.5rem;
`

export const Branding = styled.div`
  font-size: 2rem;
  font-weight: 300;
  color: ${(props) => props.theme && props.theme?.colors?.white};

  span {
    font-size: 4rem;
    font-weight: 600;
    margin-right: 0.4rem;
  }
`

export const ShoppingCartIcon = styled.button`
  background-color: ${(props) => props.theme && props.theme?.colors?.white};
  border: 0;
  border-radius: 8px;
  padding: 1.4rem;
  color: ${(props) => props.theme && props.theme?.colors?.black};
  font-size: 1.8rem;
  font-weight: 700;

  display: flex;
  gap: 1.6rem;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`

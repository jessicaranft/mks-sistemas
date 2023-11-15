import styled from 'styled-components'

export const CardContainer = styled.div`
  background-color: ${(props) => props.theme && props.theme?.colors?.white};
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);
  border-radius: 8px;

  width: 26rem;
  height: 32rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  footer {
    width: 100%;
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`

export const Content = styled.div`
  width: 100%;
  height: 100%;

  padding: 1.8rem 1.4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  font-size: 1rem;
  font-weight: 300;

  margin-bottom: 1.6rem;
`

export const CardHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;

  h2 {
    font-size: 1.6rem;
    font-weight: 400;
  }
`

export const Price = styled.span`
  background-color: ${(props) => props.theme && props.theme?.colors?.secondary};
  font-size: 1.5rem;
  font-weight: 700;
  color: ${(props) => props.theme && props.theme?.colors?.white};

  border-radius: 5px;
  padding: 0.4rem 0.6rem;
`

export const CardActions = styled.button`
  width: 100%;
  height: 3.1rem;

  background-color: ${(props) => props.theme && props.theme?.colors?.blue};
  color: ${(props) => props.theme && props.theme?.colors?.white};
  border: 0;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;

  font-size: 1.4rem;
  font-weight: 600;
  text-transform: uppercase;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.4rem;

  cursor: pointer;
`

import styled from 'styled-components'

export const FooterContainer = styled.div`
  width: 100%;
  height: 3.4rem;

  background-color: ${(props) =>
    (props.theme as NonNullable<typeof props.theme>).colors['bg-seconday']};
  color: ${(props) => props.theme && props.theme?.colors?.black};
  font-size: 1.2rem;
  font-weight: 400;

  display: flex;
  align-items: center;
  justify-content: center;
`

import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  main {
    width: 100%;
    height: 100%;
    flex-grow: 1;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 900px) {
    height: 100%;
    justify-content: center;
    align-items: center;
  }
`

export const CardList = styled.ul`
  list-style: none;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2.2rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 4rem 2rem;
  }
`

export const SkeletonCard = styled.div`
  background-color: #f0f0f0;
  border-radius: 8px;
  width: 100%;
  height: 300px;
  margin-bottom: 16px;
  animation: skeleton-loading 1.5s infinite ease-in-out;

  @keyframes skeleton-loading {
    0% {
      opacity: 0.5;
    }
    50% {
      opacity: 0.7;
    }
    100% {
      opacity: 0.5;
    }
  }
`

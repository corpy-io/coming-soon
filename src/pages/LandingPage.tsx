import React from 'react'
import { styled } from 'styled-components'
import { theme } from '../utils/theme'
import Header from '../components/Header'
import HeroText from '../components/HeroText'
import EarlyAccessForm from '../components/EarlyAccessForm'

const MainContainer = styled.main`
  min-height: 100vh;
  background: linear-gradient(180deg, #1a1a1a 0%, #000 100%);
  color: ${theme.fontLight};
  padding: 72px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  grid-gap: 80px;
  @media screen and (max-width: 1000px) {
    padding: 42px;
  }
`
const HeroContentWrapper = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  justify-content: space-between;
  flex-wrap: wrap;
  grid-gap: 80px;
  align-items: flex-end;

  @media screen and (max-width: 1000px) {
    display: flex;
  }
`

const LandingPage = () => {
  return (
    <MainContainer>
      <Header />
      <HeroContentWrapper>
        <HeroText />
        <EarlyAccessForm />
      </HeroContentWrapper>
    </MainContainer>
  )
}

export default LandingPage

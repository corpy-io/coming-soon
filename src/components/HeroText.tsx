import React from 'react'
import { styled } from 'styled-components'
import { theme } from '../utils/theme'

const MainContainer = styled.div`
  max-width: 500px;
  h1 {
    font-size: 64px;
  }
  .faded {
    color: ${theme.fontLight2};
  }

  @media screen and (max-width: 600px) {
    h1 {
      font-size: 48px;
    }
  }
`

const HeroText = () => {
  return (
    <MainContainer>
      <h1 className='faded'>What’s corpy?</h1>
      <h1>corpy is your digital identity.</h1>
    </MainContainer>
  )
}

export default HeroText

import React from 'react'
import { styled } from 'styled-components'
import { theme } from '../utils/theme'
import Typewriter from 'typewriter-effect'

const MainContainer = styled.div`
  h1 {
    font-size: 64px;
  }
  .faded {
    color: ${theme.fontLight2};
    line-height: 90%;
  }

  @media screen and (max-width: 600px) {
    height: 350px;
    h1 {
      font-size: 48px;
    }
  }
`

const HeroText = () => {
  return (
    <MainContainer>
      <h1 className='faded'>
        What’s <br /> corpy?
      </h1>
      <h1>
        corpy is your{' '}
        <Typewriter
          options={{
            strings: [
              'Resume 2.0',
              'Public profile',
              'Personal website',
              'Digital identity',
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 0.5,
          }}
        />
      </h1>
    </MainContainer>
  )
}

export default HeroText

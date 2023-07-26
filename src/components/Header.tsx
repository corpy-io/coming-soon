import React from 'react'
import { styled } from 'styled-components'
import corpyIcon from '../assets/corpyIcon.svg'

const MainContainer = styled.header`
  display: flex;
  align-items: center;
  grid-gap: 0.6rem;
`

const Image = styled.img`
  max-width: 2.11rem;
`
const Text = styled.div`
  font-size: 1.6rem;
  font-weight: 900;
`

const Header = () => {
  return (
    <MainContainer>
      <Image src={corpyIcon} />
      <Text>corpy</Text>
    </MainContainer>
  )
}

export default Header

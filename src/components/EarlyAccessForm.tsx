import React from 'react'
import { styled } from 'styled-components'
import { theme } from '../utils/theme'

const MainContainer = styled.div``

const Heading = styled.div`
  font-size: 32px;
  font-weight: 700;
  padding-bottom: 50px;
  @media screen and (max-width: 600px) {
    font-size: 24px;
    padding-bottom: 20px;
  }
`

const Form = styled.form``

const Input = styled.input`
  border: 1px solid #515151;
  background: rgba(255, 255, 255, 0.11);
  outline: none;
  width: 100%;
  padding: 18px 24px;
  color: ${theme.fontLight};
  font-size: 18px;
  transition: border 0.2s;
  margin-bottom: 20px;

  &:hover {
    border: 1px solid #828282;
    background-color: rgba(255, 255, 255, 0.09);
    transition: border 0.2s;
  }

  &:focus,
  &:active {
    border: 1px solid #989898;
    background-color: rgba(255, 255, 255, 0.07);
    transition: border 0.2s;
  }

  @media screen and (max-width: 600px) {
    padding: 14px 24px;
    margin-bottom: 15px;
  }
`

const Button = styled.button`
  outline: none;
  width: 100%;
  padding: 18px 24px;
  border: 1px solid ${theme.fontLight};
  background-color: transparent;
  cursor: pointer;
  color: ${theme.fontLight};
  font-size: 18px;
  transition: background-color 0.2s;
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
    transition: background-color 0.2s;
  }

  &:focus,
  &:active {
    background-color: rgba(255, 255, 255, 0.07);
    transition: background-color 0.2s;
  }

  @media screen and (max-width: 600px) {
    padding: 14px 24px;
  }
`

const EarlyAccessForm = () => {
  return (
    <MainContainer>
      <Heading>SignUp for early access</Heading>
      <Form name='early-access-requests' method='POST'>
        <input type='hidden' name='form-name' value='early-access-requests' />
        <Input
          type='email'
          name='email'
          placeholder='For eg. jhon@example.com'
        />
        <Button type='submit'>Get Early Access</Button>
      </Form>
    </MainContainer>
  )
}

export default EarlyAccessForm

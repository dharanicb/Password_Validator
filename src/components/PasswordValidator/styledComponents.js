// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #24263c;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const BoxContainer = styled.div`
  background-color: #475569;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 50%;
  height: 300px;
  padding: 20px;
`
export const HeadLine = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 30px;
  margin-bottom: 20px;
`

export const Description = styled.p`
  color: #f8fafc;
  font-family: 'Roboto';
  font-size: 13px;
  margin-bottom: 12px;
`
export const ReadPassword = styled.input`
  width: 60%;
`
export const ErrorMessage = styled.p`
  color: #ef4444;
  font-family: 'Roboto';
  font-size: 14px;
  margin-top: 1px;
`

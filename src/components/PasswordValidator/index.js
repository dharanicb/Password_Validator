import {useState} from 'react'

// Write your code here
import {
  MainContainer,
  BoxContainer,
  ErrorMessage,
  HeadLine,
  Description,
  ReadPassword,
} from './styledComponents'

const PasswordValidator = () => {
  const [validPassword, setPassword] = useState('')

  const onCheckPassword = event => {
    setPassword(event.target.value)
  }

  return (
    <MainContainer>
      <BoxContainer>
        <HeadLine>Password Validator</HeadLine>
        <Description>Check how strong and secure is your password</Description>
        <ReadPassword
          type="password"
          value={validPassword}
          onChange={onCheckPassword}
        />
        {validPassword.length <= 8 ? (
          <ErrorMessage>
            Your password must be at least 8 characters
          </ErrorMessage>
        ) : null}
      </BoxContainer>
    </MainContainer>
  )
}
export default PasswordValidator

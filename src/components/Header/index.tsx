import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'

import logoImg from '../../assets/logo.svg'

export const Header = () => (
  <HeaderContainer>
    <HeaderContent className="content">
      <img src={logoImg} alt="" />

      <NewTransactionButton>Nova transação</NewTransactionButton>
    </HeaderContent>
  </HeaderContainer>
)

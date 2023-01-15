import * as Dialog from '@radix-ui/react-dialog'
import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'

import { NewTransactionModal } from '../NewTransactionModal'
import logoImg from '../../assets/logo.svg'

export const Header = () => (
  <HeaderContainer>
    <HeaderContent className="content">
      <img src={logoImg} alt="" />

      <Dialog.Root>
        <Dialog.Trigger asChild>
          <NewTransactionButton>Nova transação</NewTransactionButton>
        </Dialog.Trigger>

        <NewTransactionModal />
      </Dialog.Root>
    </HeaderContent>
  </HeaderContainer>
)

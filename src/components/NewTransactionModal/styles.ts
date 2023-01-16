import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'
import styled from 'styled-components'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  min-width: 51.2rem;
  background-color: ${(p) => p.theme['gray-800']};
  padding: 4rem 4.8rem;
  border-radius: 6px;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 3.2rem;

    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    input {
      border: 0;
      border-radius: 6px;
      padding: 1.6rem;
      background-color: ${(p) => p.theme['gray-900']};
      color: ${(p) => p.theme['gray-300']};

      &::placeholder {
        color: ${(p) => p.theme['gray-500']};
      }
    }

    button[type='submit'] {
      height: 5.8rem;
      border: 0;
      border-radius: 6px;
      padding: 0 2rem;
      margin-top: 2.4rem;
      background-color: ${(p) => p.theme['green-500']};
      color: ${(p) => p.theme.white};

      &:not(:disabled):hover {
        background-color: ${(p) => p.theme['green-700']};
        transition: background-color 0.2s;
      }
    }
  }
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 2.4rem;
  right: 2.4rem;
  line-height: 0;
  color: ${(p) => p.theme['gray-500']};
`

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.6rem;
  margin-top: 0.8rem;
`

interface TransactionTypeButtonProps {
  variant: 'income' | 'outcome'
}

export const TransactionTypeButton = styled(
  RadioGroup.Item,
)<TransactionTypeButtonProps>`
  background-color: ${(p) => p.theme['gray-700']};
  padding: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  border-radius: 6px;
  border: 0;
  color: ${(p) => p.theme['gray-300']};

  svg {
    color: ${(p) =>
      p.variant === 'income' ? p.theme['green-300'] : p.theme['red-300']};
  }

  &[data-state='unchecked']:hover {
    background-color: ${(p) => p.theme['gray-600']};
    transition: background-color 0.2s;
  }

  &[data-state='checked'] {
    color: ${(p) => p.theme.white};
    background-color: ${(p) =>
      p.variant === 'income' ? p.theme['green-500'] : p.theme['red-500']};

    svg {
      color: ${(p) => p.theme.white};
    }
  }
`

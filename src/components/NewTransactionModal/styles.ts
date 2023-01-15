import * as Dialog from '@radix-ui/react-dialog'
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

      &:hover {
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

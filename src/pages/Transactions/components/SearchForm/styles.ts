import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1.6rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background-color: ${(p) => p.theme['gray-900']};
    color: ${(p) => p.theme['gray-300']};
    padding: 1.6rem;

    &::placeholder {
      color: ${(p) => p.theme['gray-500']};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    padding: 1.6rem;
    background-color: transparent;
    color: ${(p) => p.theme['green-300']};
    border: 1px solid ${(p) => p.theme['green-300']};
    border-radius: 6px;
    font-weight: bold;

    &:hover {
      background-color: ${(p) => p.theme['green-500']};
      color: ${(p) => p.theme.white};
      border-color: ${(p) => p.theme['green-500']};
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }
  }
`

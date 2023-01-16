import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root {
  font-size: 62.5%;
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(p) => p.theme['green-500']};
  }

  body {
    background-color: ${(p) => p.theme['gray-800']};
    color: ${(p) => p.theme['gray-100']};
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }
  
  button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  body, input, textarea, button {
    font: 400 1.6rem Roboto, sans-serif;
  }

  .content {
    width: min(100%, 1120px);
    padding: 0 2.4rem;
  }
`

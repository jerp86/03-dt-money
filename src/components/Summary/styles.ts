import styled, { css } from 'styled-components'

export const SummaryContainer = styled.section`
  margin: -8rem auto 0;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3.2rem;
`

interface SummaryCardProps {
  variant?: 'green'
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background-color: ${(p) => p.theme['gray-600']};
  border-radius: 6px;
  padding: 3.2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${(p) => p.theme['gray-300']};
  }

  strong {
    display: block;
    margin-top: 1.6rem;
    font-size: 3.2rem;
  }

  ${(p) =>
    p.variant === 'green' &&
    css`
      background-color: ${p.theme['green-700']};

      svg {
        color: ${p.theme.white};
      }
    `}
`

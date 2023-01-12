import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import { SummaryContainer } from './styles'

export const Summary = () => (
  <SummaryContainer className="content">
    <div>
      <header>
        <span>Entradas</span>
        <ArrowCircleUp size={32} />
      </header>
      <strong>R$ 17.400,00</strong>
    </div>

    <div>
      <header>
        <span>Saídas</span>
        <ArrowCircleDown size={32} />
      </header>
      <strong>R$ 17.400,00</strong>
    </div>
    <div>
      <header>
        <span>Total</span>
        <CurrencyDollar size={32} />
      </header>
      <strong>R$ 17.400,00</strong>
    </div>
  </SummaryContainer>
)

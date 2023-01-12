import { Header, Summary } from '../../components'
import { SearchForm } from './components/SearchForm'
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

export const Transactions = () => (
  <div>
    <Header />
    <Summary />

    <TransactionsContainer className="content">
      <SearchForm />

      <TransactionsTable>
        <tbody>
          <tr>
            <td width="50%">Desenvolvimento de site</td>
            <td>
              <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
            </td>
            <td>Venda</td>
            <td>12/01/2023</td>
          </tr>
          <tr>
            <td>Pizza</td>
            <td>
              <PriceHighlight variant="outcome">- R$ 59,00</PriceHighlight>
            </td>
            <td>Alimentação</td>
            <td>10/01/2023</td>
          </tr>
        </tbody>
      </TransactionsTable>
    </TransactionsContainer>
  </div>
)

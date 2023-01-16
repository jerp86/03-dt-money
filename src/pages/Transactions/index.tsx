import { useContext } from 'react'
import { Header, Summary } from '../../components'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
import { SearchForm } from './components/SearchForm'
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

export const Transactions = () => {
  const { transactions } = useContext(TransactionsContext)

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer className="content">
        <SearchForm />

        <TransactionsTable>
          <tbody>
            {transactions.map(
              ({ id, category, createdAt, description, price, type }) => (
                <tr key={String(id)}>
                  <td width="50%">{description}</td>
                  <td>
                    <PriceHighlight variant={type}>
                      {type === 'outcome' && '- '}
                      {priceFormatter.format(price)}
                    </PriceHighlight>
                  </td>
                  <td>{category}</td>
                  <td>{dateFormatter.format(new Date(createdAt))}</td>
                </tr>
              ),
            )}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}

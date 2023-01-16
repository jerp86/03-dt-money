import { useContext } from 'react'
import { Header, Summary } from '../../components'
import { TransactionsContext } from '../../contexts/TransactionsContext'
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
                      {price}
                    </PriceHighlight>
                  </td>
                  <td>{category}</td>
                  <td>{createdAt}</td>
                </tr>
              ),
            )}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}

import { useEffect, useState } from 'react'
import { Header, Summary } from '../../components'
import { SearchForm } from './components/SearchForm'
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

export const Transactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const loadTransaction = async () => {
    const response = await fetch('http://localhost:3333/transactions')
    const data = await response.json()

    setTransactions(data)
  }

  useEffect(() => {
    loadTransaction()
  }, [])

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

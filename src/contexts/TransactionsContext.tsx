import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

interface TransactionsContextType {
  transactions: Transaction[]
  fetchTransaction: (query?: string) => Promise<void>
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export const TransactionsProvider = ({
  children,
}: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const fetchTransaction = async (query?: string) => {
    const response = await api.get('transactions', { params: { q: query } })

    setTransactions(response.data)
  }

  useEffect(() => {
    fetchTransaction()
  }, [])

  return (
    <TransactionsContext.Provider value={{ transactions, fetchTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}

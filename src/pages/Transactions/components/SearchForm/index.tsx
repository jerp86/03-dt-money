import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { SearchFormContainer } from './styles'
import { useContext } from 'react'
import { TransactionsContext } from '../../../../contexts/TransactionsContext'

const searchFormSchema = z.object({ query: z.string() })

type SearchFormImputs = z.infer<typeof searchFormSchema>

export const SearchForm = () => {
  const { fetchTransaction } = useContext(TransactionsContext)

  const {
    handleSubmit,
    formState: { isSubmitting },
    register,
    reset,
  } = useForm<SearchFormImputs>({
    resolver: zodResolver(searchFormSchema),
  })

  const handleSearchTransactions = async (data: SearchFormImputs) => {
    await fetchTransaction(data.query)
    reset()
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
      />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}

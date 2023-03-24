import { CardList } from '../../components/CardList'
import { FilterHeader } from '../../components/FilterHeader'
import { NavBar } from '../../components/NavBar'
import { useAllUsers } from '../../hooks/useAllUsers'

export const Main = () => {
  const { users } = useAllUsers()

  return (
    <div className="grey-bg full-page">
      <NavBar />
      <FilterHeader />
      <CardList users={users} />
    </div>
  )
}

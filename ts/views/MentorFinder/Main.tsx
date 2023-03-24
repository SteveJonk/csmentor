import { CardList } from '../../components/CardList'
import { FilterHeader } from '../../components/FilterHeader'
import { NavBar } from '../../components/NavBar'
import { config } from '../../config/config'
import { useAllUsers } from '../../hooks/useAllUsers'

export const Main = () => {
  const { users } = useAllUsers()
  console.log(config.userLoggedIn)
  return (
    <div className="grey-bg full-page">
      <NavBar />
      <FilterHeader />
      <CardList users={users} />
    </div>
  )
}

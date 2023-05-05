import { useState } from 'react'
import { CardList } from '../../components/CardList'
import { FilterHeader } from '../../components/FilterHeader'
import { NavBar } from '../../components/NavBar'
import { ViewProfileDrawer } from '../../components/ViewProfileDrawer'
import { useAllUsers } from '../../hooks/useAllUsers'
import { useFilters } from '../../hooks/useFilters'
import { User } from '../../interfaces/User'

export const Main = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [selectedUser, setSelectedUser] = useState<User>()

  const filters = useFilters()

  const { users } = useAllUsers(filters.filterState)

  // console.log(users[0])

  const handleProfileOpen = (user: User) => {
    setSelectedUser(user)
    setIsProfileOpen(true)
  }

  return (
    <div className="grey-bg full-page">
      <NavBar />
      <ViewProfileDrawer
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        user={selectedUser}
      />
      <FilterHeader filters={filters} />
      <CardList users={users} onClickViewProfile={handleProfileOpen} />
    </div>
  )
}

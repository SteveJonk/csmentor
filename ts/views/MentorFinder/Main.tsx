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

  const { users, isLoading, refetch } = useAllUsers(filters.filterState)

  const handleProfileOpen = (user: User) => {
    setSelectedUser(user)
    setIsProfileOpen(true)
  }

  const handleProfileClose = async () => {
    setIsProfileOpen(false)
  }

  return (
    <div className="grey-bg full-page">
      <NavBar refetchAll={refetch} />
      <ViewProfileDrawer isOpen={isProfileOpen} onClose={handleProfileClose} user={selectedUser} />
      <FilterHeader filters={filters} />
      {!isLoading && <CardList users={users} onClickViewProfile={handleProfileOpen} />}
    </div>
  )
}

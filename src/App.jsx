import React from 'react'
import Navbar from './components/Navbar'
import FilterBar from './components/FilterBar'
import { UserContextProvider } from './userContext'
import FormModal from './components/FormModal'
import UserList from './components/UserList'

const App = () => {
  return (
    <UserContextProvider>
      <Navbar/>
      <FilterBar/>
      <UserList/>
      <FormModal/>
    </UserContextProvider>
  )
}

export default App
import React from 'react'
import WebPages from './pages'
import MainNavbar from './sections/MainNavbar'

const App: React.FC = () => {
  return (
    <>
      <MainNavbar />
      <WebPages />
    </>
  )
}
export default App
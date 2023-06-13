import React from 'react'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import CartWidget from './componentes/CartWidget/CartWidget'

const App = () => {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={"My products"}/>
    </>
  )
}

export default App
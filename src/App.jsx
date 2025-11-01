import React from 'react'
import Message from './components/useEffect';
import Greeting from './components/isLogIn';
import userStatus from './components/userStatus';
import NameList from './components/NameList';
import ProductList from './components/ProductionList';
import SimpleForm from './components/Form';

userStatus


function App() {
  

  return (
    <div  >
      <h1 >Heollo React!</h1>
      <Message/>
      <Greeting isLoggedIn={false}/>
      <userStatus isOnline={false}/>
      <NameList/>
      <ProductList/>
      <SimpleForm/>
    </div>
  )
}

export default App;



























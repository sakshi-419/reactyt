import React from 'react';
import Header from './components/header';
import AddContact from './components/addContact';
import ContactList from './components/contactList';


const App = () => {
  return (
    <div>
      <Header/>
      <AddContact/>
      <ContactList/>
    </div>
  )
}

export default App

import {useState, useEffect} from 'react'
import List from './List/index'
import Form from './Form/index'
import './styles.css'



function Contects() {
    const [contacts, setContacts] = useState([
      {
        fullname:"yusuf",
        phone_number:123
      },
      {
        fullname:"ahmet",
        phone_number:321
      },
      {
        fullname:"şahan",
        phone_number:999
      }
    ]);

    useEffect(()=>{
        console.log(contacts);
    },[contacts])

  return (
    <div id='container'>
        <h1>Contacts</h1>
        <List contacts={contacts} />
        <Form addContact={setContacts} contacts={contacts} />
    </div>
  )
}

export default Contects
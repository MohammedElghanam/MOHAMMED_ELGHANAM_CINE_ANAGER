import './App.css';
import Popup  from './components/Popup';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App() {

  const [users, setUsers] = useState([]);
  const [name, setName] = useState(''); 
  const [age, setAge] = useState('');
  // const [searchName, setSearch] = useState('');

  const [selectedUser, setSelectedUser] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect( () => {
    getUsers();
  }, [])

  const getUsers = () => {

    axios.get('http://localhost:5000/users')
    .then((response) => {
        setUsers(response.data);
    })
    .catch((err) => console.error(err.message))

  }

  const createUser = () => {
    console.log(name, age);

    axios.post('http://localhost:5000/users', {
      name,
      age: parseInt(age)
    })
    .then(() => {
      getUsers();
      setName('');
      setAge('');
    })
    .catch(err => console.log(err))
    
  }

  const deleteUser = (id) => {
      // console.log(id);
      axios.delete(`http://localhost:5000/users/${id}`)
      .then(() => {
        getUsers();
      })
      
  }

  const openPopup = (user) => {
    setSelectedUser(user);
    setIsPopupOpen(true);  
  };

  
  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedUser(null); 
  };

  // this methodin progress 
  // const search = (name) => {
  //   const filterName = users.filter(user => 
  //     user.name.toLowerCase().includes(name.toLowerCase())
  //   );
    
  //   setUsers([]);
  //   setUsers(filterName);
    
    
  // }
  
  return (
    <>
      <div>
        <input 
          type='text'
          placeholder='enter name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input 
          type='number'
          placeholder='enter age'
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <button onClick={ createUser }> creat user </button>

      </div>

      {/* <input
      type='text'
      placeholder='Search by text'
      value={searchName}
      onChange={ (e) => {
        setSearch(e.target.value); 
        search(e.target.value);
      } } 
      /> */}
      
      <div>
        <h1>list of users</h1>
        <ul>
          {users.map(user => (
              <li key={user.id}>
                {user.id} - {user.name} - {user.age} years
                <button onClick={() => openPopup(user)}>Update</button>
                <button onClick={ () => deleteUser(user.id) }>  delete user</button>
              </li>
          ))}

        </ul>
        {isPopupOpen && <Popup user={selectedUser} closePopup={closePopup} getUsers={getUsers} />}
      </div>
    </>
  );
}

export default App;

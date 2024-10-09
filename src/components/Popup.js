import './Updateuser.css';
import React, {useState} from 'react';
import axios from 'axios';

export default function Popup({ user, closePopup, getUsers }) {
  
  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);
  console.log(name);
  
    const updateUser = () => {
      axios.put(`http://localhost:5000/users/${user.id}`, { name, age })
        .then(() => {
          closePopup();
          getUsers(); 
        })
        .catch((err) => console.error(err.message));
    };
  
    return (
      <div className="popup">
        <div className="popup-inner">
          <h2>Update User</h2>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="Enter Name" 
          />
          <input 
            type="number" 
            value={age} 
            onChange={(e) => setAge(e.target.value)} 
            placeholder="Enter Age" 
          />
          <button onClick={updateUser}>Save Changes</button>
          <button onClick={closePopup}>Cancel</button>
        </div>
      </div>
    );
  }
  
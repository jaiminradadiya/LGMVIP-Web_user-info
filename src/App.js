import Style from './Style/App.module.css';
import React, { useState, useEffect, useRef } from 'react';
import './App.css'

import UserCard from './Components/UserCard';

function App() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const loader = useRef(null);

  useEffect(() => {
    if (loading) {
      loader.current.style.display = 'block';
    } else {
      loader.current.style.display = 'none';
    }
  }, [loading]);

  const getUsers = () => {
    setLoading(true);
    
    fetch('https://reqres.in/api/users?page=1')
      .then(response => response.json())
      .then(data => {
        setLoading(false);
        setUsers(data.data);
      });


  }

  return (
    <div className="App">
      <ul>
        <li><a>Brand Name</a></li>
        <li><button onClick={getUsers} className={Style.button}>Get Users</button></li>
      </ul>
      {
        users.map(user => {
          return (
            <UserCard key={user.id} props={user} />
            )
          })
        }
        <div className={Style.loader}  ref={loader}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        </div>
    </div>
  );
}

export default App;

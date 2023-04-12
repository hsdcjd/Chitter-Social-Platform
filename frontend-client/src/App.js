import './App.css';
import Header from './components/Header/Header';
import AddPeep from './components/AddPeep/AddPeep';
import AllPeeps from './components/AllPeeps/AllPeeps';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Logout from './components/Logout/Logout';



function App() {

    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    const setLoginUser = (newUser) => {
        setUser(newUser);
        localStorage.setItem('username', newUser.username);
    };

    useEffect(() => {
        const storedLoggedIn = localStorage.getItem('loggedIn');
        const storedUser = localStorage.getItem('user');

        if (storedLoggedIn === 'true') {
            setLoggedIn(true);
        }

        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('loggedIn', loggedIn);
        localStorage.setItem('user', JSON.stringify(user));
    }, [loggedIn, user]);

  return (
    <div className = "container">
    <>
        <Header loggedIn={loggedIn} />
        <Routes>
          <Route exact path="/" element={<AllPeeps />} />

            <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setLoginUser={setLoginUser} />} />
              <Route path="/register" element={<Register />} />
              <Route path="/add-peep" element={<AddPeep />} />
              <Route path="/logout" element={<Logout setLoggedIn={setLoggedIn} />} />

        </Routes>
      </>
      <h6>This platform is brought to you by CJ Duckett &copy;</h6>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import { Home, Pictures, Profile, Login, Register } from './pages';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Nav from './layouts/Nav/Nav';

export const UserContext = React.createContext(null);

const App = () => {
  const [user, setUser] = useState(null);
  const saveUser = user => {
    setUser(user);
    console.log('ESTE ES EL USUARIO DE APP: ', user.name);
  };

  return (
    <Router>
      <UserContext.Provider value={{ user, saveUser }}>
        <Nav />
        {user ? <p>Hola: {user.name}</p> : null}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pictures" element={<Pictures />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </UserContext.Provider>
    </Router>
  
  );
};

export default App;

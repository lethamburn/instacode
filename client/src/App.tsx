import React, { useState } from 'react';
import { Home, Pictures, Profile, Login, Register } from './pages';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Nav from './layouts/Nav/Nav';

export const UserContext = React.createContext(null);

const App = () => {
  const [user, setUser] = useState(null);
  console.log('ESTE ES EL USUARIO DE APP: ', user.name);
  const saveUser = user => {
    setUser(user);
  };

  return (
    <Router>
      <UserContext.Provider value={{ user, saveUser }}>
        <Nav />
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

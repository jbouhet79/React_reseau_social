// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FeedPage from './Pages/FeedPage';
import Login from './Pages/Login';
import Logout from './Pages/Logout';
// import Form from './Components/Form';
import { useState } from 'react';



function App() {
  const [user, setUser] = useState(null)

  function handleLogin(user) {
    console.log(user)
    setUser(user)
    // permet de récuperer user de l'enfant via l'évènement onMemberConnect et la fct handleLogin dans MA Version !!!!!!!!!
  }

  function handleUnLogin() {
    setUser(null)
  }

  return (
    <div className="App">
      <BrowserRouter>
        {/*  routeurs */}
        <Routes>
          {/* Liste des routes avec les différentes routes*/}
          <Route path="/" element={<FeedPage user={user} />} />

          <Route path="/login" element={<Login onLoginSucceed={handleLogin} />} />
          <Route path="/logout" element={<Logout onLogoutSucceed={handleUnLogin} />} />

          {/* MA Version - inutilisée */}
          {/* <Route path="/login" element={<Login onMemberConnect={handleLogin} />} /> */}
          {/* permet de récuperer user de l'enfant via l'évènement onMemberConnect et la fct handleLogin */}

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

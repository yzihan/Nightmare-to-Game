import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { useState } from 'react';
import LoginPage from './components/LoginPage';






function App() {
  const [isLogin, setIsLogin] = useState(true);
  const login = () =>{
    setIsLogin(true);
  }

  const logout = () => {
    setIsLogin(false);
  }

  return (
    <div>
      {isLogin ? <><Header logout={logout}></Header> <Main></Main></> : <LoginPage login={login} ></LoginPage> }
    </div>
    
  );
}

export default App;

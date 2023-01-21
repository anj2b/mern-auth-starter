import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function submitLogin(email: string, password: string) {
  email = email.toLowerCase()
  const data = { email, password };
  fetch('http://localhost:3030/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}

function submitRegister(email: string, password: string) {
  email = email.toLowerCase()
  const data = { email, password };
  fetch('http://localhost:3030/auth/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onSubmit={submitLogin} />} />
        <Route path="/signup" element={<Register onSubmit={submitRegister} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

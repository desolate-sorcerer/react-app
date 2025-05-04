import { Link } from "react-router"
import { useNavigate } from "react-router";
import { useState } from "react";
import "./Register.css"

function Register() {
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('')
  const [username, setUsername] = useState('')
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, username, password })
      })
      const data = await response.json();
      if (data.succes) {
        navigate('/')
      }
      else {
        setError(data.error || 'Login failed');
      }
    }
    catch (err) {
      setError('Network error')
    }
  }

  return (
    <div className="container">
      <h1>Create an account</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <p>already have an account? <Link to="/login">login</Link></p>
      <form className="form" onSubmit={submit}>
        <div class="input_wrapper">
          <input type="text" id="email" className="field" value={email} onChange={e => setEmail(e.target.value)} required />
          <label for="email">email</label>
        </div>
        <div class="input_wrapper">
          <input type="text" id="username" className="field" value={username} onChange={e => setUsername(e.target.value)} required />
          <label for="email">username</label>
        </div>
        <div class="input_wrapper">
          <input type="password" id="password" className="field" value={password} onChange={e => setPassword(e.target.value)} required />
          <label for="password">password</label>
        </div>
        <div class="input_wrapper">
          <input type="password" id="password2" className="field" value={password2} onChange={e => setPassword2(e.target.value)} required />
          <label for="password2">confirm password</label>
        </div>
        <input type="submit" value={'Submit'} className="submit-btn" />
      </form>
    </div>
  )
}
export default Register

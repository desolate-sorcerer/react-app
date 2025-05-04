import Home from "./pages/Home/Home"
import Register from "./pages/Login/Register"
import NavBar from './components/NavBar/NavBar'
import Login from './pages/Login/Login'
import User from "./pages/User/User"
import Chat from "./pages/Chat/Chat"
import { Routes, Route } from "react-router"
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" element={<User />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </>
  )
}

export default App

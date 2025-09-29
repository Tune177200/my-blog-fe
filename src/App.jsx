import { Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import MyBlog from "./pages/MyBlog"
import Register from "./pages/Register"
import Login from "./pages/Login"

function App() {
  return (
    <div>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/my-blog">My Blog</Link> |{" "}
        <Link to="/register">Register</Link> |{" "}
        <Link to="/login">Login</Link> |{" "}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-blog" element={<MyBlog />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App

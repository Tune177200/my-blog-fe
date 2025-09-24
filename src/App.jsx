import { Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import MyBlog from "./pages/MyBlog"
import Register from "./pages/Register"

function App() {
  return (
    <div>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/my-blog">My Blog</Link> |{" "}
        <Link to="/register">Register</Link> |{" "}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-blog" element={<MyBlog />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default App

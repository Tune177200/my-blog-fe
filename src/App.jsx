import { Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import MyBlog from "./pages/MyBlog"

function App() {
  return (
    <div>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/my-blog">My Blog</Link> |{" "}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-blog" element={<MyBlog />} />
      </Routes>
    </div>
  )
}

export default App

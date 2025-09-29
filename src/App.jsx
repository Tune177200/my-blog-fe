import { Routes, Route, Link } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import MyBlog from "./pages/MyBlog"
import Register from "./pages/Register"
import Login from "./pages/Login"

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/my-blog" element={<MyBlog />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  )
}

export default App

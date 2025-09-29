import { Routes, Route, Link } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import MyBlog from "./pages/MyBlog"
import Register from "./pages/Register"
import Login from "./pages/Login"

import DashBoardLayOut from "./components/DashBoardLayOut"
import DashBoard from "./pages/dashboard/DashBoard"
import Posts from "./pages/dashboard/Posts"
import PostForm from "./pages/dashboard/PostForm"
import Categories from "./pages/dashboard/Categories"

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/my-blog" element={<MyBlog />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Route>

      <Route path="/dashboard" element={<DashBoardLayOut />}>
        <Route index element={<DashBoard />} />
        <Route path="posts" element={<Posts />} />
        <Route path="posts/new" element={<PostForm />} />
        <Route path="categories" element={<Categories />} />
      </Route>

    </Routes>
  )
}

export default App

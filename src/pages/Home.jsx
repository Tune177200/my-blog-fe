import { useEffect, useState } from "react"

function Home() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/api/posts")
      .then(res => res.json())
      .then(data => {
        setPosts(data)
      })
  }, [])

  return (
    <div>
      <h2>🏠 Trang Home</h2>
      <h3>Danh sách bài viết mới nhất</h3>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home

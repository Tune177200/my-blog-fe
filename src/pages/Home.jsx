function Home() {
    
  const posts = [
    { id: 1, title: "Bài viết đầu tiên", content: "Đây là nội dung ngắn của bài viết số 1..." },
    { id: 2, title: "Chia sẻ về React Router", content: "React Router giúp chúng ta quản lý page dễ dàng hơn..." },
    { id: 3, title: "Học NodeJS", content: "NodeJS là nền tảng chạy JavaScript phía server..." },
  ]

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

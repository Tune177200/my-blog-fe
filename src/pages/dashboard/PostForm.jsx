import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api"; // giả sử bạn có file axios setup

function PostForm() {
  const [form, setForm] = useState({
    title: "",
    content: "",
    status: "draft",
  });

  const navigate = useNavigate();

  // Cập nhật giá trị form khi user nhập
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/posts", form); // gửi dữ liệu lên backend
      alert("Post created successfully!");
      navigate("/dashboard/posts"); // redirect về danh sách posts
    } catch (err) {
      console.error(err);
      alert("Error creating post!");
    }
  };

  return (
    <div className="container py-4">
      <h3 className="mb-4">Add New Post</h3>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={form.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Content</label>
          <textarea
            className="form-control"
            name="content"
            rows="6"
            value={form.content}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Status</label>
          <select
            className="form-select"
            name="status"
            value={form.status}
            onChange={handleChange}
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </div>

        <div className="d-flex gap-2">
          <button type="submit" className="btn btn-primary">Add Post</button>
          <button type="reset" className="btn btn-secondary">Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default PostForm;

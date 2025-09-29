import { useState } from "react";
import { useNavigate } from "react-router-dom";

import API from "../api";

function Register() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    display_name: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/register", form);
      setMessage(res.data.message);

      setIsSuccess(true); 

      setTimeout(
        () => {
          navigate("/login");
        }, 2000
      );

    } catch (err) {
      if (err.response) {
        setMessage(err.response.data.message || "Đăng ký lỗi!");
        setIsSuccess(false);
      }
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card shadow-lg p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center text-primary mb-4">Đăng ký</h2>

        {message && (
          <div className={`alert ${isSuccess ? 'alert-success' : 'alert-danger'} text-center`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Tên tài khoản</label>
            <input
              type="text"
              className="form-control"
              placeholder="Nhập tên tài khoản"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Nhập email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Tên hiển thị</label>
            <input
              type="text"
              className="form-control"
              placeholder="Tên hiển thị"
              name="display_name"
              value={form.display_name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Mật khẩu</label>
            <input
              type="password"
              className="form-control"
              placeholder="Nhập mật khẩu"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100 mb-3">
            Đăng ký
          </button>

          <div className="text-center">
            <small>
              Bạn đã có tài khoản? <a href="/login">Đăng nhập</a>
            </small>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;

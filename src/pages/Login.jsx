import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import API, { setAuthToken } from "../api";

function Login() {
  const navigate = useNavigate();
  
  const [form, setForm] = useState({
    login: "",
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
      const res = await API.post("/login", form);
      setMessage("Đăng nhập thành công!");
      // Lưu token vào localStorage để dùng cho các request sau
      const token = res.data.token;
      localStorage.setItem("token", token);
      setAuthToken(token);

      setIsSuccess(true);
      setTimeout(
        () => {
          navigate("/dashboard")
        }, 1500
      );

    } catch (err) {
      if (err.response) {
        setMessage(err.response.data.message || "Đăng nhập lỗi!");
        setIsSuccess(true);
      }
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card shadow-lg p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center text-primary mb-4">Đăng nhập</h2>

        {message && (
          <div className={`alert ${isSuccess ? "alert-success" : "alert-danger"} text-center`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email hoặc tên tài khoản</label>
            <input
              type="text"
              className="form-control"
              placeholder="Nhập email hoặc tên tài khoản"
              name="login"
              value={form.login}
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
            Đăng nhập
          </button>

          <div className="text-center">
            <small>
              Chưa có tài khoản? <a href="/register">Đăng ký</a>
            </small>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

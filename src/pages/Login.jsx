import { useState } from "react";
import API, { setAuthToken } from "../api";

function Login() {
  const [form, setForm] = useState({
    login: "",
    password: "",
  });
  const [message, setMessage] = useState("");

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
    } catch (err) {
      if (err.response) {
        setMessage(err.response.data.message || "Đăng nhập lỗi!");
      }
    }
  };

  return (
    <div>
      <h2>Đăng nhập</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Email hoặc tên tài khoản"
          name="login"
          value={form.login}
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          placeholder="Mật khẩu"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Đăng nhập</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Login;

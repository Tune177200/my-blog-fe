import { useState } from "react";
import API from "../api";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    display_name: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/register", form);
      setMessage(res.data.message);
    } catch (err) {
      if (err.response) {
        setMessage(err.response.data.message || "Đăng ký lỗi!");
      }
    }
  };

  return (
    <div>
      <h2>Đăng ký</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Tên tài khoản"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <br />
        <input
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <br />
        <input
          placeholder="Tên hiển thị"
          name="display_name"
          value={form.display_name}
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
        <button type="submit">Đăng ký</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Register;

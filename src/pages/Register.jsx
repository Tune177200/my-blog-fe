import { useState } from "react"

function Register() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [displayName, setDisplayName] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")

    const handleRegister = async (e) => {
        e.preventDefault()
        const res = await fetch("http://localhost:5000/api/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, email, displayName, password })
        })
        const data = await res.json()
        setMessage(data.message)
    }

    return (
        <div>
            <h2>Đăng ký</h2>
            <form onSubmit={handleRegister}>
                <input placeholder="Tên tài khoản" value={username} onChange={e => setUsername(e.target.value)} />
                <br />
                <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <br />
                <input placeholder="Tên hiển thị" value={displayName} onChange={e => setDisplayName(e.target.value)} />
                <br />
                <input type="password" placeholder="Mật khẩu" value={password} onChange={e => setPassword(e.target.value)} />
                <br />
                <button type="submit">Đăng ký</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    )
}

export default Register
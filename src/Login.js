import React, { useState } from "react"
import "./Login.css"

export default function Login(props) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(`Username: ${username}, Password: ${password}`)
    // TODO: add authentication using firebase, now it only supports trivial admin verification
    if (username === "admin" && password === "admin") {
      props.history.push('./Home')
    } else {
      alert("invalid username or password")
    }
  }

  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit">Login</button>
          <p className="message">
            Not registered? <a href="#">Create an account</a>
          </p>
        </form>
      </div>
    </div>
  )
}

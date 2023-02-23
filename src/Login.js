import React from "react";

export default function Login() {
  return (
    <div className="cover">
      <h1>Welcome to Smart-Home!</h1>
      <input type="text" placeholder="UserName"></input>
      <input type="password" placeholder="PassWord"></input>
      <button className="login-btn">Login</button>
    </div>
  );
}

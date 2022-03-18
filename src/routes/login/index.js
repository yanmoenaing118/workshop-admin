import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./../../lib/useAuth";

export default function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const {token, login} = useAuth();

  const handleChange = (key) => (e) => {
    setForm({ ...form, [key]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(form);
    navigate("/");
  };

  useEffect(() => {
    if(token) {
      navigate("/")
    }
  },[token]);

  return (
    <div>
      <h1>Login Page</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <labe>email: </labe>
          <input
            type="text"
            value={form.email}
            onChange={handleChange("email")}
          />
        </div>

        <div>
          <label>password: </label>
          <input
            type="password"
            value={form.password}
            onChange={handleChange("password")}
          />
        </div>
        <div>
          <button type="submit">log in</button>
        </div>
      </form>
    </div>
  );
}

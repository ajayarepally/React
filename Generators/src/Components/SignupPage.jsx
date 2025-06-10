import Navbar from "./Navbar";
import { useState } from "react";

const SignupPage = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome ${form.name}! You have signed up successfully.`);
  };

  return (
    <div className="page">
      <Navbar />
      <h1>Signup</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: "400px", width: "100%" }}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />
        <button type="submit" className="main-action" style={{ width: "100%" }}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupPage;

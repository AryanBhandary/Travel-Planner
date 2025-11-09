import { useState } from 'react';
import axios from 'axios';
import '../style/RegisterLogin.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const res = await axios.post("http://localhost:5000/api/users/login", formData);
  
      const { token, user } = res.data;
  
      // Save user info in localStorage
      localStorage.setItem("user", JSON.stringify({
        token,
        role: user.role,
        name: user.name,
        email: user.email,
        number: user.number,
      }));
  
      // Role-based redirection
      if (user.role === "admin") {
        navigate("/admin");
      } else if (user.role === "traveler") {
        navigate("/home");
      } else {
        // fallback route (optional)
        navigate("/unauthorized");
      }
    } catch (err: any) {
      alert(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <section className='page-background'>
      <button className="back-button" onClick={() => navigate(-1)}>
          ← Back
        </button><br />
        <button className="btn" onClick={() => navigate('/')}>
          Get Started
        </button>
      <div className="container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Sign In</button>
        </form>

        <div className="switch">
          Don't have an account? <a href="/register">Register</a>
        </div>
      </div>
    </section>
  );
}

export default Login;

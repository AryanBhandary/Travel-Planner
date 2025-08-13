import { useState, useEffect } from 'react';
import axios from 'axios';
import '../style/RegisterLogin.css';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    number: '',
    password: '',
    confirmPassword: '',
    role: 'traveler',
  });

  // Redirect if already logged in
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
    if (storedUser?.token) {
      navigate("/home");
    }
  }, [navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/users/register",
        formData
      );

      const { token, user } = res.data;

      if (!token || !user) {
        alert("Registration successful! Please login.");
        return navigate("/login");
      }

      // Store the user object in localStorage
      localStorage.setItem(
        "user",
        JSON.stringify({
          token,
          role: user.role,
          name: user.name,
          email: user.email,
          number: user.number,
        })
      );

      alert(res.data.message || "Registration successful!");
      navigate("/home");

    } catch (err: any) {
      console.error("Registration error:", err.response || err);
      alert(err.response?.data?.error || "Registration failed");
    }
  };

  return (
    <section className='page-background'>
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back
      </button>
      <button className="btn" onClick={() => navigate('/')}>
        Get Started
      </button>

      <div className="container">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <label>First Name</label>
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />

          <label>Last Name</label>
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Phone Number</label>
          <input
            name="number"
            value={formData.number}
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

          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <button type="submit">Sign Up</button>
        </form>

        <div className="switch">
          Already have an account? <a href="/login">Login</a>
        </div>
      </div>
    </section>
  );
}

export default Register;

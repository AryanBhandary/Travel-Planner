import { useState } from 'react';
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      console.log("Sending form data:", formData);
      const res = await axios.post("http://localhost:5000/api/users/register", formData);
      alert(res.data.message);
      navigate('/home');
    } catch (err: any) {
      console.error("Registration error:", err.response?.data || err.message);
      alert(err.response?.data?.error || "Registration failed");
    }
  };

  return (
    <section>
      <div className="container">
        <div className="left-half">
          <h1>Register</h1>
          <form onSubmit={handleSubmit} className="register-form">
            <label>First Name:</label><br />
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            /><br />

            <label>Last Name:</label><br />
            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            /><br />

            <label>Email:</label><br />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            /><br />

            <label>Phone Number:</label><br />
            <input
              name="number"
              value={formData.number}
              onChange={handleChange}
              required
            /><br />

            <label>Password:</label><br />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            /><br />

            <label>Confirm Password:</label><br />
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            /><br />

            <button type="submit">Sign Up</button><br />
          </form>
          <div className="switch">
            <p>Already have an account? <a href="/login">Login</a></p>
          </div>
        </div>
        <div className="right-half">
          <span>
            <h1>Welcome to</h1>
            <h2>Explore Nepal</h2>
          </span>
        </div>
      </div>
    </section>
  );
}

export default Register;

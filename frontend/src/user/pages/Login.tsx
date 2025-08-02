import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/users/login', formData);

      const user = res.data.user;
      const token = res.data.token;

      // ✅ Save full user data with token & role in localStorage
      localStorage.setItem('user', JSON.stringify({
        token,
        role: user.role,
        id: user._id,
        name: user.name,
        email: user.email,
        number: user.number, // ✅ Include number in localStorage
      }));

      // ✅ Redirect based on role
      if (user.role === 'admin') {
        navigate('/admin');
      } else if (user.role === 'traveler') {
        navigate('/home');
      } else if (user.role === 'provider') {
        navigate('/providerdashboard');
      } else {
        navigate('/unauthorized');
      }

    } catch (err: any) {
      alert(err.response?.data?.error || 'Login failed');
    }
  };

  return (
    <section>
      <div className="container">
        <div className="left-half">
          <h1>Login</h1>
          <form onSubmit={handleSubmit} className="login-form">
            <label>Email:</label><br />
            <input
              type="email"
              name="email"
              value={formData.email}
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

            <button type="submit">Login</button><br />
          </form>
          <div className='switch'>
            <p>Don't have an account? <a href='/'> Sign Up</a></p>
          </div>
        </div>
        <div className="right-half">
          <span>
            <h1>Welcome back <br />to</h1>
            <h2>Explore Nepal</h2>
          </span>
        </div>
      </div>
    </section>
  );
}

export default Login;

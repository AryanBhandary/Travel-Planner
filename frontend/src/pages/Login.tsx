import "../style/RegisterLogin.css";
import { useState } from "react";

function Login() {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        number: "",
        password: "",
        confirmPassword: "",
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // TODO: Connect to backend using fetch/axios
      };

  return (
    <section>
    <div className="container">
        <div className="left-half">
            <h1>Login</h1>
            <form onSubmit={handleSubmit} className="register-form">
                <label>Email:</label><br />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                /><br />
                <label>Password:</label><br />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                /><br />


                <button type="submit">Login</button>
            </form>
            <p className="login">Don't have an account? <a href="/register">Sign Up</a></p>
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

export default Login;

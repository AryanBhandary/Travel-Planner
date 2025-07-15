import "../style/RegisterLogin.css";
import { useState } from "react";

function Register() {

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
            <h1>Register</h1>
            <form onSubmit={handleSubmit} className="register-form">
                <label>First Name:</label><br />
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                /><br />
                <label>Last Name:</label><br />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                /><br />
                <label>Email:</label><br />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                /><br />
                <label>Phone Number:</label><br />
                <input
                    type="tel"
                    name="number"
                    placeholder="Phone Number"
                    value={formData.number}
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
                <label>Conform Password:</label><br />
                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                /><br />


                <button type="submit">Sign Up</button>
            </form>
            <p className="login">Already have an account? <a href="/login">Login</a></p>
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

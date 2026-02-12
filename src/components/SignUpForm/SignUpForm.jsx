import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { signUp } from "../../services/authService.js";
import { UserContext } from "../../contexts/UserContext.jsx";
import "./SignupForm.css";

const SignUpForm = () => {
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    passwordConf: "",
  });

  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const { username, password, passwordConf } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMessage("");
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const newUser = await signUp(formData);
      setUser(newUser);
      navigate("/");
    } catch (err) {
      setMessage(err.message);
    }
  };

  const isFormInvalid = () => {
    return !(username && password && password === passwordConf);
  };

  return (
    
    <section className="hero-signup">
      {/* Decorative Background Icons */}
  <div className="music-bg">
    <span className="note note1">♪</span>
    <span className="note note2">♫</span>
    <span className="note note3">♬</span>
    <span className="headphones">🎧</span>
  </div>
  <div className="music-bg">
  <span className="note note1">♪</span>
  <span className="note note2">♫</span>
  <span className="note note3">♬</span>
  <span className="headphones">🎧</span>

  {/* NEW Microphones */}
  <span className="mic mic1">🎤</span>
  <span className="mic mic2">🎤</span>
</div>
      <main className="auth-card">
        <h1>Sign Up</h1>
        <p className="auth-message">{message}</p>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              name="username"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              name="password"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="confirm">Confirm Password:</label>
            <input
              type="password"
              id="confirm"
              value={passwordConf}
              name="passwordConf"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <button type="submit" disabled={isFormInvalid()}>
              Sign Up
            </button>
            <button onClick={() => navigate("/")}>Cancel</button>
          </div>
        </form>
      </main>
    </section>
  );
};

export default SignUpForm;

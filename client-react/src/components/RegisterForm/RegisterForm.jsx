import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../api/fetch_user";

const INITIAL_STATE = {
  name: "",
  emoji: "",
  email: "",
  password: "",
  description: "",
};

const RegisterForm = () => {
  const navigate = useNavigate();
  const [registerForm, setRegisterForm] = useState(INITIAL_STATE);
  const [error, setError] = useState(null);

  const submitForm = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await registerUser(registerForm);
      setRegisterForm(INITIAL_STATE);
      setError("");
      navigate("/login");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setRegisterForm({ ...registerForm, [name]: value });
  };

  return (
    <div>
      <form onSubmit={submitForm} className="registerForm">
        <input
          type="text"
          name="name"
          value={registerForm.name}
          onChange={handleInput}
          placeholder="Name"
        />
        <input
          type="text"
          name="email"
          value={registerForm.email}
          onChange={handleInput}
          placeholder="E-mail"
        />
        <input
          type="password"
          name="password"
          value={registerForm.password}
          onChange={handleInput}
          placeholder="Password"
        />
        <label>Select your emoji</label>
        <select
          name="emoji"
          className="user-form__select"
          onChange={handleInput}
          value={registerForm.emoji}
        >
          <option className="user-form__options" value="😃">
            😃
          </option>
          <option className="user-form__options" value="👽">
            👽
          </option>
          <option className="user-form__options" value="🤘">
            🤘
          </option>
          <option className="user-form__options" value="😺">
            😺
          </option>
          <option className="user-form__options" value="🐴">
            🐴
          </option>
          <option className="user-form__options" value="💾">
            💾
          </option>
          <option className="user-form__options" value="🎮">
            🎮
          </option>
          <option className="user-form__options" value="🎹">
            🎹
          </option>
          <option className="user-form__options" value="🍉">
            🍉
          </option>
          <option className="user-form__options" value="🎠">
            🎠
          </option>
          <option className="user-form__options" value="🌈">
            🌈
          </option>
        </select>
        <input
          type="text"
          name="description"
          value={registerForm.description}
          onChange={handleInput}
          placeholder="Description"
        />
        <button type="submit">Register</button>
        {error && <div style={{ color: "red" }}>{error}</div>}
      </form>
    </div>
  );
};

export default RegisterForm;

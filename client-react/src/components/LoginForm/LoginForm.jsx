import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api/fetch_user";
import { UserContext } from "../../App";

const LoginForm = () => {
  const { user, saveUser } = useContext(UserContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submitForm = async (ev) => {
    ev.preventDefault();
    try {
      const { email, password } = ev.target;

      const form = {
        email: email.value,
        password: password.value,
      };

      const userDB = await loginUser(form);
      saveUser(userDB.data.user);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div>
        <form onSubmit={submitForm}>
          <input type="text" name="email" placeholder="E-mail" />
          <input type="password" name="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;

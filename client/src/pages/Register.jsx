import { useState } from "react";
import Wrapper from "../assets/wrappers/RegisterPage";
import { Logo, FormRow, Alert } from "../components";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
  showAlert: false,
};

const Register = () => {
  const [values, setValues] = useState(initialState);

  const handleChange = (event) => {
    console.log(event);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={handleSubmit}>
        <Logo />
        <h3>Login</h3>
        {values.showAlert && <Alert />}
        <FormRow
          labelText="name"
          name="name"
          type="text"
          value={values.name}
          handleChange={handleChange}
        />
        <FormRow
          labelText="email"
          name="email"
          type="email"
          value={values.email}
          handleChange={handleChange}
        />
        <FormRow
          labelText="password"
          name="password"
          type="password"
          value={values.password}
          handleChange={handleChange}
        />
        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>
    </Wrapper>
  );
};

export default Register;

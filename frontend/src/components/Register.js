import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import AuthService from "../services/auth.service";

const required = (value) => {
  if (!value) {
    return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
        <div className="alert alert-danger" role="alert">
          This is not a valid email.
        </div>
    );
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
        <div className="alert alert-danger" role="alert">
          The username must be between 3 and 20 characters.
        </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
        <div className="alert alert-danger" role="alert">
          The password must be between 6 and 40 characters.
        </div>
    );
  }
};

const vnumber = (value) => {
  if (value.length < 7 || value.length > 9) {
    return (
        <div className="alert alert-danger" role="alert">
          The number must be 8 digits. Discard 0 from initial...
        </div>
    );
  }
};


const Register = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");
  const[roles, setRole] = useState("");
  const options = [
    {
      label : "Choose..",
      value : " "
    },
    {
      label : "student",
      value : "student"
    },
    {
      label : "teacher",
      value : "teacher"
    },
    {
      label : "manager",
      value : "manager"
    },

  ];

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const onChangeNumber = (e) => {
    const number = e.target.value;
    setNumber(number);
  };

  const onChangeRole = (e) => {
    const roles = e.target.value;
    console.log(roles);
    setRole (roles);
  }

  const handleRegister = (e) => {
    e.preventDefault();
    setMessage("");
    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.register(username, email, password, number, roles).then(
          (response) => {
            setMessage(response.data.message);
            setSuccessful(true);
          },
          (error) => {
            const resMessage =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            setMessage(resMessage);
            setSuccessful(false);
          }
      );
    }
  };

  return (
      <div className="col-md-12">
        <div className="card card-container">

          <Form onSubmit={handleRegister} ref={form} data-testid='from-tag'>
            {!successful && (
                <div>
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <Input
                        type="text"
                        className="form-control"
                        data-testid='input-field'
                        name="username"
                        value={username}
                        onChange={onChangeUsername}
                        validations={[required, vusername]}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <Input
                        type="text"
                        className="form-control"
                        name="email"
                        value={email}
                        onChange={onChangeEmail}
                        validations={[required, validEmail]}
                    />

                  </div>

                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <Input
                        type="password"
                        className="form-control"
                        name="password"
                        value={password}
                        onChange={onChangePassword}
                        validations={[required, vpassword]}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="number">Phone Number</label>
                    <Input
                        type="number"
                        className="form-control"
                        name="number"
                        value={number}
                        onChange={onChangeNumber}
                        validations={[required, vnumber]}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="Role">Role &nbsp; &nbsp;
                      <select
                          value={roles}
                          onChange = {onChangeRole}
                      >
                        {options.map((option) => (
                            <option value={option.value}>{option.label}</option>
                        ))}
                      </select></label>
                  </div>

                  <div className="form-group">
                    <button data-testid='submit-btn' className="btn btn-primary btn-block">Sign Up</button>
                  </div>
                </div>
            )}

            {message && (
                <div className="form-group">
                  <div
                      className={
                        successful ? "alert alert-success" : "alert alert-danger"
                      }
                      role="alert"
                  >
                    {message}
                  </div>
                </div>
            )}
            <CheckButton style={{ display: "none" }} ref={checkBtn} />
          </Form>
        </div>
      </div>
  );
};

export default Register;
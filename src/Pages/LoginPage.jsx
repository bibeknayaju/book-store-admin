import React, { useState } from "react";
import { Message, MessageHeader, Segment } from "semantic-ui-react";
import FormComponent from "../Components/FormComponent";
import { Navigate, useNavigate } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [errorMessages, setErrorMessages] = useState("");

  const userLoggedIn = localStorage.getItem("isLoggedIn");

  if (userLoggedIn) {
    return <Navigate to={"/"} />;
  }

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "admin@gmail.com" && password === "admin") {
      localStorage.setItem("isLoggedIn", true);
      navigate("/");
    } else {
      setErrorMessages("Invalid credentials. Please try again.");
    }
  };

  return (
    <Segment
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}>
      <div
        style={{
          maxWidth: "30rem",
          width: "100%",
          margin: "auto",
        }}>
        <div
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginBottom: "1rem",
            textAlign: "center",
          }}>
          <p>Welcome back! Please login to your account.</p>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}>
          <FormComponent
            buttonText="Login"
            onSubmitFunction={handleLogin}
            fields={[
              {
                label: "Email",
                placeholder: "Enter your email",
                type: "email",
                value: email,
                onChange: (e) => setEmail(e.target.value),
              },
              {
                label: "Password",
                placeholder: "Enter your password",
                type: "password",
                value: password,
                onChange: (e) => setPassword(e.target.value),
              },
            ]}
          />
        </div>

        {errorMessages && (
          <Message negative>
            <Message.Header>{errorMessages}</Message.Header>
          </Message>
        )}
      </div>

      <Message>
        <MessageHeader>Note: It's only for demo purposes.</MessageHeader>
        <p>Please use the following credentials to login:</p>
        <span>
          Email: <strong> admin@gmail.com, </strong> Password:{" "}
          <strong> admin </strong>
        </span>
      </Message>
    </Segment>
  );
}

export default LoginPage;

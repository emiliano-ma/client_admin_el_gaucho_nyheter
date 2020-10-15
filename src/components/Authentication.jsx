import React, { useState } from "react";
import LoginForm from "./LoginForm";
import auth from "../modules/auth";
import { Message } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";


const Authentication = (props) => {
  const [message, setMessage] = useState();


  const dispatch = useDispatch();

  
  
  const login = async (e) => {
    e.preventDefault();
    try {
      const email = e.target.email.value;
      const password = e.target.password.value;
      
      const response = await auth.signIn(email, password);
      
      dispatch({
        type: "AUTHENTICATE",
        payload: {
          // currentUser: {
          //   email: "response.data.email",
          //   role: "response.data.role"
          // },
          authenticated: true
        },
      });
      // props.authenticate(response.success);
      // props.setRole(response.data.role);
    } catch (error) {
      setMessage(error.response.data.errors[0]);
    }
  };

  return (
    <>
      <LoginForm login={login} />
      {message && (
        <Message negative data-cy="message">
          <Message.Header>{message}</Message.Header>
        </Message>
      )}
    </>
  );
};

export default Authentication;

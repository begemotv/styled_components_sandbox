import React, { useState } from 'react';
import {PageLayout, Input} from '../../components';
import styled from 'styled-components';

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: white;
  border: 1px solid #eee;
  padding: 16px;
  box-sizing: border-box;
  color: black;
  border-radius: 4px;
`;

const Login = () => {
  const [formFields, setFormFields] = useState({username: '', password: ''})

  const handleInputChange = (evt) => {
    evt.preventDefault();
    setFormFields(formFields => ({...formFields,
      [evt.target.name]: evt.target.value
    }))
  }

  return (
    <PageLayout>
      <h1>Login</h1>
      <Form>
        <Input 
          name="username" 
          placeholder="username"
          onChange={handleInputChange}
          value={formFields.username}
          type="text"
        />
        <Input 
          name="password" 
          placeholder="password"
          onChange={handleInputChange}
          value={formFields.password}
          type="password"
        />
      </Form>
    </PageLayout>
  )
}

export default Login;
import React, { useEffect, useState } from 'react';
import {PageLayout, Input, PasswordInput, Button, Spinner} from '../../components';
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

  .alt-text {
    text-align: center;
    margin: 10px 0;
  }
`;

let timeout;

const Login = () => {
  const [formFields, setFormFields] = useState({username: '', password: ''});
  const [loading, setLoading] = useState(false);

  const handleInputChange = (evt) => {
    evt.preventDefault();
    setFormFields(formFields => ({...formFields,
      [evt.target.name]: evt.target.value
    }))
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setLoading(true);
    timeout = setTimeout(() => {
      setLoading(false)
    }, 2000)
  }

  useEffect(() => {
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
     }
  }, [])

  return (
    <PageLayout>
      <h1>Login</h1>
      <Form onSubmit={(evt) => handleSubmit(evt)}>
        {loading ? <Spinner /> :
        <>
          <Input 
            name="username" 
            placeholder="username"
            onChange={handleInputChange}
            value={formFields.username}
            type="text"
          />
          <PasswordInput 
            name="password" 
            onChange={handleInputChange}
            value={formFields.password}          
          />
        </>
        }
        <Button large type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Login'}
        </Button>
        {!loading &&
        <>
          <div className="alt-text">
            or
          </div>
          <Button secondary type="button">
            Register
          </Button>
        </>
        }
      </Form>
    </PageLayout>
  )
}

export default Login;
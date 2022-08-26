import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import app from "../../firebase.init";
import Google from "../Google/Google";
 

const auth = getAuth(app);

const Login = () => {
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const [registered,setRegistered]=useState(false)


const handleCheckBox=event=>{
  setRegistered(event.target.Checked);
  }
const handleEmail=e=>{
   setEmail(e.target.value);
   
}

const handlePassword=e=>{
    const password=e.target.value;
 setPassword(password);
}

const handleSubmit=event=>{
  
  if(registered){
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
    console.log(error);
    });
  }
  else{

 
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
  console.log(user);
  })
  .catch((error) => {
    console.log(error);
 
  });
}
event.preventDefault();

}


    return (
      <div className='w-50 mx-auto mt-5'>
        <Google ></Google>
            <Form onSubmit={handleSubmit}>
              <h1 className='mt-5'>Please {registered? "Login":"Register"}</h1>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3">
        <Form.Check onChange={handleCheckBox}
          required
          label="Agree to terms and condition"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>

  <Button variant="primary" type="submit">
  {registered? 'Login':' Register'}
  </Button>
  <div className='mt-5'>
  
  </div>
  
</Form>
      </div>
    );
};

export default Login;
import React, { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from '../../firebase.init';
import { ButtonToolbar } from 'react-bootstrap';

const auth = getAuth();

const Google = () => {
    const [user,setUser]=useState({});

    const provider = new GoogleAuthProvider();
    const handleGoogleSignIn=()=>{
       

const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
         const user = result.user;
         setUser(user)
 console.log(user);
  }).catch((error) => {
    
    console.error(error);
   
  });
        console.log('working');
    }

     const handleToSignOut=()=>{
        signOut(auth).then(() => {
           setUser({})
          }).catch((error) => {
            setUser({})
          });
     }
    return (
        <div>
          {user.uid? 
         <button onClick={handleToSignOut}>SignOut</button> : <button onClick={handleGoogleSignIn}>Google</button> }
            <h1>{user.displayName}</h1>
           {user.photoURL} 
        </div>
    );
};

export default Google;
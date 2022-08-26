import { getAuth } from 'firebase/auth';
import React from 'react';
import app from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
const auth = getAuth(app);
const GoogleSignIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if(user){
        console.log(user);
    }
    return (
        <div className='text-center'>
            <h1>Google sign In</h1>
            <button onClick={()=>signInWithGoogle()} className='btn btn-primary' >Sign IN Google</button>
        </div>
    );
};

export default GoogleSignIn;
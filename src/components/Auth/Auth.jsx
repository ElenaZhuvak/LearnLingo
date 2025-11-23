import { useState } from 'react';
import { auth, googleProvider } from '../../firebase-config.js';
import { createUserWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';

const Auth = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const signIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.error(error)
        }
        
    };

    console.log(auth?.currentUser?.email);

// * Sign In with Google 
    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (error) {
            console.error(error);
        }
    }
    console.log(auth?.currentUser?.photoURL);

///////////////////

    const logout = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error(error);
        }
    }


  return (
    <div>
        <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />

        <button onClick={signIn}>Sign In</button>
        <button onClick={signInWithGoogle}>Sign In With Google</button>
        <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Auth;
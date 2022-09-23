import React from 'react';
import {Link,useHistory} from 'react-router-dom';
import { useState } from 'react';
import './Login.css'
// import {auth} from './firebase'

function Login() {
    const history = useHistory();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const signIn = e => {
        e.preventDefault();

        // auth
        //     .signInWithEmailAndPassword(email, password)
        //     .then(auth => {
        //         history.push('/')
        //     })
        //     .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        // auth
        //     .createUserWithEmailAndPassword(email, password)
        //     .then((auth) => {
        //         // it successfully created a new user with email and password
        //         if (auth) {
        //             history.push('/')
        //         }
        //     })
        //     .catch(error => alert(error.message))
    }
  return (
    <div className='login'>
        <Link to ='/'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png" alt="logo" className="login__logo" />
        </Link>
        <div className="login__container">
            <h1>Sign in</h1>
            <form>
             <h5>E-mail</h5>
             <input type='email' value={email} onChange={((e)=>setEmail(e.target.value))}></input>

             <h5>Password</h5>
             <input type='password' value={password} onChange={((e)=>setPassword(e.target.value))}></input>
             <button className='login__signInButton' type='submit'onClick={signIn}>Sign In</button>
            </form>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam aspernatur nemo tempora voluptatibus odit ullam.</p>
            <button className='login__regiterButton'  onClick={register}>Create Your Amazon account</button>
        </div>



    </div>

  )
}

export default Login
import React, { useState } from 'react'
import "./Login.css";
import axios from 'axios';
import { useNavigate } from 'react-router';

function Login() {
    
    const history = useNavigate();

    // email
    const [email, setEmail] = useState("");
    function userEmail(e) {
        setEmail(e.target.value)
    }
    // password
    const [password, setPassword] = useState("");
    function userPassword(e) {
        setPassword(e.target.value)
    }

    // Handling submission 
    async function handleOnClick(e) {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8000/login", {
                email, password
            })
            .then(res=> {
                if(res.data=="notexist"){
                    console.log("user does not exist in the database");
                }else{
                    console.log(res);
                    localStorage.setItem("login", JSON.stringify({
                        login:true,
                        token:res.data.accessToken
                    }))
                    history("/", {state:{name:res.data.name}});
                    // console.log(state.name);
                }
            })
            .catch(e=>{
                console.log(e);
            })
        } catch (error) {
            console.log(error);
            alert("something went wrong");
        }
    }
    return (
        <div className='main-div'>
        <div class="container">
        <div class="header">
            <h2>Login</h2>
        </div>
            <form class="form" id="form">
            <div class="form-control">
                <label for="">Email</label>
                <input type="email" placeholder="info@email.com" id="email" onChange={userEmail}/>
                <i class="fas fa-check-circle"></i>
                <i class="fas fa-exclamation-circle"></i>
                <small>Error message</small>
            </div>
            <div class="form-control">
                <label for="">Password</label>
                <input type="password" placeholder="Password" id="password" onChange={userPassword}/>
                <i class="fas fa-check-circle"></i>
                <i class="fas fa-exclamation-circle"></i>
                <small>Error message</small>
            </div>
            <button type='submit' onClick={handleOnClick}>Submit</button>
            <div className='already'>
                Don't have a account?<a href="/signup"> Signup</a>
            </div>
            </form>
        <div class="message hidden">
            <p>Submitted! 🎉</p>
        </div>
  </div>
        </div>
  )
}

export default Login

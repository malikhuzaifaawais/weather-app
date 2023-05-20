import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./Login.css"

function Signup() {

    const history = useNavigate();

    // username
    const [name, setName] = useState("");
    function userName(e) {
        setName(e.target.value)
    }

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

    // confirm password
    const [cPassword, setCPassword] = useState("");
    function userCPassword(e) {
        setCPassword(e.target.value)
    }

    // Submit the form to mongodb
    async function handleOnClick(e) {
        e.preventDefault();
        try {
            console.log("trying...");
            await axios.post("http://localhost:8000/signup", {
                name, email, password, cPassword
            })
            .then(res=>{
                // console.log(".then");
                if(res.data=="exist"){
                    alert("user already exist")
                }else if(res.data=="notexist"){
                    history("/login")
                    console.log("user does not exist");
                }
            })
            .catch(e => {
                alert("wrong details")
                console.log(e);
            })
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div class="container">
  <div class="header">
      <h2>Create Account</h2>
  </div>
  <form class="form" id="form">
      <div class="form-control">
          <label for="">Username</label>
          <input type="text" placeholder="username" id="username" onChange={userName} />
          <i class="fas fa-check-circle"></i>
          <i class="fas fa-exclamation-circle"></i>
          <small>Error message</small>
      </div>
      <div class="form-control">
          <label for="">Email</label>
          <input type="email" placeholder="info@email.com" id="email" onChange={userEmail} />
          <i class="fas fa-check-circle"></i>
          <i class="fas fa-exclamation-circle"></i>
          <small>Error message</small>
      </div>
      <div class="form-control">
          <label for="">Password</label>
          <input type="password" placeholder="Password" id="password" onChange={userPassword} />
          <i class="fas fa-check-circle"></i>
          <i class="fas fa-exclamation-circle"></i>
          <small>Error message</small>
      </div>
      <div class="form-control">
          <label for="">Confirm Password</label>
          <input type="password" placeholder="Confirm Password" id="confirmpassword" onChange={userCPassword}/>
          <i class="fas fa-check-circle"></i>
          <i class="fas fa-exclamation-circle"></i>
          <small>Error message</small>
      </div>
      <button type='submit' onClick={handleOnClick}>Submit</button>
      <div className='already'>
          Already have a account?<a href="/login"> login</a>
      </div>
  </form>
  <div class="message hidden">
      <p>Submitted! 🎉</p>
  </div>
</div>
)
}

export default Signup

import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const AuthentificationSignUp = (props) => {
  const navigate=useNavigate()
  const [nameVal,setNameval]=useState("")
  const [emailval,setEmailval]=useState("")
  const [passwordVal,setPasswordval]=useState("")
  return (
    <div className='container_card'>

<div class="form-box">
<form class="form">
    <span class="title">Sign up</span>
    <span class="subtitle">Create a free account with your email.</span>
    <div class="form-container">
      <input  onChange={(e)=>setNameval(e.target.value)} type="text" class="input" placeholder="Full Name"/>
			<input  onChange={(e)=>setEmailval(e.target.value)} type="email" class="input" placeholder="Email"/>
			<input  onChange={(e)=>setPasswordval(e.target.value)} type="password" class="input" placeholder="Password"/>
    </div>
    <button className="btnsignUp" onClick={()=>{props.signIn(nameVal,emailval,passwordVal) ,navigate("/")}} >Sign up</button>
    {nameVal !=="" && emailval !== "" && passwordVal !== "" ? <div class="alert alert-success d-flex align-items-center" role="alert">
  <img class="bi flex-shrink-0 me-2" role="img" aria-label="Success:"/>
  <div>
    An example success alert with an icon
  </div>
</div>
:<div class="alert alert-danger d-flex align-items-center" role="alert">
<img class="bi flex-shrink-0 me-2" role="img" aria-label="Danger:"/>
<div>
  An example danger alert with an icon
</div>
</div>}
    
</form>
<div class="form-section">
  <p onClick={()=>navigate("/")} >Have an account? <a href="">Log in</a> </p>
</div>
</div>
</div>




  )}
  export default AuthentificationSignUp
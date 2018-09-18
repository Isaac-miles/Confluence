import React from 'react'

import classes from './Signup.css'
import {Link} from 'react-router-dom'

const Login =(props)=>{
    
    return(
  
    <div>
        <main className={classes.Main} >

    <div className={classes.LoginBox }>
    <img className={classes.Img} src="../../assets/images/me.jpg" alt=""/>

            <h1>Create Account</h1>
  <form action="">
      <p>Email</p>
      <input type="email" name="" placeholder="Email"/>

      <p>Username</p>
      <input type="text" name="" placeholder="Username"/>

      <p>Password</p>
    <input type="password" name="" placeholder=" Enter Password"/>

     <p>Repeat Password</p>
    <input type="password" name="" placeholder="Repeat Password"/>
	<label >
	<span >I agree to the <Link to="/signup"> Terms of Users</Link>	</span>					
   </label>
   <input type="checkbox" name="ckb1"/>
    <input type="submit" name="" value="Register"  />
    <Link to="/login">Login</Link>

  </form>


</div>
</main>
</div>
    );
}
export default Login;


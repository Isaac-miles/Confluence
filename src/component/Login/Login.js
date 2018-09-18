import React from 'react'

import classes from './Login.css'
import {Link} from 'react-router-dom'

const Login =(props)=>{

   const Login =()=>{

        props.history.push('/dashboard');
    }

    return(
  
    <div>
        <main className={classes.Main} >

    <div className={classes.LoginBox }>
    <img className={classes.Img} src="../../assets/images/me.jpg" alt=""/>

            <h1>Login your Account</h1>
  <form action="">
      <p>Username</p>
      <input type="text" name="" placeholder="Username or Email"/>
      <p>Password</p>
    <input type="password" name="" placeholder=" Enter Password"/>
    <input type="submit" name="" value="Login"  onClick={Login}/>
    <Link to="/">Lost password?</Link><br/>
    <Link to="/signup">Sign up</Link>

  </form>


</div>
</main>
</div>
    );
}
export default Login;


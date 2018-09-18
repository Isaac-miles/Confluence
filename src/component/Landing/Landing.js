import React,{Component} from 'react';

import classes from './Landing.css'
import {Link} from 'react-router-dom'

class Landing extends Component{
state ={
    show:false
}

   

    render(){
     
        return(

            <div className={classes.Intro}>
             
                  <section className={classes.Inner}>
                  <section className={classes.Content} >
                        <h1>Confluence Express Service</h1>
                <Link to="/signup" className={classes.Button}>Sign Up</Link><br/>
                <Link to='/login' className={classes.Button2}>Book Trip</Link>
    
    
                </section> 


                </section> 
            
            </div>
    
    
        );
    }
    

}

export default Landing;
import React from 'react';

import classes from './Navbar.css'


const Navbar =()=>{
    return(
        <nav className={classes.Navbar}>
         <ul>
        <li><a href="/">home</a></li>
        <li><a href="/">cse experience</a></li>
        <li><a href="/">Info</a>
        <ul>
            <li><a href="/">admin</a></li>
            <li><a href="/">customer care</a></li>
            <li><a href="/">clients</a></li>
        </ul>
        </li>
        <li><a href="/">pickUp service</a></li>


</ul>
        <div className={classes.Svg}/>
        <div className={classes.Svg}/>
        <div className={classes.Svg}/>

      
        </nav>
    );
}
export default Navbar;
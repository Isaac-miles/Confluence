import React from 'react';

import classes from './Toolbar.css';
import Navbar from './Navbar/Navbar'
const Toolbar =(props)=>{
    return(
<div>
<header className={classes.Header}>
    <a href="/" className={classes.Logo}>CES<span>&hearts;</span></a>
       <Navbar />
</header>
<hr className={classes.Hr}/>
</div>

    );
}
export default Toolbar;
import React from 'react';

import classes from './Article.css'

const article =(props)=>{
    return (
        <article className={classes.Article}>

        <div className={classes.Info}>
         <h2>{props.title}</h2>
         <div className={classes.Author}>{props.author}</div>
        
        </div>

        </article>
    );
}
export default article;
import React from 'react';

import Classes from './Footer.css'

 const footer =()=>{
    return(
        <div>
        
        <footer className={Classes.Footer}>
                <div >
                        
                           
                            
                            
                            <div  className={Classes.myfoot}>
                                   
                                <h2>Conact us</h2>
                                    <p>Kondi do your work</p>
                                     
                                    
                                   
                            </div>
                            
                            <div  className={Classes.myfoot}>
                                   <h2>David Isaac </h2>
                          <a href="/" className="fa fa-facebook"> </a>
                          <a href="/" className="fa fa-twitter"> </a>
                          <a href="/" className="fa fa-youtube"> </a>
                          <a href="/" className="fa fa-instagram"> </a>
                          <a href="/" className="fa fa-google"> </a>
                            </div>
                            
                            </div>
                    
                            
                    
                            <footer className={Classes.F}>
                                    <h2>BaBa Ali make this page responsive</h2>
                                </footer>
        </footer>
            </div>
    );
 }
export default footer;
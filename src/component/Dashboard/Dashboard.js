import React,{Component} from 'react';

import classes from './Dashboard.css';
import Header from './Header/Header';
import Articles from './Articles/Articles';

class Dashboard extends Component{

   

    render(){
        
        return(

            <div className={classes.Board}>
            <Header />
            <div  className={classes.Boardboard}>
            <ul>
                <h2 className={classes.h}>Services</h2>
                <hr style={{margin:"10px"}}/>
                <li><a href="/trips">Routs</a></li>
                <li><a href="/trips">Status</a></li>
                <li><a href="/trips">Trips</a></li>
                <li><a href="/trips">Rent</a></li>
                <li><a href="/trips">Book a Ticket</a></li>
                <li><a href="/trips">Booking Status</a></li>
                <li><a href="/trips">One Way</a></li>
                <li><a href="">Round Trip</a></li>

            </ul>
            </div>
                        <div  className={classes.Boardboard1}>
                        <span>Welcome David@gmail.com</span>
                        <Articles/>

                        </div>
            </div>
        );
    }
}
export default Dashboard;
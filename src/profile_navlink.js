import React,{Component} from "react";
import { Card, CardBody } from "shards-react";
import pic from "../src/img/pic.jpg";
import { NavLink} from 'react-router-dom';

class Profilenavlink extends Component {
    render(){
      return(
        <div>
        <Card className="shadow-sm p mb-5 bg-white rounded border-0 ">
            <CardBody className="p-0 pt-3">
             <div className="text-center">
              <img className="rounded-circle " src={pic} alt="prashant" width="80px"/> 
               <div><h5 className="mt-3">Prashant Katiyar</h5></div>
              <div> <span><h6>Professional  | Adventurous </h6></span> </div>
              <div> <span><h6> <i className="fas fa-map-marker-alt px-1 text-dark"></i>Bengaluru ,India</h6></span></div>
               <div ><i className="fab fa-facebook-square  "></i> <i className="fab fa-twitter px-2"></i> <i className="fab fa-linkedin"></i> </div>
               <div className="mt-3">
               <button type="button" className="btn btn-outline-danger btn-sm mb-3 px-3 p-0  "style={{borderRadius:"15px"}}>Chat</button>
               </div>
               <div>    
               </div> 
             </div>
             <div className="border-top p-3">
             <ul className="navbar-nav">
                <li className="nav-item">
                <NavLink className="text-decoration-none" to="/" exact><h6>Profile</h6></NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="text-decoration-none" to="/portfolio" exact><h6>Portfolio</h6></NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="text-decoration-none" to="/certificate" exact><h6>Certificates/Achievement</h6></NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="text-decoration-none" to="/update" exact><h6>Update</h6></NavLink>
                </li>
            </ul>
            </div>
            </CardBody>
          </Card>
       
    </div>
      );
    }
  }
  
  export default Profilenavlink;
 
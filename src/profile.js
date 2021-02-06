import React,{Component} from "react";
import { } from "shards-react";
import pic from "../src/img/pic.jpg";

class Profile extends Component {
    render(){
      return(
      <div >
           
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
  

      </div>
      );
    }
  }
  
  export default Profile;
 
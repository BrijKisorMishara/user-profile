import React,{Component} from "react";
import { Col, Card, CardBody} from "shards-react";
import pic from "../src/img/pic.jpg";

class Sideprofile extends Component {
    render(){
      return(
      <div >
        <Col>
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
                <a className="nav-link" href="./"><h6>Profile</h6></a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="./"><h6>Portfolio</h6></a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="./"><h6>Certificates/Achievement</h6></a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="./"><h6>Updates</h6></a>
                </li>
            </ul>
            </div>

            </CardBody>
          </Card>
        </Col> 
      </div>
      );
    }
  }
  
  export default Sideprofile;
 
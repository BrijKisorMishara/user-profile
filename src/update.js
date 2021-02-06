import React,{Component} from "react";
import { Card, CardImg } from "shards-react";
import Update1 from "../src/img/update1.jpg";
class Update extends Component {
    render(){
      return(
        <div>
        <h4 className=" pb-3 text-danger">Update</h4>
        <div className="row">
            <div className="col-md-4 p-2">
              <Card>
                  <CardImg top src={Update1} height="100px" />
                 
                  <p className="p-2">This is the body of the card.</p>
                 
              </Card> 
            </div>
            <div className="col-md-4 p-2">
              <Card>
                  <CardImg top src={Update1} height="100px" />
                 
                  <p className="p-2">This is the body of the card.</p>
                  
              </Card> 
            </div>
            <div className="col-md-4 p-2">
              <Card>
                  <CardImg top src={Update1} height="100px" />
                  
                  <p className="p-2">This is the body of the card.</p>
                
              </Card> 
            </div>
        </div>
        <div className="row mt-2" >
            <div className="col-md-4 p-2">
              <Card>
                  <CardImg top src={Update1} height="100px"/>
                 
                  <p className="p-2">This is the body of the card.</p>
                
              </Card> 
            </div>
            <div className="col-md-4 p-2">
              <Card>
                  <CardImg top src={Update1} height="100px" />
                
                  <p className="p-2">This is the body of the card.</p>
                
              </Card> 
            </div>
            <div className="col-md-4 p-2" >
              <Card>
                  <CardImg top src={Update1} height="100px" />
                 
                  <p className="p-2">This is the body of the card.</p>
              
              </Card> 
            </div>
        </div>
       
    </div>
      );
    }
  }
  
  export default Update;
 
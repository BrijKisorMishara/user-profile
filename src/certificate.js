import React,{Component} from "react";
import { Card, CardImg } from "shards-react";
import Cer1 from "../src/img/cer1.jpg";
class Certificates extends Component {
    render(){
      return(
      <div>
          <h4 className=" pb-3 text-danger">Certificates</h4>
          <div className="row">
              <div className="col-md-4 p-2">
                <Card>
                    <CardImg top src={Cer1} height="100px" />
                    <p className="p-2">This is the body of the card.</p> 
                </Card> 
              </div>
              <div className="col-md-4 p-2">
                <Card>
                    <CardImg top src={Cer1} height="100px" />
                    <p className="p-2">This is the body of the card.</p> 
                </Card> 
              </div>
              <div className="col-md-4 p-2">
                <Card>
                    <CardImg top src={Cer1} height="100px" />
                    <p  className="p-2">This is the body of the card.</p>    
                </Card> 
              </div>
          </div>
          <div className="row mt-2" >
              <div className="col-md-4 p-2">
                <Card>
                    <CardImg top src={Cer1} height="100px" />
                    <p  className="p-2">This is the body of the card.</p>
                </Card> 
              </div>
              <div className="col-md-4 p-2">
                <Card>
                    <CardImg top src={Cer1} height="100px" />
                    <p  className="p-2">This is the body of the card.</p>
                </Card> 
              </div>
              <div className="col-md-4 p-2">
                <Card>
                    <CardImg top src={Cer1} height="100px" />
                    <p  className="p-2">This is the body of the card.</p>
                </Card> 
              </div>
          </div>
         
      </div>
      );
    }
  }
  
  export default Certificates;
 
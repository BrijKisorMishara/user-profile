import React,{Component} from "react";
import { Card, CardImg, Modal,} from "shards-react";
import pic1 from "../src/img/pic1.jpg";
import pic2 from "../src/img/pic2.jpg";
import pic3 from "../src/img/pic3.jpg";
import pic5 from "../src/img/pic5.jpg";
import pic6 from "../src/img/pic6.jpg";
class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.toggle = this.toggle.bind(this);
    this.toggle1 = this.toggle1.bind(this);
  }
  toggle() {
    this.setState({
      open: !this.state.open
    });
  }
  toggle1() {
    this.setState({
      open: !this.state.open
    });
  }
    render(){
      const { open } = this.state;
      
      return(
      <div>
        <Modal className="modal-lg" open={open} toggle={this.toggle}>
            <Card >
                <CardImg top src={pic1} height="300px" />
                  <div><h6 className="pl-2 pr-2 pt-2">Rodney Brokes on Atificial</h6></div>
                  <div class="d-flex">
                    <div class="pl-2 pr-2 mr-auto text-danger "><p>Artificial inteligence</p></div>
                    <div class="pl-2 pr-2 text-muted"><p><i class="fas fa-eye text-dark"></i> 232</p></div>
                  </div> 
              </Card>
        </Modal>
        <Modal className="modal-lg" open={open} toggle={this.toggle1}>
            <Card >
                <CardImg top src={pic2} height="300px" />
                  <div><h6 className="pl-2 pr-2 pt-2">Rodney Brokes on Atificial</h6></div>
                  <div class="d-flex">
                    <div class="pl-2 pr-2 mr-auto text-danger "><p>Artificial inteligence</p></div>
                    <div class="pl-2 pr-2 text-muted"><p><i class="fas fa-eye text-dark"></i> 232</p></div>
                  </div> 
              </Card>
        </Modal>
  
        <h4 className="font-weight-blod text-danger mb-3">Portfolio</h4>
        <div className="row">
          <div className="col-md-3 p-2">
          <Card onClick={this.toggle}>
            <CardImg top src={pic1} height="100px" />
              <div><h6 className="pl-2 pr-2 pt-2">Rodney Brokes on Atificial</h6></div>
              <div class="d-flex">
                <div class="pl-2 pr-2 mr-auto text-danger "><p>Artificial inteligence</p></div>
                <div class="pl-2 pr-2 text-muted"><p><i class="fas fa-eye text-dark"></i> 232</p></div>
              </div> 
          </Card>
          </div>


          <div className="col-md-3 p-2">
          <Card onClick={this.toggle1}>
            <CardImg top src={pic2} height="100px" />
            <div><h6 className="pl-2 pr-2 pt-2">Rodney Brokes on Atificial</h6></div>
              <div class="d-flex">
                <div class="pl-2 pr-2 mr-auto text-danger "><p>Hackthon</p></div>
                <div class="pl-2 pr-2 text-muted"><p><i class="fas fa-eye text-dark"></i> 232</p></div>
              </div>
            
          </Card>
          </div>
          <div className="col-md-3 p-2">
          <Card>
            <CardImg top src={pic3} height="100px" />
            <div><h6 className="pl-2 pr-2 pt-2">Rodney Brokes on Atificial</h6></div>
              <div class="d-flex">
                <div class="pl-2 pr-2 mr-auto text-danger "><p>Coding</p></div>
                <div class="pl-2 pr-2 text-muted"><p><i class="fas fa-eye text-dark"></i> 232</p></div>
              </div>
            
          </Card>
          </div>
          <div className="col-md-3 p-2">
          <Card>
            <CardImg top src={pic6} height="100px"  />
            <div><h6 className="pl-2 pr-2 pt-2">Rodney Brokes on Atificial</h6></div>
              <div class="d-flex">
                <div class="pl-2 pr-2 mr-auto text-danger "><p>Machinelearning</p></div>
                <div class="pl-2 pr-2 text-muted"><p><i class="fas fa-eye text-dark"></i> 232</p></div>
              </div>
            
          </Card>
          </div>
          
          </div>
          <div className="row ">
            <div className="col-md-3 p-2"><Card>
            <CardImg top src={pic3} height="100px" />
            <div><h6 className="pl-2 pr-2 pt-2">Rodney Brokes on Atificial</h6></div>
              <div class="d-flex">
                <div class="pl-2 pr-2 mr-auto text-danger "><p>Artificial inteligence</p></div>
                <div class="pl-2 pr-2 text-muted "><p><i class="fas fa-eye text-dark"></i> 232</p></div>
              </div>
            
          </Card></div>
            <div className="col-md-3 p-2"><Card>
            <CardImg top src={pic2} height="100px" />
            <div><h6 className="pl-2 pr-2 pt-2">Rodney Brokes on Atificial</h6></div>
              <div class="d-flex">
                <div class="pl-2 pr-2 mr-auto text-danger "><p>Artificial inteligence</p></div>
                <div class="pl-2 pr-2 text-muted"><p><i class="fas fa-eye text-dark"></i> 232</p></div>
              </div>
            
          </Card></div>
            <div className="col-md-3 p-2"><Card>
            <CardImg top src={pic5} height="100px" />
            <div><h6 className="pl-2 pr-2 pt-2">Rodney Brokes on Atificial</h6></div>
              <div class="d-flex">
                <div class="pl-2 pr-2 mr-auto text-danger "><p>Artificial inteligence</p></div>
                <div class="pl-2 pr-2 text-muted"><p><i class="fas fa-eye text-dark"></i> 232</p></div>
              </div>
            
          </Card></div>
            <div className="col-md-3 p-2"><Card>
            <CardImg top src={pic5} height="100px" />
            <div><h6 className="pl-2 pr-2 pt-2">Rodney Brokes on Atificial</h6></div>
              <div class="d-flex">
                <div class="pl-2 pr-2 mr-auto text-danger "><p>Artificial inteligence</p></div>
                <div class="pl-2 pr-2 text-muted"><p><i class="fas fa-eye text-dark"></i> 232</p></div>
              </div>
            
          </Card>
          </div>
          </div>
      </div>
      );
    }
  }
  
  export default Portfolio ;
 
import React,{Component} from "react";
import { Card } from "shards-react";
import Portfolio  from './portfolio';
import Profile from  "./profile";
import Certificates from "./certificate";
import Update from './update';
import { BrowserRouter as Router,} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Profilenavlink from './profile_navlink';
class Routing extends Component {
render(){
return(
  <div>
      <Router>
        <div className="container mt-4">
             <div className="row">
                    <div className="col-md-3">
                        <Profilenavlink/>
                    </div>

                    <div className="col-md-9">
                            <Route path="/" exact strict render={
                            () => {
                                return ( 
                                <div>
                                    <Card className="p-3 border-0" >
                                    <Profile/>
                                    </Card>
                                </div>);
                            }
                            }/>
                            <Route path="/portfolio" exact strict render={
                            () => {
                                return ( 
                                <div>
                                <Card className="p-3 border-0">
                                <Portfolio/>
                                </Card>
                                </div>
                                )
                            }
                            
                            }/>
                            <Route path="/certificate" exact strict render={
                            () => {
                                return (
                                <div>
                                    <Card  className="p-3 border-0">
                                    <Certificates/> 
                                    </Card>
                                </div>
                                )}
                            
                            }/>
                            <Route path="/update" exact strict render={
                            () => {
                                return (
                                <div>
                                    <Card  className="p-3 border-0">
                                    <Update/> 
                                    </Card>
                                </div>
                                )}
                            }/>
                            </div>
                            </div>
                            </div>
                        </Router>        
        </div>
      );
    }
  }
  
  export default Routing;
 
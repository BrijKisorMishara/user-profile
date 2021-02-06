import React ,{Component}  from 'react';
import {} from "shards-react";
import './sass/App.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import Routing from "./routing";
import Mainavbar from './navbar';
class App extends Component { 
render(){
  return(
      <div>
        <Mainavbar/>
         <Routing/>
        
        </div>
      );
    }
 }
export default App;
 
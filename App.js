import React from 'react';
import './App.css';
import Utama from './Components/utama';
import {Link} from 'react-router-dom';

class App extends React.Component {
  render(){
    return(
      <div>
          <a href="/belanja" class="text-light"></a> 

          <p><Utama /></p>
      </div>
    );
  }
}
export default App;

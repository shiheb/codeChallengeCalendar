import React from 'react';
import ReactDOM from 'react-dom';
import './index1.css';
import App1 from './ComplexComplex';
import Agenda from './agenda/agenda.js';
import Agenda2 from './agenda/agenda2.js';
import registerServiceWorker from './registerServiceWorker';

class App extends React.Component {

   constructor(props) {

      super(props);
      this.state = {
        items: [],
        isLoaded: false,
      }

    }
render(){

  return (
   
    <div className="App">
       
      <App1/>
      <Agenda/>
       
    </div>

  );
}

}
export default App;
import './index.css';
import './index';
import Columnone from './Column-one';
import Columntwo from './Column-two';


function App() {
  return (
    <div className="App">
      <div className="column">
        <Columnone />  
      </div> 
      <div className="column">    
        <Columntwo />
      </div>
    </div>
  );
}

export default App;

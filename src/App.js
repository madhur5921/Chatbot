import './App.css';
import Rightsection from './Components/Right_Section';
import Leftsection from './Components/Left_Section';

function App() {
  return (
    <div className="mainpage">

      <div className='leftout'>
        <Leftsection/>
      </div>
      
      <div className='rightout'>
        <Rightsection/>
      </div>
    </div>
  );
}

export default App;

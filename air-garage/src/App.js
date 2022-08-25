
import './App.css';
import LargeWithLogoCentered from './Components/BasicComp/Footer';
import SplitScreen from './Components/BasicComp/Login';

import Nav from './Components/BasicComp/Navbar';
import LandingPage from './Components/LandingPage/LandingPage';
import AllRoute from './Components/Routes/AllRoute';

function App() {
  return (
    <div className="App">
   
     <Nav/>
     <AllRoute/>
     <LargeWithLogoCentered/>
    
     
    </div>
  );
}

export default App;

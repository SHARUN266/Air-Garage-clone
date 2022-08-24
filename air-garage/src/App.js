
import './App.css';
import LargeWithLogoCentered from './Components/BasicComp/Footer';
import Nav from './Components/BasicComp/Navbar';
import LandingPage from './Components/LandingPage/LandingPage';

function App() {
  return (
    <div className="App">
     <Nav/>
     <LandingPage/>
     <LargeWithLogoCentered/>
     
    </div>
  );
}

export default App;

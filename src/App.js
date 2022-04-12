import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';

let name="Pratiksha"
function App() {
  return (
    <>

    <Navbar title="Pratiksha"></Navbar>
    <div className="container">
    <About></About>
    </div>
    
    </>
  );
}

export default App;

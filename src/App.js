import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

let name="Pratiksha"
function App() {
  return (
    <>

    <Navbar title="Pratiksha"></Navbar>
    <div className="container">
    <TextForm heading="Enter the text to analyze"></TextForm>
    </div>
    
    </>
  );
}

export default App;

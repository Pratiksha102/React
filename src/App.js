import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';


let name="Pratiksha"
function App() {
  return (
    <>
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>
    <h1>Hello {name}</h1>
    <div className="container">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem iure explicabo tenetur? Harum distinctio et qui earum deserunt quibusdam, aperiam aut perspiciatis repudiandae maiores minus laudantium ab necessitatibus incidunt repellendus?
    </div>
    <Navbar title="Pratiksha"></Navbar>
    </>
  );
}

export default App;

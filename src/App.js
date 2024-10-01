import logo from './logo.svg';
import './App.css';

const Header = () => {
  return <h2>Hello There!</h2>
}

const Field = () => {
  const styleField = {
    width: '300px'
  }
  return <input 
          placeholder="Type Here" 
          type="text" 
          style={styleField} />
}

function Btn() {
  return <button className="btn">HEHE</button>
}
function App() {
  return (
  <div className="App">
    <Header />
    <Field />
    <Btn />
  </div>
  );
}

export default App;

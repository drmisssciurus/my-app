import { Component } from 'react';
import './App.css';

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 27,
      position: ''
    }
  }

  nextYear = () => {
    this.setState(state => ({
      years: state.years + 1
    }))
  }

  commitInputChanges = (e) => {
    this.setState({
      position: e.target.value
    })
  }

  render() {
    const {name, surname, link} = this.props;
    const {position, years} = this.state;

    console.log(this);
    
    return (
      <div>
        <button onClick={this.nextYear}>+++</button>
        <h1>My name is {name}, surname - {surname}, 
            age - {years},
            position - {position}</h1>
        <a href={link}>My Profile</a>
        <form>
          <span>Put Profession</span>
          <input type="text" onInput={this.commitInputChanges}/>
        </form>
      </div>
    )
  }
}

// const Header = () => {
//   return <h2>Hello There!</h2>
// }

// const Field = () => {
//   const styleField = {
//     width: '300px'
//   }
//   return <input 
//           placeholder="Type Here" 
//           type="text" 
//           style={styleField} />
// }

// function Btn() {
//   return <button className="btn">HEHE</button>
// }

function App() {
  return (
    <div className="App">
      <WhoAmI name="Alina" surname="Levintas" link="google.com" />  
      <WhoAmI name="Aragorn" surname="notForgotten" link="numenor.com" />
    </div>
  );
}

export default App;

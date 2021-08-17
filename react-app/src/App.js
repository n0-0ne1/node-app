import logo from './logo.svg';
import './App.css';
import Greet from './components/functional/Greet';
import NamedGreet from './components/functional/NamedGreet';
import Welcome from './components/class/welcome';
import Sample from './components/functional/Sample';
import Sample1 from './components/class/Sample1';

function App() {
  return (
    <div className="App">
      <h1> hi</h1>
      <Greet />
      <NamedGreet />
      <Welcome />
      <Sample />
      <Sample1 />

    </div>
  );
}

export default App;

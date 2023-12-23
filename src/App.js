import './App.css';
import Customer from './Customer';
import IncrementValue from './IncrementValue';
import Props from './Props';

function App() {
 
  const obj ={
    name: "Ankit",
    age: '24',
    color: "White",
    weight: "65kg"
  }

  return (
    <div className="App">
     {/* <IncrementValue /> */}
     {/* <Customer /> */}
     <Props data = {obj} />
    </div>
  );
}

export default App;
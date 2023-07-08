import React from 'react';
import './App.css';
import PersonCard from "./components/PersonCard";

function App() {

  // let JaneDoeAge = 45;
  // function increAge() { JaneDoeAge += }

  return (

    <div className="App">
      <PersonCard firstName="Jane" lastName="Doe" age={45} hairColor="Black" />
      {/* <button onClick={increAge(JaneDoeAge)}> Birthday button for Jane Doe </button> */}
      <PersonCard firstName="John" lastName="Smith" age={88} hairColor="Brown" />
      <PersonCard firstName="Millard" lastName="Fillmore" age={50} hairColor="Brown" />
      <PersonCard firstName="Maria" lastName="Smith" age={62} hairColor="Black" />



    </div >
  );
}

export default App;

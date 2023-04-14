import { useState } from 'react';
import Accordion from './Accordion ';
import './App.css';

function App() {
  const [active, setActive] = useState()
  return (
    <div className="App">
      <h1>Faq App</h1>
     <Accordion title="Question1" active={active} setActive={setActive}/>
     <Accordion title="Question2" active={active} setActive={setActive}/>
     <Accordion title="Question3" active={active} setActive={setActive}/>
     <Accordion title="Question4" active={active} setActive={setActive}/>
     <Accordion title="Question5" active={active} setActive={setActive}/>
    </div>
  );
}

export default App;

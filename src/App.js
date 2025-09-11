import './App.css';
import { useState } from 'react';
import BackAnimate from './BackAnimate';
import ResultLink from './ResultLink';

import ShorteningInput from './ShorteningInput';

function App () {
  const [inputValue, setInputValue] = useState("")
  return (
    <div className="Container">
      <ShorteningInput setInputValue={setInputValue}/> 
      <BackAnimate />
      <ResultLink inputValue={inputValue}/>
    </div>
  );
}

export default App;

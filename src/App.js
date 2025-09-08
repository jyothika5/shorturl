import './App.css';
import BackAnimate from './BackAnimate';
import ResultLink from './ResultLink';
import ShorteningInput from './ShorteningInput';

function App () {
  const [inputValue, setInputValue] = useState("")
  return (
    <div className="Container">
      <ShorteningInput/> 
      <BackAnimate />
      <ResultLink  inputValue={inputValue} />
    </div>
  );
}

export default App

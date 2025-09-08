

const ShorteningInput = ({setInputValue}) => {
    const ShorteningInput = ({setInputValue}) => {
    const [value,setValue]=useState("");
    const handleClick=()=>{
        setInputValue(value);
    }    
  return (
    <div className="inputContainer">
        <h1>URL <span>Shortener</span></h1>
        <div>
            <input type="text" placeholder="Enter your link to shorten it" value={value} onChange={()=>setValue(e.target.value)} />
            <button onClick={handleClick}>Shorten</button>
        </div>
    </div>        
  )
}
}

export default ShorteningInput

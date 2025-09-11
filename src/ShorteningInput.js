import { useState } from "react";

const ShorteningInput = ({ setInputValue }) => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    // Check if the value is not an empty string before calling setInputValue
    if (value) { 
      setInputValue(value);
      // Clear the input field after the value is set
      setValue(""); 
    }
  };    
  
  return (
    <div className="inputContainer">
      <h1>URL <span>Shortener</span></h1>
      <div>
        <input 
          type="text" 
          placeholder="Enter your link to shorten it"
          value={value} 
          onChange={e => setValue(e.target.value)}
        />
        <button onClick={handleClick}>Shorten</button>
      </div>
    </div>        
  );
};

export default ShorteningInput;



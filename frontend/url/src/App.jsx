import { useState } from "react"

export default function App() {

  const [originalUrl, setOriginalUrl] = useState("");

  const handleSubmit =  () => {
      console.log(originalUrl);
  }
  return (
    <div>

      <input
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
          type="text" name="originalUrl" id="originalUrl"/>
          <button type="button" className="bg-blue-500">Shorten</button>
    </div>
  )
}
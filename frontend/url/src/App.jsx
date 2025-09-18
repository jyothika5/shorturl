import { useState } from "react";
import axios from "axios";

export default function App() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleSubmit = () => {
    axios.post("http://localhost:3000/api/short", { originalUrl })
      .then((res) =>{
        setShortUrl(res.data.url.shortUrl);
        console.log("API Response:",res.data,url,shortUrl)
      })
      .catch((err) => console.error("API Error:", err));
  
  };

  return (
    <>
      <style>
        {`
        body, html, #root {
          margin: 0;
          padding: 0;
          height: 100%;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #f0f4f8, #d9e2ec);
          font-family: 'Inter', sans-serif;
        }

        .app-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          padding: 1rem;
        }

        .card {
          width: 100%;
          max-width: 500px;
          padding: 2.5rem;
          background-color: white;
          border-radius: 1rem;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .title {
          font-size: 2.25rem; /* 3xl */
          font-weight: 700; /* bold */
          text-align: center;
          color: #1f2937; /* gray-800 */
          margin-bottom: 1rem;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        @media (min-width: 640px) {
          .input-group {
            flex-direction: row;
          }
        }

        .input-field {
          flex-grow: 1;
          padding: 0.75rem 1rem;
          border: 1px solid #d1d5db; /* gray-300 */
          border-radius: 0.75rem;
          outline: none;
          transition: border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
          background-color: #f9fafb;
        }

        .input-field:focus {
          border-color: #4f46e5; /* indigo-600 */
          box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.2);
        }

        .button {
          width: 100%;
          padding: 0.75rem 1.5rem;
          color: white;
          font-weight: 600;
          background-color: #4f46e5; /* indigo-600 */
          border-radius: 0.75rem;
          border: none;
          cursor: pointer;
          transition: background-color 0.2s ease-in-out, transform 0.2s ease-in-out;
        }
        
        @media (min-width: 640px) {
          .button {
            width: auto;
          }
        }
        
        .button:hover {
          background-color: #4338ca; /* indigo-700 */
          transform: translateY(-2px);
        }
        
        .button:active {
          transform: translateY(0);
        }

        .result-box {
          padding: 1.25rem;
          background-color: #eef2ff; /* indigo-100 */
          border: 1px dashed #c7d2fe; /* indigo-200 */
          border-radius: 0.75rem;
          text-align: center;
          font-size: 1.125rem;
          font-weight: 500;
          color: #312e81; /* indigo-900 */
          word-break: break-all;
          transition: all 0.2s ease-in-out;
        }
        
        .result-box a {
          color: #312e81;
          text-decoration: none;
        } 
        `}
      </style>
      <div className="app-container">
        <div className="card">
          <h1 className="title">URL Shortener</h1>
          <div className="input-group">
            <input
              value={originalUrl}
              onChange={(e) => setOriginalUrl(e.target.value)}
              type="text"
              name="originalUrl"
              id="url-input"
              placeholder="Enter your URL here..."
              className="input-field"
            />
            <button onClick={handleSubmit} type="button" className="button">
              Shorten
            </button>
          </div>
          {shortUrl && (
            <div className="result-box">
              <a href={'http://localhost:3000/${shortUrl}'}
               target="_blank">
                {shortUrl}
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

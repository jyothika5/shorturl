import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

const ResultLink = ({ inputValue }) => {
  const [shortenLink, setShortenLink] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // Initialize with null

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      console.log("Fetching data for:", inputValue);
      const res = await axios(`https://api.shrtco.de/v2/shorten?url=${inputValue}`);
      setShortenLink(res.data.result.full_short_link);
      setError(null); // Clear any previous errors on a successful fetch
    } catch (err) {
      console.error("API Error:", err);
      setError(err); // Set the error state
    } finally {
      setLoading(false);
    }
  }, [inputValue]);

  useEffect(() => {
    if (inputValue.length) {
      fetchData();
    }
  }, [inputValue, fetchData]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [copied]);

  if (loading) {
    return <p className="noData">Loading...</p>;
  }

  // Check if the error state is not null
  if (error) { 
    return <p className="noData">Something went wrong :(</p>;
  }

  return (
    <>
      {shortenLink && (
        <div className="result">
          <p>{shortenLink}</p>
          <CopyToClipboard text={shortenLink} onCopy={() => setCopied(true)}>
            <button className={copied ? "copied" : ""}>Copy to Clipboard</button>
          </CopyToClipboard>
        </div>
      )}
    </>
  );
};

export default ResultLink;
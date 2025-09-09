import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import axios from 'axios';

const ResultLink = ({ inputValue }) => {
  const [shortenLink, setShortenLink] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

useEffect(() => {
  const fetchData = async () => { 
    try {
      setLoading(true);
      setError(null);
      const res = await axios(`https://api.shrtco.de/v2/shorten?url=${inputValue}`);
      setShortenLink(res.data.result.full_short_link);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  if (inputValue) {
    fetchData();
  }
}, [inputValue]); 
  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  if (loading) {
    return <p className="noData">Loading...</p>;
  }

  // if (error) {
  //   return <p className="noData">Something went wrong. Please check your URL and try again.</p>;
  // }

  return (
    <>
      {shortenLink && (
        <div className="result">
          <p>{shortenLink}</p>
          <CopyToClipboard
            text={shortenLink}
            onCopy={() => setCopied(true)}
          >
            <button className={copied ? "copied" : ""}>
              {copied ? "Copied!" : "Copy link to Clipboard"}
            </button>
          </CopyToClipboard>
        </div>
      )}
    </>
  );
};

export default ResultLink;

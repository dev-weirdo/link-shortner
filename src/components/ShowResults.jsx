import axios from "axios";
import { useState, useEffect } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

const ShowResults = ({ link }) => {
  const [shortenLink, setShortenLink] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = () => {
    setLoading(true);
    axios
      .get(`https://api.shrtco.de/v2/shorten?url=${link}`)
      .then((res) => setShortenLink(res.data.result.full_short_link2))
      .catch((err) => setError(err))
      .finally(setLoading(false));
  };

  useEffect(() => {
    if (link) {
      fetchData();
    }
  }, [link]);

  return (
    <>
      {shortenLink && (
        <div className="flex justify-center gap-5">
          <p className="">{shortenLink}</p>
          <CopyToClipboard text={shortenLink} onCopy={() => setCopied(true)}>
            <button>Copy</button>
          </CopyToClipboard>
        </div>
      )}
    </>
  );
};

export default ShowResults;

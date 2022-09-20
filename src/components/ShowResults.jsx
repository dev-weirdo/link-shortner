import axios from "axios";
import { useState, useEffect } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import Loader from "./Loader";

const ShowResults = ({ link }) => {
  const [shortenLink, setShortenLink] = useState("");
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    setCopied(false);
    axios
      .get(`https://api.shrtco.de/v2/shorten?url=${link}`)
      .then((res) => setShortenLink(res.data.result.full_short_link2))
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (link) {
      fetchData();
    }
  }, [link]);

  if (loading) {
    return <Loader loading={loading} />;
  }
  return (
    <>
      {shortenLink && (
        <div className="mx-2 md:mx-0">
          <div className="bg-gray-800 w-full md:w-96 py-5 rounded-md text-white flex flex-col items-center gap-5 mx-auto ">
            <p className="">
              Shorten Link:{" "}
              <input
                className="rounded px-2 py-1 outline-none text-center text-black"
                value={shortenLink}
                type="text"
              />
            </p>
            <CopyToClipboard text={shortenLink} onCopy={() => setCopied(true)}>
              <button
                className={
                  copied
                    ? "bg-green-600 px-4 py-2 rounded"
                    : "bg-red-500 px-4 py-2 rounded"
                }
              >
                {copied ? "Copied to clipboard" : "Copy to clipboard"}
              </button>
            </CopyToClipboard>
          </div>
        </div>
      )}
    </>
  );
};

export default ShowResults;

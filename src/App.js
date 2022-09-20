import "./App.css";
import { useEffect, useState } from "react";
import GetInput from "./components/GetInput";
import ShowResults from "./components/ShowResults";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(false);
  const [link, setLink] = useState("");

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1337);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="min-h-[92vh] md:min-h-screen flex flex-col justify-center gap-5 relative">
          <GetInput setLink={setLink} />
          <ShowResults link={link} />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;

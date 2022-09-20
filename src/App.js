import "./App.css";
import { useState } from "react";
import GetInput from "./components/GetInput";
import ShowResults from "./components/ShowResults";
import Footer from "./components/Footer";

function App() {
  const [link, setLink] = useState("");

  return (
    <div className="min-h-[92vh] md:min-h-screen flex flex-col justify-center gap-5 relative">
      <GetInput setLink={setLink} />
      <ShowResults link={link} />
      <Footer />
    </div>
  );
}

export default App;

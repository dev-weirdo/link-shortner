import { useState } from "react";
import GetInput from "./components/GetInput";
import ShowResults from "./components/ShowResults";

function App() {
  const [link, setLink] = useState("");

  return (
    <div className="bg-lime-500 min-h-screen flex flex-col justify-center gap-5">
      <GetInput setLink={setLink} />
      <ShowResults link={link} />
    </div>
  );
}

export default App;

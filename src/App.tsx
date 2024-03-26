import Header from "./components/Header";
import Introduction from "./components/Introduction";
import { useEffect, useState } from "react";
import Pictures from "./components/Pictures";

const App = () => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(!checked);
  }, []);

  return (
    <div className="App">
      <div
        className="First Panel: w-full h-screen py-10 px-36"
        style={{
          backgroundImage:
            "linear-gradient(to top right, #022b3a, #256278, #5e93a6",
        }}
      >
        <Header />
        <div className="Card: flex flex-row my-10 h-[80%]">
          <div className="flex flex-col w-2/3 items-start">
            <Introduction />
          </div>
          <div className="w-1/3 mt-10 bg-slate-400 rounded-xl p-2 shadow-lg shadow-black">
            <Pictures />
          </div>
        </div>
      </div>
      <div
        className="Second Panel: w-full h-screen"
        style={{
          backgroundImage:
            "linear-gradient(to bottom right, #022b3a, #256278, #5e93a6",
        }}
      >
        Hello
      </div>
    </div>
  );
};

export default App;

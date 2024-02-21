import "./App.css";
import { useState } from "react";
import data from "./data";

export default function App() {
  const [getSelectedId, setSelectedId] = useState(null);
  const [multiple, setMultiple] = useState([]);

  function handleSelectedItem(id) {
    console.log(id);
    setSelectedId(id);
  }
  return (
    <div className="w-2/3 mx-auto">
      <p className="text-center py-8 text-3xl font-bold">Accordian</p>
      <div className="">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="">
              <div onClick={() => handleSelectedItem(dataItem.id)} className="">
                <h1 className="mb-4 bg-slate-400 py-3 text-center rounded-lg">
                  {dataItem.question}
                </h1>
              </div>
              <div className="">
                {getSelectedId === dataItem.id && (
                  <div className="mb-4 mx-4 text-justify">{dataItem.answer}</div>
                )}
              </div>
              {/* {selected === dataItem.id ||
              multiple.indexOf(dataItem.id) !== -1 ? (
                <div className="content">{dataItem.answer}</div>
              ) : null} */}
            </div>
          ))
        ) : (
          <div>No data found !</div>
        )}
      </div>
    </div>
  );
}

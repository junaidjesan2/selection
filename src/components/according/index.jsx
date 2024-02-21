import { useState } from "react";
import data from "../../data";

export default function Accordian() {
  const [getSelectedId, setSelectedId] = useState(null);
  const [multiple, setMultiple] = useState([]);

  function handleSelectedItem(id) {
    console.log(id);
    setSelectedId(id);
  }
  return (
    <div>
      <p>Accordian</p>
      <div className="">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={() => handleSelectedItem(dataItem.id)}
                className="flex items-center"
              >
                <h1 className=" bg-slate-400 py-3">{dataItem.question}</h1>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {getSelectedId === dataItem.id && (
                  <div className="acc-content ">{dataItem.answer}</div>
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

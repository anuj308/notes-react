import React,{useState} from "react";
import { useTodo } from "../contexts";

function LogItem({log}) {
    const [isLogEditable, setIsLogEditable] = useState(false);
  const [logTitleNew, setLogTitleNew] = useState(log.logTitle);
  const [logDetailNew, setLogDetailNew] = useState(log.logDetail);
  const { updateLog, deleteLog,} = useTodo();

  const editLog = () => {
    updateLog(log.id, { ...log,logTitle: logTitleNew, logDetail: logDetailNew });
    setIsLogEditable(false);
  };

 
  return (
    <div 
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  `}
    >
      
      <textarea
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg mx-3 log-text ${
          isLogEditable ? "border-black/10 px-2" : "border-transparent"
        } `}
        value={logTitleNew}
        onChange={(e) => setLogTitleNew(e.target.value)}
        readOnly={!isLogEditable}
      />
   
      
      <textarea 
        type="text"
        className={`border outline-none w-full bg-transparent  rounded-lg log-text
        ${
          isLogEditable ? "border-black/10 px-2" : "border-transparent"
        } `}
        value={logDetailNew}
        onChange={(e) => setLogDetailNew(e.target.value)}
        readOnly={!isLogEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (isLogEditable) {
            editLog();
          } else setIsLogEditable((prev) => !prev);
        }}
        
      >
        {isLogEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteLog(log.id)}
      >
        ❌
      </button>
    </div>
  )
}

export default LogItem
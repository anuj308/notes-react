import React, { useState } from "react";
import { useTodo } from "../contexts";

function LogForm() {
  const [logTitle,setLogTitle] = useState("");
  const [logDetail,setLogDetail] = useState("");
  const { addLog } = useTodo();

  const add = (e) => {
    e.preventDefault();

    if (!(logTitle && logDetail)) return;

    addLog({ logTitle, logDetail });
    setLogTitle("");
    setLogDetail("");
  };

  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={logTitle}
        onChange={(e)=> setLogTitle(e.target.value)}
      />
     
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={logDetail}
        onChange={(e)=> setLogDetail(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default LogForm;

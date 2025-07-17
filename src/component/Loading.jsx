import React, { useEffect, useState } from "react";

function Loading({onComplete}) {
    const [text,setText] = useState("");
    const fullText = "Sankalp";
    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0,index));
            index++;
            if (index > fullText.length) {
                clearInterval(interval);
                setTimeout(() => {
                    onComplete(); // Call the onComplete function after the loading is done
                }, 1000); // Wait for 1 second before calling onComplete
            }
        },100);
        return () => clearInterval(interval);
        },100);

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray flex flex-col items-center justify-center">
      <div className="mb-4 text-4xl font-mono font-bold">
        {text}
        <span className="animate-blink ml-1">|</span>
      </div>
      <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar">
          {" "}
        </div>
      </div>
    </div>
  );
}

export default Loading;

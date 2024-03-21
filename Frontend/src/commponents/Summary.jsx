/* eslint-disable no-undef */
import { useEffect, useState } from "react";

const Summary = () => {
  const [token, setToken] = useState("");

  const handleClick = () => {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      const yuoutubeUrl = tabs[0].url;
      setToken(yuoutubeUrl.split("v=")[1]);
    });
  };


  useEffect(() => {
    chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      const yuoutubeUrl = tabs[0].url;
      setToken(yuoutubeUrl.split("v=")[1]);
    });
  })

  return (
    <div className="flex flex-col items-center text-white">
      <h1 className="text-base text-center font-semibold">
        Get your doubt solved without <br />
        watching a youtube video
      </h1>
      <button
        type="button"
        className="py-3 px-4 mt-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-white/10 dark:hover:bg-white/20 dark:text-white dark:hover:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        onClick={handleClick}
      >
        Summarize
      </button>

      <p className="mt-4">{token ? token : "url not found"}</p>
    </div>
  );
};

export default Summary;

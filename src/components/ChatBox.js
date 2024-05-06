import { useSelector } from "react-redux";
import Response from "./Response";
import Prompt from "./Prompt";

const ChatBox = () => {
  return (
    <>
      <div className="chatbox w-full h-full bg-gray-300">
        <div className="response flex flex-col p-5 justify-end items-center">
          <Response />
        </div>
        <div className="prompt">
          <Prompt />
        </div>
      </div>
    </>
  );
};

export default ChatBox;

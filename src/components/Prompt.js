import SendIcon from "@mui/icons-material/Send";
import { useDispatch } from "react-redux";
import { addResponse } from "../redux/responseSlice/responseSlice";
import { useState } from "react";
import axios from "axios";

const Prompt = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const callOllama = async () => {
    let body = {
      model: "llama3",
      prompt: query,
      stream: false,
    };
    const response = await axios.post(
      "http://localhost:11434/api/generate",
      body,
      {
        "content-type": "application/json",
      }
    );
    const reply = response.data.response;
    dispatch(addResponse({ text: reply, type: "llama" }));
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addResponse({ text: query, type: "user" }));
    setQuery("");
    callOllama();
  };
  return (
    <>
      <div className="flex justify-center items-center w-full h-full bg-gray-500 overflow-auto">
        <form
          onSubmit={handleSubmit}
          className="flex justify-center items-center w-full h-full"
        >
          <input
            type="text"
            name="prompt-input"
            onChange={handleChange}
            value={query}
            className="prompt-input h-12 pl-4 w-4/5 rounded-lg"
          />
          <button
            type="submit"
            className="prompt-button bg-gray-500 h-10 w-10 rounded-lg"
          >
            <SendIcon color="gray" />
          </button>
        </form>
      </div>
    </>
  );
};

export default Prompt;

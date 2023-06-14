import { useState } from "react";
import useTitle from "../hooks/useTitle";

const URL = "https://api.openai.com/v1/chat/completions";

let controller: AbortController | null = null;

function ChatBot() {
  const [prompt, setPrompt] = useState("");
  const [displayPrompt, setDisplayPrompt] = useState("");
  const [generatedResponse, setGeneratedResponse] = useState("");
  const [stopDisabled, setStopDisabled] = useState(true);
  const [isLooping, setIsLooping] = useState(true);

  useTitle("DevFlow AI - Chatbot");

  const generate = async () => {
    setGeneratedResponse("Generating...");
    setDisplayPrompt(prompt);
    setPrompt("");
    setStopDisabled(false);

    controller = new AbortController();
    const signal = controller.signal;

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_OPENAI_APIKEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: prompt }],
          stream: true, // add this to stream data
        }),
        signal,
      });

      // non streaming implementation, gives out answer in one block, can be useful for short answers
      // const data = await response.json();
      // setGeneratedResponse(data.choices[0].message.content);

      // read data from response body in streams
      const reader = response.body?.getReader();

      // text decoder api decodes binary data
      const decoder = new TextDecoder("utf-8");

      setGeneratedResponse("");

      while (isLooping) {
        // read data by chunks from the stream
        const chunk = await reader?.read();

        if (chunk) {
          const { done, value } = chunk;
          if (done) {
            setIsLooping(false);
            break;
          }

          // decode chunks into readable data from binary data
          const decodedChunk = decoder.decode(value);

          // create an array from data streams
          const lines = decodedChunk.split("\n");

          // parse data
          const parsedLines = lines
            .map((line) => line.replace(/^data: /, "").trim())
            .filter((line) => line !== "" && line !== "[DONE]")
            .map((line) => JSON.parse(line));

          // loop through each line and check if there is content, if so add to resultText
          for (const parsedLine of parsedLines) {
            const { choices } = parsedLine;
            const { delta } = choices[0];
            const { content } = delta;
            if (content) {
              console.log(content);

              setGeneratedResponse((prev) => prev + content);
            }
          }
        }
      }
    } catch (error) {
      if (signal.aborted) {
        setGeneratedResponse("Request Aborted - Ask me something else.");
      } else {
        console.error("Error:", error);
        setGeneratedResponse("Error occurred while generating.");
      }
    } finally {
      setStopDisabled(true);
      setIsLooping(true);
      controller = null;
    }
  };

  const stop = () => {
    if (controller) {
      controller.abort();
      controller = null;
    }
  };

  return (
    <div className="w-full h-[calc(100vh-58px)] pt-20 xl:pt-32 animate-fadeIn">
      <div className="text-black flex items-center justify-center">
        <div className="w-full lg:w-[60%] p-8 rounded-md bg-gray-100 shadow-[0px_0px_20px_rgba(0,0,0,0.055)]">
          <h1 className="text-2xl lg:text-3xl font-bold mb-6 black_gradient">ask me anything</h1>
          <div className="mt-4 h-48 overflow-y-auto">
            <p className="text-gray-500 text-sm mb-2">
              {displayPrompt ? displayPrompt : "Generated Text"}
            </p>
            <p className="whitespace-pre-line">{generatedResponse}</p>
          </div>
          <input
            className="w-full px-4 py-2 rounded-md bg-gray-200 placeholder-gray-500 focus:outline-none mt-4"
            placeholder="Knock yourself out..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <div className="flex justify-center mt-4">
            <button
              className="w-1/2 px-4 py-2 rounded-md bg-[#333] text-white hover:bg-[#726b7d] focus:outline-none mr-2 disabled:opacity-75 disabled:cursor-not-allowed"
              onClick={generate}
              disabled={!prompt}
            >
              Generate
            </button>
            <button
              className="w-1/2 px-4 py-2 rounded-md border border-gray-500 text-gray-500 hover:text-gray-700 hover:border-gray-700 focus:outline-none ml-2 disabled:opacity-75 disabled:cursor-not-allowed"
              onClick={stop}
              disabled={stopDisabled}
            >
              Stop
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatBot;

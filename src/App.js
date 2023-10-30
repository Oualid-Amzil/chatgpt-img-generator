import React, { useState } from "react";
import OpenAI from "openai";
import "./App.css";

function App() {
  const [imgs, setImgs] = useState([]);

  const openai = new OpenAI({
    apiKey: "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",
    dangerouslyAllowBrowser: true,
  });

  const getImages = async () => {
    try {
      const image = await openai.images.generate({
        prompt: "A cute baby sea otter",
        size: "256x256",
        n: 2,
      });

      setImgs(image.data);
    } catch (err) {
      console.log(err);
    }
  };

  getImages();

  return (
    <div className="App">
      <h1>first interact with ChatGPT</h1>
      <div className="imgs__container">
        {imgs.map((ele) => (
          <img key={imgs.indexOf(ele)} src={ele.url} alt="element" />
        ))}
      </div>
    </div>
  );
}

export default App;

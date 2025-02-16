import React, { useState } from "react";
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";
import defaultMarkdown from "./data/defaultMarkdown";
import "./styles/App.scss";

const App = () => {
  const [markdown, setMarkdown] = useState(defaultMarkdown);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="container">
      <h1 className="title">Markdown Previewer</h1>
      <div className="app">
        <Editor markdown={markdown} handleChange={handleChange} />
        <Previewer markdown={markdown} />
      </div>
    </div>
  );
};

export default App;

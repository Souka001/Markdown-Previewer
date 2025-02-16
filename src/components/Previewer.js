import React from "react";
import { marked } from "marked";

const Previewer = ({ markdown }) => {
  return (
    <div
      id="preview"
      className="previewer"
      dangerouslySetInnerHTML={{
        __html: marked(markdown),
      }}
    ></div>
  );
};

export default Previewer;

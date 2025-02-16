import React from "react";

const Editor = ({ markdown, handleChange }) => {
  return (
    <textarea
      id="editor"
      value={markdown}
      onChange={handleChange}
      className="editor"
    ></textarea>
  );
};

export default Editor;

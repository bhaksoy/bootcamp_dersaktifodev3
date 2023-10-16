import React, { useState } from "react";

function ChangeSize() {
  const [width, setWidth] = useState(200);
  const [height, setHeight] = useState(200);
  const [inputWidth, setInputWidth] = useState();
  const [inputHeight, setInputHeight] = useState();

  const changeSize = () => {
    setWidth(inputWidth);
    setHeight(inputHeight);
  };

  const labelStyle = {
    display: "block", // Blok düzenine ayarlayarak alt alta gelmelerini sağlar
  };

  return (
    <div>
      <div
        style={{
          backgroundColor: "white",
          border: "5px solid black",
          width,
          height,
        }}
      ></div>
      <label htmlFor="">
        <span style={labelStyle}>Width:</span>
        <input
          type="number"
          value={inputWidth}
          onChange={(e) => setInputWidth(parseInt(e.target.value))}
        />
      </label>
      <label htmlFor="">
        <span style={labelStyle}>Height:</span>
        <input
          type="number"
          value={inputHeight}
          onChange={(e) => setInputHeight(parseInt(e.target.value))}
        />
      </label>
      <button onClick={changeSize}>Click and Change!</button>
    </div>
  );
}

export default ChangeSize;

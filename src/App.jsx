import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button>on/off</button>
      <p>{num}</p>
      {/* {console.log(faceShowFlag);} */}
      {/* {<p>console.log(faceShowFlag);</p>} */}
      {faceShowFlag && <p>(^_-)-☆</p>}
    </>
  );
};

export default App;

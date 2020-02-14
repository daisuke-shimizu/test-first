import React from "react";
import ReactDom from "react-dom";
import Msg from "./components/Msg";
import ColorfulMsg from "./components/ColorfulMsg";
const massageStyle = {
  color: "blue"
};

const App = () => {
  return (
    <>
      <h2>Reactハンズオン！</h2>
      <p style={massageStyle}>Reactを使いこなしたいっすね〜</p>
      <Msg />
    </>
  );
};
ReactDom.render(<App />, document.getElementById("root"));

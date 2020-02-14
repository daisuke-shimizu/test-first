import React from "react";
import ReactDom from "react-dom";
import Msg from "./components/Msg";
import ColorfulMsg from "./components/ColorfulMsg";
import CountButton from "./components/CountButton";
const massageStyle = {
  color: "blue"
};

const App = () => {
  return (
    <>
      <h2>Reactハンズオン！</h2>
      <p style={massageStyle}>Reactを使いこなしたいっすね〜</p>
      <Msg />
      <ColorfulMsg color="blue">なんでかっていうと〜</ColorfulMsg>
      <ColorfulMsg color="red">初心者に優しい</ColorfulMsg>
      <CountButton />
    </>
  );
};
ReactDom.render(<App />, document.getElementById("root"));

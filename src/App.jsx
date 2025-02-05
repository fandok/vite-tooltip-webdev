import "./App.css";
import Tooltip from "./tooltip";

function App() {
  return (
    <>
      <Tooltip position="top" content="tooltip on top">
        <div style={{ backgroundColor: "blue" }}>top</div>
      </Tooltip>
      <Tooltip position="right" content="tooltip on right">
        <div style={{ backgroundColor: "green" }}>right</div>
      </Tooltip>
      <Tooltip position="left" content="tooltip on left">
        <div style={{ backgroundColor: "red" }}>left</div>
      </Tooltip>
      <Tooltip position="bottom" content="tooltip on bottom">
        <div style={{ backgroundColor: "brown" }}>bottom</div>
      </Tooltip>
    </>
  );
}

export default App;

import "./App.css";
import Header from "./components/Header";

function App(props) {
  let AppStyle = {
    color: "black",
    background: "aqua",
    border: "3px dashed black",
  };

  return (
    <div className="App">
      <div style={AppStyle}>
        {props.children}
      <h3>I am from App class</h3>
      <Header name="Swathi" />
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import Button from "./components/button";
import TextArea from "./components/TextArea";

function App() {
  return (
    <>
      <div>
        <TextArea className="border" initialCode="const hello = 'world';" />
        {/* <Button /> */}
      </div>
    </>
  );
}

export default App;

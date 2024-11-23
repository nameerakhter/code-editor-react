import "./App.css";
import TextArea from "./components/TextArea";
import { Languages } from "../types/languages.ts";

function App() {
  return (
    <>
      <div>
        <TextArea
          language={Languages[0]}
          className="border"
          initialCode="const hello = 'world';"
        />
      </div>
    </>
  );
}

export default App;

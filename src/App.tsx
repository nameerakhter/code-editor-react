import "./App.css";
import TextArea from "./components/TextArea";
import { Languages } from "../types/languages.ts";
import Navbar from "./components/Navbar.tsx";

function App() {
  return (
    <div className=" h-screen sm:p-[5rem] bg-[#e6e6dc] text-black">
      <Navbar />
      <div>
        <TextArea
          language={Languages[0]}
          starterCode="import React from 'react';
interface GreetingProps {
name: string;
age: number;
}

const Greeting: React.FC<GreetingProps> = ({ name, age }) => {
return (
  <div>
    <h1>Hello, {name}!</h1>
    <p>You are {age} years old.</p>
  </div>
);
};"
        />
      </div>
    </div>
  );
}

export default App;

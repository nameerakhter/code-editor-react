# Code Editor Assignment Solution


https://github.com/user-attachments/assets/09e65d0a-92fd-468e-bf55-c9b277a8fc79


This project implements a simple code editor in React

## Features
- Syntax highlighting using **PrismJS**.
- Supports multiple programming languages.
- Real-time code editing in a `textarea` element with overlayed syntax highlighting.

## Technologies Used
- **React**: For building the interactive user interface.
- **PrismJS**: A lightweight library for syntax highlighting.
  - Official Site: [https://prismjs.com/](https://prismjs.com/)
  - React Integration: [prism-react-renderer](https://github.com/FormidableLabs/prism-react-renderer)
- **HTML Textarea**: Used for text input by users.

## How It Works
1. The main editor consists of a `textarea` for user input and a `CodeHighlighter` component for displaying syntax-highlighted code.
2. User input in the `textarea` updates the code state, and the updated code is passed to PrismJS for syntax highlighting.
3. The `textarea` and `CodeHighlighter` component are overlaid to create the illusion of a single code editor.

## Implementation Highlights

### Code Explanation
```tsx
import { useEffect, useState } from "react";
import * as Prism from "prismjs";

export default function CodeEditor() {
  const [code, setCode] = useState<string>(""); // Holds the user's input code

  useEffect(() => {
    // Highlight code when the `code` state changes
    Prism.highlightAll();
  }, [code]);

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value);
  };

  return (
    <div className="code-editor">
      {/* Highlighted code overlay */}
      <pre className="code-overlay">
        <code className="language-javascript">{code}</code>
      </pre>
      {/* User input area */}
      <textarea
        value={code}
        onChange={handleCodeChange}
        className="textarea-input"
        spellCheck="false"
      />
    </div>
  );
}

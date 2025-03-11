# Code Editor React

## Video Demonstration
https://github.com/user-attachments/assets/09e65d0a-92fd-468e-bf55-c9b277a8fc79


This project implements a simple code editor in React

## Features
- Syntax highlighting using **PrismJS**.
- Supports multiple programming languages.
- Real-time code editing in a `textarea` element with overlayed syntax highlighting.

## Technologies Used
- **React**: For building the interactive user interface.
- **PrismJS**: A library for syntax highlighting.
- **HTML Textarea**: Used for text input by users.

## How It Works
1. The main editor consists of two components:
   - A transparent `textarea` for user input with a white caret for cursor visibility
   - A `CodeHighlighter` component that renders the syntax-highlighted code using PrismJS

2. The editor maintains two states:
   - `code`: This Stores the current text content that the user is typing
   - `selectedLanguage`: Tracks the selected programming language

3. When the user types in the textarea:
   - The `handleChange` function updates the `code` state
   - A `useEffect` hook triggers PrismJS to re-highlight the code
   - The `CodeHighlighter` component re-renders with the updated highlighted code

4. Synchronization features:
   - The textarea and highlighter are overlaid on top of each other
   - `scrollOverlayAndTextArea` function is used to sync both the scroll for the textarea and the highlighted code
   - The textarea is set to transparent

5. Language selection:
   - I implemented this so that the Users can switch languages via the `LanguageSelector` component this gives more flexibility to add multi language support

## Implementation Highlights

### Code Snippet
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
```

### Scroll Synchronization Function
```tsx
function scrollOverlayAndTextArea(e: React.UIEvent<HTMLTextAreaElement | HTMLPreElement>) {
  const target = e.target as HTMLElement;
  const sibling = target.nextElementSibling || target.previousElementSibling;

  if (sibling) {
    (sibling as HTMLElement).scrollTop = target.scrollTop;
    (sibling as HTMLElement).scrollLeft = target.scrollLeft;
  }
}
```

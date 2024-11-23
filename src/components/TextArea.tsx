import { useEffect, useState } from "react";
import Prism from "prismjs";

interface TextAreaprops {
  className?: string;
  initialCode?: string;
}
export default function TextArea({
  className,
  initialCode = "",
}: TextAreaprops) {
  const [code, setCode] = useState<string>(initialCode);
  useEffect(() => {
    if (typeof window !== "undefined") {
      Prism.highlightAll();
    }
  }, [code]);
  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>): void {
    setCode(e.target.value);
  }

  return (
    <div
      className={`relative mx-auto ${className}`}
      style={{ fontFamily: "monospace" }}
    >
      {/* Highlighted Code */}
      <pre
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          pointerEvents: "none",
          whiteSpace: "pre-wrap",
          color: "#f8f8f2",
          margin: 0,
          padding: "0.5rem",
        }}
      >
        <code className="language-js">{code}</code>
      </pre>

      {/* Textarea Input */}
      <textarea
        value={code}
        onChange={handleChange}
        // className="relative w-[1000px] h-[300px] bg-transparent text-transparent caret-white border border-black"
        style={{
          fontFamily: "monospace",
          lineHeight: "1.5",
          padding: "0.5rem",
          color: "transparent",
        }}
      />
    </div>
  );
}

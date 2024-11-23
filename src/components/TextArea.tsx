import { useEffect, useState } from "react";
import Prism from "prismjs";

interface TextAreaprops {
  className?: string;
  initialCode?: string;
  language: string;
}
export default function TextArea({
  className,
  initialCode = "",
  language = "js",
}: TextAreaprops) {
  const [code, setCode] = useState<string>(initialCode);

  useEffect(() => {
    if (typeof window !== "undefined") {
      Prism.highlightAll();
    }
  }, [code, language]);

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>): void {
    setCode(e.target.value);
    const textAreaHeight = e.target;
    textAreaHeight.style.height = "auto";
    textAreaHeight.style.height = `${Math.min(textAreaHeight.scrollHeight, 400)}px`;
  }
  return (
    <div className={`relative mx-auto ${className}`}>
      {/* TODO: cursor need to more closer to text it is a little disorienting when making changes in code  */}
      <pre
        className=" h-full absolute inset-0 m-0 pt-0 px-[1em] overflow-hidden whitespace-pre-wrap font-mono leading-normal"
        style={{
          color: "rgba(255, 255, 255, 0.8)",
          // background: "transparent",
          pointerEvents: "none",
        }}
      >
        <code className={`language-${language}`}>{code}</code>
      </pre>

      {/* TODO: move it to styles.css and make a seperate class  */}
      <textarea
        value={code}
        onChange={handleChange}
        className="relative w-full py-[1.5rem] px-[1rem] bg-transparent font-mono leading-normal resize-none"
        style={{
          caretColor: "white",
          color: "transparent",
          outline: "none",
        }}
      />
    </div>
  );
}

import { useEffect, useState } from "react";
import Prism from "prismjs";
import { LanguagesSupported, TextAreaprops } from "../../types/index.ts";
import LanguageSelector from "./LanguageSelector.tsx";
import { Languages } from "../../types/languages.ts";

export default function TextArea({
  initialCode = "",
  language = Languages[0],
}: TextAreaprops) {
  const [code, setCode] = useState<string>(initialCode);
  const [selectedLanguage, setSelectedLanguage] =
    useState<LanguagesSupported>(Languages);

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
  function handleLanguageChange(newLanguage: LanguagesSupported) {
    setSelectedLanguage(newLanguage);
  }
  return (
    <>
      <div>
        <LanguageSelector
          selectedLanguage={selectedLanguage}
          onLanguageChange={handleLanguageChange}
        />
      </div>
      <div className={`relative mx-auto `}>
        {/* FIX:  the text area is scrollable but the highlight is not scrollable*/}
        <pre
          className=" h-full absolute inset-0 m-0 pt-0 px-[1em] overflow-hidden whitespace-pre-wrap font-mono leading-normal"
          style={{
            color: "rgba(255, 255, 255, 0.8)",
            pointerEvents: "none",
          }}
        >
          <code className={`language-${language.value}`}>{code}</code>
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
    </>
  );
}

import { useEffect, useState } from "react";
import * as Prism from "prismjs";
import { LanguagesSupported, TextAreaprops } from "../../types/index.ts";
import LanguageSelector from "./LanguageSelector.tsx";
import { Languages } from "../../types/languages.ts";
import CodeHighlighter from "./CodeHighlighter.tsx";

export default function TextArea({
  starterCode = "",
  language = Languages[0],
}: TextAreaprops) {

  const [code, setCode] = useState<string>(starterCode);
  const [selectedLanguage, setSelectedLanguage] =useState<LanguagesSupported>(language);

  useEffect(() => {
    if (typeof window !== "undefined") {
      Prism.highlightAll();
    }
  }, [code, selectedLanguage]);

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>): void {
    setCode(e.target.value);
  }

  function handleLanguageChange(newLanguage: LanguagesSupported) {
    setSelectedLanguage(newLanguage);
  }

  function scrollOverlayAndTextArea(e: React.UIEvent<HTMLTextAreaElement | HTMLPreElement>) {
    const target = e.target as HTMLElement;
    const sibling = target.nextElementSibling || target.previousElementSibling;

    if (sibling) {
      (sibling as HTMLElement).scrollTop = target.scrollTop;
      (sibling as HTMLElement).scrollLeft = target.scrollLeft;
    }
  }

  return (
    <>
      <div>
        <LanguageSelector
          selectedLanguage={selectedLanguage}
          onLanguageChange={handleLanguageChange}
        />
      </div>
      <div className="relative mx-auto overflow-hidden rounded-md">
        <div className="relative w-full h-[400px] max-h-[600px] overflow-auto">
          <CodeHighlighter
            onScrollfunction={scrollOverlayAndTextArea}
            selectedLanguage={selectedLanguage}
            code={code}
          />
          <textarea
            value={code}
            onChange={handleChange}
            onScroll={scrollOverlayAndTextArea}
            className="relative w-full h-full p-[1rem] pt-[1.4rem] bg-transparent font-mono leading-normal resize-none z-10"
            style={{
              caretColor: "white",
              color: "transparent",
              outline: "none",
            }}
          />
        </div>
      </div>
    </>
  );
}

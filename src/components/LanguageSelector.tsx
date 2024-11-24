import { LanguagesSupported } from "../../types/index.ts";
import { Languages } from "../../types/languages.ts";

interface LanguageSelectorProps {
  selectedLanguage: LanguagesSupported;
  onLanguageChange: (language: LanguagesSupported) => void;
}
export default function LanguageSelector({
  selectedLanguage,
  onLanguageChange,
}: LanguageSelectorProps) {
  return (
    <div className="mb-6">
      <select
        value={selectedLanguage.value}
        onChange={(e) => {
          const selected = Languages.find(
            (lang) => lang.value === e.target.value,
          );
          if (selected) {
            onLanguageChange(selected);
          }
        }}
        className="px-4 py-3 bg-[#282a36] text-[#f8f8f2] border border-[#6272a4] rounded-md font-mono text-base hover:border-[#bd93f9] focus:outline-none focus:border-[#bd93f9] focus:ring-1 focus:ring-[#bd93f9] w-48"
      >
        {Languages.map((lang) => {
          return (
            <option 
              key={lang.label} 
              value={lang.value}
              className="bg-[#282a36] text-[#f8f8f2] text-base py-2"
            >
              {lang.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}

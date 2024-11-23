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
    <div className="border-1 border-black  ">
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
        className="px-3 py-2 border rounded-md mb-4 font-mono text-sm"
      >
        {Languages.map((lang) => {
          return (
            <option key={lang.label} value={lang.value}>
              {lang.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}

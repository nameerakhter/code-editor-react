export interface TextAreaprops {
  className?: string;
  initialCode?: string;
  language: LanguagesSupported;
}

export type LanguagesSupported = {
  label: string;
  value: string;
};

export interface TextAreaprops {
  initialCode?: string;
  language: LanguagesSupported;
}

export type LanguagesSupported = {
  label: string;
  value: string;
};

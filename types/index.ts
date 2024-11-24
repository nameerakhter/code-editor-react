export interface TextAreaprops {
  starterCode?: string;
  language: LanguagesSupported;
}

export type LanguagesSupported = {
  label: string;
  value: string;
};

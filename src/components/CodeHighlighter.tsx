export default function CodeHighlighter({
  onScrollfunction,
  selectedLanguage,
  code
}: {
  onScrollfunction: (e: React.UIEvent<HTMLPreElement>) => void;
  selectedLanguage: { value: string };
  code: string;
}) {

  return (
    <pre
      onScroll={onScrollfunction}
      className="absolute inset-0 px-[1em] font-mono leading- pointer-events-none whitespace-pre-wrap text-white/80 "
    >
      <code className={`language-${selectedLanguage.value}`}>{code}</code>
    </pre>
  )
}
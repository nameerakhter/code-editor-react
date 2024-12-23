
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-5 py-2.5 text-[#282c34]">
      <div className="flex gap-4">
        <a href="https://github.com/nameerakhter" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="w-6 h-6 fill-[#282c34] hover:fill-[#61dafb] transition-colors duration-300" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.54 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.73-.01-1.43-2.24.49-2.71-1.08-2.71-1.08-.36-.91-.88-1.15-.88-1.15-.72-.49.05-.48.05-.48.8.06 1.22.82 1.22.82.71 1.22 1.86.87 2.31.66.07-.51.28-.87.51-1.07-1.78-.2-3.65-.89-3.65-3.95 0-.87.31-1.58.82-2.14-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82A7.66 7.66 0 018 2.5c.68.003 1.36.092 2 .26 1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.14 0 3.07-1.87 3.75-3.66 3.95.29.25.55.74.55 1.49 0 1.08-.01 1.95-.01 2.21 0 .21.15.46.55.38C13.71 14.54 16 11.54 16 8c0-4.42-3.58-8-8-8z"/>
          </svg>
        </a>
        <a href="https://twitter.com/inameerakhter" target="_blank" rel="noopener noreferrer">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="w-6 h-6 fill-[#282c34] hover:fill-[#096781] transition-colors duration-300" viewBox="0 0 16 16">
            <path d="M5.026 15c6.036 0 9.32-5 9.32-9.32 0-.14 0-.28-.01-.42A6.68 6.68 0 0016 3.542a6.56 6.56 0 01-1.889.517A3.293 3.293 0 0015.556 2a6.57 6.57 0 01-2.084.793A3.281 3.281 0 007.875 5.5a9.325 9.325 0 01-6.75-3.415A3.28 3.28 0 003.5 8.5a3.28 3.28 0 01-1.48-.408v.041a3.283 3.283 0 002.628 3.215A3.28 3.28 0 012 11.5a3.28 3.28 0 003.058 2.27A6.577 6.577 0 010 14.5a9.305 9.305 0 005.026 1.5"/>
          </svg>
        </a>
      </div>
    </nav>
  );
};


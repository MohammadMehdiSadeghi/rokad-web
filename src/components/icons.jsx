// Placeholder line icons standing in for the source file's icon-library
// instances ("user", "profile-2user", "document-text" — looks like an
// Iconsax/HugeIcons "linear" set). Swap for the real icon set if
// pixel-exact glyphs matter — see design-spec §9.

export function UserIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <circle cx="12" cy="8" r="4" stroke="#fff" strokeWidth="2" fill="none" />
      <path d="M4 20c0-4 3.5-6 8-6s8 2 8 6" stroke="#fff" strokeWidth="2" fill="none" />
    </svg>
  );
}

export function ProblemIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M4 17l6-6 4 4 6-6"
        stroke="#fff"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TeamIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <circle cx="9" cy="8" r="3" stroke="#fff" strokeWidth="2" fill="none" />
      <circle cx="16" cy="9" r="2.5" stroke="#fff" strokeWidth="2" fill="none" />
      <path
        d="M3 19c0-3 2.7-5 6-5s6 2 6 5M14 19c0-2 1.8-3.5 4-3.5s4 1.5 4 3.5"
        stroke="#fff"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}

export function DocumentIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <rect x="5" y="3" width="14" height="18" rx="2" stroke="#fff" strokeWidth="2" fill="none" />
      <path d="M8 8h8M8 12h8M8 16h5" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// Icon colors are passed via the parent's iconBg — icons themselves use
// currentColor so the parent div controls the stroke color.

export function UserIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
      <path d="M4 20c0-4 3.5-6 8-6s8 2 8 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function ProblemIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="M12 8v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="16" r="1" fill="currentColor" />
    </svg>
  );
}

export function CheckCircleIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="M8 12.5l2.5 2.5 5.5-5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function TeamIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="2" />
      <circle cx="16" cy="9" r="2.5" stroke="currentColor" strokeWidth="2" />
      <path d="M3 19c0-3 2.7-5 6-5s6 2 6 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M14 19c0-2 1.8-3.5 4-3.5s4 1.5 4 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function DocumentIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="5" y="3" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M8 8h8M8 12h8M8 16h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

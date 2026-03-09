export default function LogoIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="17" width="4" height="5" rx="2" />
      <rect x="8" y="13" width="4" height="9" rx="2" />
      <rect x="14" y="8" width="4" height="14" rx="2" />
      <rect x="20" y="3" width="4" height="19" rx="2" />
    </svg>
  );
}

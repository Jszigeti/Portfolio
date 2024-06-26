export default function MobileNavIcon({ size }: { size: string }) {
  return (
    <svg
      width={size}
      height={size}
      className="stroke-accent"
      viewBox="0 0 24 24"
    >
      <g>
        <path
          id="Vector"
          d="M12 17H19M5 12H19M5 7H19"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

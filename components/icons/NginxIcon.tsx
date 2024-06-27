export default function NginxIcon({
  size,
  className,
  title,
}: {
  size: string;
  className?: string;
  title?: string;
}) {
  return (
    <div className="flex flex-col gap-4 items-center w-1/3">
      <svg
        width={size}
        height={size}
        className={className}
        viewBox="-1.5 0 24 24"
      >
        <path d="m10.395 0-10.395 6v12l10.395 6 10.4-6v-12zm6 16.59c-.059.728-.664 1.296-1.402 1.296-.045 0-.089-.002-.133-.006h.006c-.008 0-.017 0-.026 0-.707 0-1.341-.313-1.771-.807l-.002-.003-6-7.141v6.66.014c0 .703-.568 1.273-1.271 1.276h-.08c-.71-.006-1.284-.58-1.29-1.289v-9.18c.049-.725.65-1.295 1.383-1.295.041 0 .082.002.122.005h-.005.039c.712 0 1.352.312 1.789.808l.002.003 5.97 7.141v-6.661c.006-.71.58-1.284 1.289-1.29h.076c.71.006 1.284.58 1.29 1.289v9.181z" />
      </svg>
      <h3 className="text-xl font-bold text-accent">{title}</h3>
    </div>
  );
}

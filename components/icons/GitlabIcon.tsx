export default function GitlabIcon({
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
      <svg width={size} height={size} className={className} viewBox="0 0 24 24">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4.7596 2.41255C5.21156 1.27671 6.83902 1.33597 7.20715 2.5017L8.94344 7.99997H15.0566L16.7929 2.5017C17.161 1.33598 18.7885 1.2767 19.2405 2.41255L21.7145 8.63025L22.6709 11.0338C22.9812 11.8135 22.7716 12.7041 22.1462 13.2637L12.6668 21.7452C12.2872 22.0849 11.7129 22.0849 11.3332 21.7452L1.85387 13.2637C1.22844 12.7041 1.0189 11.8135 1.32917 11.0338L2.28554 8.63025L4.7596 2.41255ZM14.425 9.99996H9.57502L12 17.6792L14.425 9.99996ZM9.94774 17.8219L7.47767 9.99996H3.89304L3.18746 11.7732L9.94774 17.8219ZM4.68885 7.99997H6.84609L5.89157 4.97733L4.68885 7.99997ZM14.0523 17.8219L16.5224 9.99996H20.107L20.8126 11.7732L14.0523 17.8219ZM19.3112 7.99997H17.154L18.1085 4.97733L19.3112 7.99997Z"
        />
      </svg>
      <h3 className="text-xl font-bold text-accent">{title}</h3>
    </div>
  );
}

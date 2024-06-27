export default function SeoIcon({
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
        viewBox="0 0 496 496"
      >
        <g>
          <path d="M80,0v224h16V80h384v240H304v16h192V0H80z M480,64H96V16h384V64z"></path>
          <rect x="112" y="32" width="16" height="16"></rect>
          <rect x="144" y="32" width="16" height="16"></rect>
          <rect x="176" y="32" width="16" height="16"></rect>
          <path
            d="M253.792,304H280V96H112v112v8v20.384c-9.448,2.616-18.52,6.384-27.096,11.264l-20.096-20.096l-45.256,45.256
				l20.096,20.096C34.768,301.48,31,310.552,28.384,320H0v64h28.384c2.616,9.448,6.384,18.52,11.264,27.096l-20.096,20.096
				l45.256,45.256l20.096-20.096c8.576,4.88,17.656,8.656,27.096,11.264V496h64v-28.384c9.448-2.616,18.52-6.384,27.096-11.264
				l20.096,20.096l45.256-45.256l-20.096-20.096c4.88-8.576,8.656-17.656,11.264-27.096H288v-64h-28.384
				C258.104,314.52,256.08,309.208,253.792,304z M264,288h-10.744L264,277.256V288z M128,112h136v156.352l-40.808-40.808
				l-20.096,20.096c-8.576-4.88-17.656-8.656-27.096-11.264V208h-48V112z M272,368h-25.08l-1.376,6.288
				c-2.616,11.952-7.328,23.296-14.008,33.712l-3.48,5.424l17.768,17.768l-22.632,22.632l-17.768-17.768L200,439.528
				c-10.416,6.68-21.76,11.4-33.712,14.008L160,454.92V480h-32v-25.08l-6.288-1.376c-11.952-2.616-23.296-7.328-33.712-14.008
				l-5.424-3.48l-17.768,17.768l-22.632-22.632l17.768-17.768L56.472,408c-6.68-10.416-11.4-21.76-14.008-33.712L41.08,368H16v-32
				h25.08l1.376-6.288c2.616-11.952,7.328-23.296,14.016-33.712l3.48-5.424l-17.768-17.768l22.632-22.632l17.768,17.768L88,264.472
				c10.416-6.68,21.76-11.4,33.712-14.008L128,249.08V224h32v25.08l6.288,1.376c11.952,2.616,23.296,7.328,33.712,14.008l5.424,3.48
				l17.768-17.768l22.632,22.632l-17.768,17.768l3.472,5.424c6.68,10.416,11.4,21.76,14.008,33.712L246.92,336H272V368z"
          ></path>
          <path
            d="M144,288c-35.288,0-64,28.712-64,64c0,35.288,28.712,64,64,64s64-28.712,64-64C208,316.712,179.288,288,144,288z
				 M144,400c-26.472,0-48-21.528-48-48s21.528-48,48-48s48,21.528,48,48S170.472,400,144,400z"
          ></path>
          <path d="M464,96H296v208h168V96z M448,288H312V112h136V288z"></path>
          <rect x="144" y="128" width="104" height="16"></rect>
          <rect x="144" y="160" width="104" height="16"></rect>
          <rect x="192" y="192" width="56" height="16"></rect>
          <rect x="328" y="128" width="104" height="16"></rect>
          <rect x="328" y="160" width="104" height="16"></rect>
          <rect x="328" y="192" width="104" height="16"></rect>
          <rect x="328" y="224" width="104" height="16"></rect>
          <rect x="416" y="256" width="16" height="16"></rect>
          <rect x="328" y="256" width="72" height="16"></rect>
        </g>
      </svg>
      <h3 className="text-xl font-bold text-accent">{title}</h3>
    </div>
  );
}

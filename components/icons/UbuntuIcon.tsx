export default function UbuntuIcon({
  size,
  className,
  title,
}: {
  size: string;
  className: string;
  title: string;
}) {
  return (
    <div className="flex flex-col gap-4 items-center w-1/3">
      <svg width={size} height={size} viewBox="0 0 20 20">
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="Dribbble-Light-Preview"
            transform="translate(-300.000000, -7519.000000)"
            className={className}
          >
            <g id="icons" transform="translate(56.000000, 160.000000)">
              <path
                d="M259.612287,7362.44764 C260.52968,7362.95764 261.702366,7362.65564 262.231631,7361.77164 C262.760897,7360.88764 262.447489,7359.75763 261.530095,7359.24763 C260.612702,7358.73763 259.440017,7359.04063 258.909714,7359.92463 C258.381486,7360.80764 258.695932,7361.93764 259.612287,7362.44764 M255.687422,7374.39866 C254.843711,7374.39866 254.043587,7374.21766 253.327522,7373.89666 L251.993981,7376.19766 C253.107513,7376.72867 254.361146,7377.02867 255.687422,7377.02867 C256.458489,7377.02867 257.204649,7376.92567 257.91345,7376.73667 C258.037983,7375.99366 258.495641,7375.31066 259.224159,7374.90466 C259.953715,7374.49866 260.795351,7374.45966 261.524907,7374.72466 C262.942507,7373.38066 263.865089,7371.55266 264,7369.51765 L261.266501,7369.47865 C261.015359,7372.23666 258.613948,7374.39866 255.687422,7374.39866 M255.687422,7363.60164 C258.613948,7363.60164 261.015359,7365.76364 261.266501,7368.52165 L264,7368.48265 C263.865089,7366.44665 262.942507,7364.61864 261.523869,7363.27464 C260.795351,7363.54064 259.952677,7363.49964 259.224159,7363.09564 C258.495641,7362.68964 258.037983,7362.00564 257.912412,7361.26264 C257.203611,7361.07464 256.458489,7360.97164 255.686384,7360.97164 C254.361146,7360.97164 253.107513,7361.27164 251.993981,7361.80264 L253.327522,7364.10364 C254.043587,7363.78164 254.843711,7363.60164 255.687422,7363.60164 M250.084475,7368.99965 C250.084475,7367.17365 251.026775,7365.55964 252.467206,7364.58264 L251.064134,7362.31964 C249.386052,7363.40064 248.137609,7365.05264 247.618721,7366.98665 C248.224782,7367.46265 248.611872,7368.18765 248.611872,7368.99965 C248.611872,7369.81165 248.224782,7370.53665 247.618721,7371.01265 C248.137609,7372.94766 249.386052,7374.59966 251.064134,7375.68066 L252.467206,7373.41666 C251.026775,7372.43966 250.084475,7370.82665 250.084475,7368.99965 M259.613325,7375.55166 C258.695932,7376.06166 258.381486,7377.19167 258.910751,7378.07567 C259.440017,7378.95967 260.612702,7379.26267 261.530095,7378.75167 C262.447489,7378.24167 262.761934,7377.11167 262.231631,7376.22766 C261.702366,7375.34466 260.52968,7375.04166 259.613325,7375.55166 M245.918846,7367.15165 C244.859278,7367.15165 244,7367.97865 244,7368.99965 C244,7370.02065 244.859278,7370.84765 245.918846,7370.84765 C246.978414,7370.84765 247.836654,7370.02065 247.836654,7368.99965 C247.836654,7367.97865 246.978414,7367.15165 245.918846,7367.15165"
                id="linux_ubuntu-[#148]"
              ></path>
            </g>
          </g>
        </g>
      </svg>
      <h3 className="text-xl font-bold text-accent">{title}</h3>
    </div>
  );
}
import { SVGProps } from "react";

export const SvgLogo = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1272.31 1272.31"
      width="1em"
      height="1em"
      {...props}
    >
      <defs>
        <clipPath id="logo_svg__clip-path" transform="translate(-12.31 -11.85)">
          <path fill="none" d="M0 0h1296v1296H0z" />
        </clipPath>
        <style>{".logo_svg__cls-2{clip-path:url(#logo_svg__clip-path)}"}</style>
      </defs>
      <path
        d="M171.35 648V18.53c0-2.33-3.27-6.68 1.18-6.68H329.9c2.29 0 .49 2.25.49 3.44v271.1c0 1.78-1.2 7.05 1.29 4.83q2.77-2.46 5.59-4.89 5.67-4.86 11.48-9.56 11.78-9.52 24.14-18.25a470.6 470.6 0 01110.35-58.12c84.52-31.19 163-38 251.66-21.62a476.86 476.86 0 01364.43 313.14c28.52 82.39 26.25 163.63 26.25 247.51v379.69c0 2.29 2.08 6-1.92 6H973.33c-2.36 0-6.79 3.4-6.79-1.12v-118.74c0-3.35-3.13 1.14-4.46 2.3q-2.83 2.48-5.71 4.9-5.79 4.89-11.73 9.6a475.84 475.84 0 01-50.82 35.13c-318 190.69-722.47-38.4-722.47-409.19m795.19 0c0-175.67-142.41-318.08-318.08-318.08S330.39 472.33 330.39 648s142.4 318.08 318.07 318.08S966.54 823.67 966.54 648"
        transform="translate(-12.31 -11.85)"
        fill="#48c2c5"
      />
      <path
        fill="#212426"
        d="M318.08 0h954.23v1272.31H0V0h159.04v1113.27h954.23V159.04H318.08V0z"
      />
    </svg>
  );
}


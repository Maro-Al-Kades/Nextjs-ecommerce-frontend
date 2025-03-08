import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface SubtitleTypes {
  title: string;
  btnTitle?: string;
  btnLink?: string;
}

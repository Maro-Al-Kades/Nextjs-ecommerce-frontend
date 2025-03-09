import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface SubtitleTypes {
  title: string;
  btnTitle?: string;
  btnLink?: string;
}

export interface Brand {
  _id: string;
  title: string;
  slug: string;
  image: string;
  updatedAt: Date;
}

export interface Cover {
  _id: string;
  title: string;
  slug: string;
  image: string;
  updatedAt: Date;
}

export interface Ad {
  _id: string;
  title: string;
  slug: string;
  image: string;
  updatedAt: Date;
}

export interface Category {
  _id: string;
  title: string;
  slug: string;
  image: string;
  updatedAt: Date;
}

export interface subCategory {
  _id: string;
  title: string;
  slug: string;
  updatedAt: Date;
  category: any;
}

export interface Product {
  _id: string;
  title: string;
  slug: string;
  description: string;
  quantity: number;
  sold: number;
  price: number;
  priceAfterDiscount?: number;
  colors?: [];
  imageCover: string;
  images: [];
  category: any;
  subCategory: any;
  brand?: any;
  averageRatings: string;
  ratingsQuantity: number;
  updatedAt: Date;
}

export interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
  phone: number;
  profileImg: string;
  role: string;
  active: boolean;
  updatedAt: Date;
}

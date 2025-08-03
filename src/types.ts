export type ThemeName = "theme1" | "theme2" | "theme3";
export type FontScale = "small" | "medium" | "large";

export interface CardProps {
  id: number;
  title: string;
  price: number;
  image: string;
  onClick: () => void;
}
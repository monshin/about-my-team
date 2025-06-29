import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const classNames = {
  section: {
    wrapper: "px-15 md:px-40 py-80"
  }
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

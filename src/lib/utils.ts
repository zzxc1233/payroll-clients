import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface ClassValue {
  [key: string]: any;
}

export function cn(...inputs: ClassValue[]  ) {
  return twMerge(clsx(inputs));
}
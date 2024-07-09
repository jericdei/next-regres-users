import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const sleep = (delay: number) =>
  new Promise((resolve) => setTimeout(resolve, delay));

export function apiUrl(path = "") {
  const vc = process.env.VERCEL_URL;

  if (vc) return `https://${vc}/api/${path}`;

  return `http://localhost:3000/api/${path}`;
}

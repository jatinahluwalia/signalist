import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type ChartType =
  | "market-overview"
  | "stock-heatmap"
  | "timeline"
  | "market-quotes";

export const getChartUrl = (type: ChartType) => {
  return `https://s3.tradingview.com/external-embedding/embed-widget-${type}.js`;
};

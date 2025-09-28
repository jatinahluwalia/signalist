// TradingViewWidget.jsx
"use client";

import { memo } from "react";
import { useTradingViewWidget } from "@/hooks/use-trading-view-widget";
import { cn } from "@/lib/utils";

interface TradingViewWidgetProps {
  scriptUrl: string;
  config: Record<string, unknown>;
  title?: string;
  height?: number;
  className?: string;
}

function TradingViewWidget({
  config,
  scriptUrl,
  title,
  className,
  height = 600,
}: TradingViewWidgetProps) {
  const container = useTradingViewWidget(scriptUrl, config, height);

  return (
    <div className="w-full">
      {title && (
        <h3 className="mb-5 font-semibold text-2xl text-gray-100">{title}</h3>
      )}
      <div
        className={cn("tradingview-widget-container", className)}
        ref={container}
        style={{ height: "100%", width: "100%" }}
      >
        <div
          className="tradingview-widget-container__widget"
          style={{ height, width: "100%" }}
        />
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);

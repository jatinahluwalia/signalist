import TradingVeiewWidget from "@/components/trading-veiew-widget";
import {
  HEATMAP_WIDGET_CONFIG,
  MARKET_DATA_WIDGET_CONFIG,
  MARKET_OVERVIEW_WIDGET_CONFIG,
  TOP_STORIES_WIDGET_CONFIG,
} from "@/lib/constants";
import { getChartUrl } from "@/lib/utils";

const Page = () => {
  return (
    <div className="home-wrapper min-h-screen">
      <section className="home-section grid w-full gap-8">
        <div className="md:col-span-1 xl:col-span-1">
          <TradingVeiewWidget
            title="Market Overview"
            scriptUrl={getChartUrl("market-overview")}
            config={MARKET_OVERVIEW_WIDGET_CONFIG}
            className="custom-chart"
            height={600}
          />
        </div>
        <div className="md:col-span-1 xl:col-span-2">
          <TradingVeiewWidget
            title="Stock Heatmap"
            scriptUrl={getChartUrl("stock-heatmap")}
            config={HEATMAP_WIDGET_CONFIG}
            height={600}
          />
        </div>
      </section>
      <section className="home-section grid w-full gap-8">
        <div className="h-full md:col-span-1 xl:col-span-1">
          <TradingVeiewWidget
            scriptUrl={getChartUrl("timeline")}
            config={TOP_STORIES_WIDGET_CONFIG}
            className="custom-chart"
            height={600}
          />
        </div>
        <div className="h-full md:col-span-1 xl:col-span-2">
          <TradingVeiewWidget
            scriptUrl={getChartUrl("market-quotes")}
            config={MARKET_DATA_WIDGET_CONFIG}
            height={600}
          />
        </div>
      </section>
    </div>
  );
};

export default Page;

import type { MetricStatus } from "../components/MetricCard";
import type { Alert } from "../components/AlertPanel";
import type { ChartPoint } from "../components/ChartSection";
import type { MarketplaceListing } from "../components/MarketplaceCard";

export interface MetricSnapshot {
  label: string;
  unit: string;
  value: number;
  status: MetricStatus;
  trend?: "up" | "down" | "flat";
}

export const currentMetrics: MetricSnapshot[] = [
  {
    label: "Temperature",
    unit: "°C",
    value: 24.6,
    status: "Safe",
    trend: "up"
  },
  {
    label: "pH Level",
    unit: "pH",
    value: 7.9,
    status: "Warning",
    trend: "up"
  },
  {
    label: "Salinity",
    unit: "ppt",
    value: 32.2,
    status: "Safe",
    trend: "flat"
  },
  {
    label: "Turbidity",
    unit: "NTU",
    value: 14.3,
    status: "Risk",
    trend: "up"
  }
];

export const temperatureTrend: ChartPoint[] = [
  { day: "D-6", value: 23.4 },
  { day: "D-5", value: 23.7 },
  { day: "D-4", value: 24.1 },
  { day: "D-3", value: 24.3 },
  { day: "D-2", value: 24.5 },
  { day: "D-1", value: 24.4 },
  { day: "Today", value: 24.6 }
];

export const liveAlerts: Alert[] = [
  {
    id: "1",
    type: "warning",
    metric: "pH drift detected",
    message:
      "Average pH has been above 7.8 for the last 3 hours. Consider adjusting line depth or flushing with cooler inflow.",
    timestamp: "5 min ago"
  },
  {
    id: "2",
    type: "critical",
    metric: "High turbidity window",
    message:
      "Short-term turbidity spike likely due to swell event. Delay harvest on lines 12–18 by 6–8 hours.",
    timestamp: "18 min ago"
  }
];

export const marketplaceListings: MarketplaceListing[] = [
  {
    id: "listing-1",
    name: "Sunrise Farm – Kappaphycus",
    species: "Kappaphycus alvarezii",
    quantityKg: 4200,
    grade: "A",
    pricePerKg: 1.8,
    origin: "Cebu, Philippines"
  },
  {
    id: "listing-2",
    name: "Coastal Co-op – Eucheuma",
    species: "Eucheuma denticulatum",
    quantityKg: 3100,
    grade: "B",
    pricePerKg: 1.45,
    origin: "Kilifi, Kenya"
  },
  {
    id: "listing-3",
    name: "Blue Bay Collective – Gracilaria",
    species: "Gracilaria changii",
    quantityKg: 1800,
    grade: "A",
    pricePerKg: 2.05,
    origin: "Bohol, Philippines"
  }
];


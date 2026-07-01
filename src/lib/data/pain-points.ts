
export interface PainPoint {
  id: number;
  icon: string;
  title: string;
  description: string;
  order_index: number;
}

export const PAIN_POINTS: PainPoint[] = [
  {
    id: 5,
    icon: "Tv",
    title: "Wasted ad spend",
    description: "Organic reach is nil. Ads cost thousands of rupees/mo, yet no customer conversion. Audience scrolls past.",
    order_index: 0
  },
  {
    id: 6,
    icon: "Clapperboard",
    title: "Mixed Brand Message",
    description: "Social media lacks consistent tone/design. Confuses customers, erodes trust and credibility.",
    order_index: 1
  },
  {
    id: 9,
    icon: "MessageSquareWarning",
    title: "Reputation In Danger",
    description: "Negative comments & no engagement hurt reputation. Clients check social first—you lose them.",
    order_index: 2
  },
  {
    id: 12,
    icon: "IndianRupee",
    title: "High Customer Cost",
    description: "No clear understanding of customer acquisition cost. Marketing spend is a black hole.",
    order_index: 3
  },
  {
    id: 11,
    icon: "HandCoins",
    title: "Profit Leaks Unseen",
    description: "Can't pinpoint where money goes. Hidden inefficiencies impacting margins silently.",
    order_index: 4
  },
  {
    id: 13,
    icon: "Warehouse",
    title: "Inventory Blindspot",
    description: "Stockouts or excess inventory kill cash flow. No way to predict demand accurately.",
    order_index: 5
  },
  {
    id: 7,
    icon: "AppWindow",
    title: "Poor Digital Experience",
    description: "No online portal or smooth customer journey. Losing clients to tech-savvy rivals.",
    order_index: 6
  },
  {
    id: 14,
    icon: "Computer",
    title: "Outdated Systems",
    description: "Old software slows down your team. Manual data entry and crashes destroy productivity.",
    order_index: 7
  },
  {
    id: 15,
    icon: "ChartColumnDecreasing",
    title: "Growth Stalled By Tech",
    description: "Current software can't scale. Expansion leads to more errors, slower processes, system risk.",
    order_index: 8
  },
  {
    id: 17,
    icon: "Headset",
    title: "Slow Customer Support",
    description: "Long response times, inconsistent help. Customers frustrated, trust is lost.",
    order_index: 9
  },
  {
    id: 18,
    icon: "UserPlus",
    title: "Leads Lost Easily",
    description: "No system to capture/nurture leads. Communication gaps cost revenue and trust.",
    order_index: 10
  },
  {
    id: 16,
    icon: "ListChecks",
    title: "Manual Task Swamps",
    description: "Team buried in repetitive work: data entry, follow-ups. Hours wasted, morale drops.",
    order_index: 11
  }
];

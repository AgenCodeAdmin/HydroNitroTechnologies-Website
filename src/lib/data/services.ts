
import { ShoppingBag, Code2, Cpu, Share2 } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  path: string;
  iconName: string;
  isNew?: boolean;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "woc-series",
    title: "WOC Series",
    tagline: "Luxury Digital Showrooms",
    description: "Architectural digital storefronts for Jewelry, Bespoke, and High-end brands. Available in Silver, Gold, and Diamond tiers.",
    path: "/woc-plans",
    iconName: "ShoppingBag",
    isNew: true
  },
  {
    id: "custom-dev",
    title: "Bespoke Build",
    tagline: "Engineering Without Limits",
    description: "White-glove software engineering for visions that exceed standard boundaries. Enterprise SaaS and specialized operational tools.",
    path: "/custom-development",
    iconName: "Code2"
  },
  {
    id: "ai-automation",
    title: "AI Automation",
    tagline: "The Grunt Work Killer",
    description: "Architecting intelligent agents and automated pipelines to eradicate repetitive manual tasks and maximize operational speed.",
    path: "/automation",
    iconName: "Cpu",
    isNew: true
  },
  {
    id: "digital-media",
    title: "Media Mastery",
    tagline: "Strategic Brand Sovereignty",
    description: "Data-driven social media management and high-conversion content strategies to dominate your digital arena.",
    path: "/digital-media",
    iconName: "Share2"
  }
];

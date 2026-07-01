
export interface WocTier {
  id: string;
  name: string;
  tagline: string;
  price: string;
  originalPrice: string; // The "Anchor" for the countdown
  rawPrice: number;
  anchorPrice: number; // Starting point for countdown
  description: string;
  multiplier?: string;
  productLimit: string;
  features: string[];
  isPopular?: boolean;
  isElite?: boolean;
  ctaText: string;
  metrics: {
    value: string;
    suffix?: string;
    label: string;
  }[];
}

export const WOC_TIERS: WocTier[] = [
  {
    id: 'silver',
    name: 'Silver WOC',
    tagline: 'The Premium Digital Catalogue',
    price: '₹19,999',
    originalPrice: '₹24,999',
    rawPrice: 19999,
    anchorPrice: 24999,
    productLimit: 'Up to 399 Products',
    description: 'A stunning online showcase for your products. Replace your WhatsApp PDFs with a professional digital catalogue designed to capture customer inquiries and build trust.',
    features: [
      'Premium Product Showcase',
      'Integrated Smart Inquiry Lead System',
      'Mobile-Optimized Experience',
      'WOC Studio Admin (Basic Control)',
      'Luxury Architectural Landing Page',
      'Immersive Brand Story Page',
      'Interactive High-Resolution Product Grid',
      'Quick-View Product Overlays (Elegant Popups)',
      'Standard SEO Schema Implementation',
      'Professional Contact Hub',
    ],
    ctaText: 'Launch Your Showroom',
    metrics: [
      { value: '399', label: 'Product Limit' },
      { value: '01', label: 'Lead System' }
    ]
  },
  {
    id: 'gold',
    name: 'Gold WOC',
    tagline: 'The High-Performance Brand Store',
    price: '₹25,999',
    originalPrice: '₹32,000',
    rawPrice: 25999,
    anchorPrice: 32000,
    multiplier: '5X MORE BRAND POWER THAN SILVER',
    productLimit: 'Up to 999 Products',
    description: 'A lightning-fast, fully optimized platform. Get complete control over your content with high-speed image delivery (CDN) and expanded pages to tell your brand\'s full story.',
    isPopular: true,
    features: [
      'Includes Every Silver Feature Plus:',
      'Global CDN & Advanced Image Optimization',
      'Expanded Custom Content Pages',
      'Advanced Admin Control & Page Management',
      'Enhanced UI/UX Transitions',
      'Dedicated Individual Product Detail Pages',
      'VIP WhatsApp Concierge Integration (Instant Sales)',
      'Verified Social Proof & Review Page',
      'Legal Compliance Suite (T&C/Shipping/Returns)',
      'Dedicated Membership & Scheme Page',
      'Priority Cloud Hosting Optimization',
    ],
    ctaText: 'Upgrade to Gold',
    metrics: [
      { value: '999', label: 'Product Limit' },
      { value: '20', suffix: 'X', label: 'Brand Power' }
    ]
  },
  {
    id: 'diamond',
    name: 'Diamond WOC',
    tagline: 'The Data-Driven Ecosystem',
    price: '₹29,999',
    originalPrice: '₹37,000',
    rawPrice: 29999,
    anchorPrice: 37000,
    multiplier: '10X ELITE VALUE MULTIPLIER',
    productLimit: 'Unlimited Products',
    isElite: true,
    description: 'Gain a strategic advantage with real-time customer intelligence. Track user behavior and access deep performance insights to run targeted sales campaigns and maximize your ROI.',
    features: [
      'Includes Every Silver & Gold Feature Plus:',
      'Customer Behavior & Tracking Insights',
      'Targeted Sales Analytics Dashboard',
      'Advanced Data Export & Reporting',
      'Priority Support & Maintenance',
      'Precision Filtering Engine (Price/Karat)',
      'Client "Wishlist" Heart-Beat Engine',
      'Master Control Center (Full Site Admin Access)',
      'Dynamic "Trending Now" Automated Sections',
      'Advanced Product Taxonomy Categories',
      'Real-Time Trend Analytics Reports',
      'Dedicated Blog & Article CMS',
      'Customer Data Insights Portal',
      'Ultra-Premium GSAP Animations',
      'Highest Performance Tier Optimization',
      'Priority Security Patching',
      'Unlimited Product Upload Capacity',
    ],
    ctaText: 'Claim Your Kingdom',
    metrics: [
      { value: '500', suffix: '+', label: 'Products' },
      { value: '30', suffix: 'X', label: 'Value' }
    ]
  }
];

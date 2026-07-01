
export interface ProcessStage {
  id: number;
  title: string;
  description: string;
  order_index: number;
}

export const PROCESS_DATA: ProcessStage[] = [
  {
    id: 1,
    title: "Planning",
    description: "The first step in any successful digital marketing campaign is planning. This includes research into your target audience, your competitors, and your overall goals.",
    order_index: 0
  },
  {
    id: 2,
    title: "Strategy",
    description: "This is where we'll determine approaches to reach your target audience and accomplish your objectives. It's crucial to choose the right digital marketing channels for your company.",
    order_index: 1
  },
  {
    id: 3,
    title: "Execution",
    description: "This is where the rubber meets the road! We will start implementing your digital marketing plan for running creative campaigns, and many more.",
    order_index: 2
  },
  {
    id: 5,
    title: "Refinement",
    description: "After analysing your outcomes, we adjust your digital marketing plan. This includes updating your website, social media, digital advertising, or other strategies.",
    order_index: 3
  },
  {
    id: 4,
    title: "Repeat",
    description: "Once we’ve refined your business strategy and achieved your desired results, we can further restart the procedure to get even refined outcomes down the road.",
    order_index: 4
  },
  {
    id: 6,
    title: "Tracking and Analysis",
    description: "Analysing and keeping tabs on outcomes is crucial. We will assess what's working and what's not and make modifications to enhance your performance.",
    order_index: 5
  }
];

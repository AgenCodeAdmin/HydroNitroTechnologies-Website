import React from 'react';
import { Button } from '@/components/ui/button';
import * as icons from 'lucide-react';
import parse from 'html-react-parser';

// Define the type for the props of the DynamicIcon component
interface DynamicIconProps extends icons.LucideProps {
  name: keyof typeof icons;
}

const DynamicIcon: React.FC<DynamicIconProps> = ({ name, ...props }) => {
  const IconComponent = icons[name];
  if (!IconComponent) return <icons.HelpCircle {...props} />;
  return <IconComponent {...props} />;
};

const staticPricingPlans = [
  {
    id: '1', name: 'Starter', price: '₹9,999', description: '<ul><li>Basic features</li></ul>', icon: 'Star', is_featured: false, order_index: 0, choose_plan_link: '#'
  },
  {
    id: '2', name: 'Pro', price: '₹19,999', description: '<ul><li>Pro features</li></ul>', icon: 'Zap', is_featured: true, order_index: 1, choose_plan_link: '#'
  },
  {
    id: '3', name: 'Enterprise', price: '₹29,999', description: '<ul><li>Enterprise features</li></ul>', icon: 'Shield', is_featured: false, order_index: 2, choose_plan_link: '#'
  }
];

const PricingSection = () => {
  const pricingPlans = staticPricingPlans;
  const contactUsLink = "https://wa.me/917019573096";

  return (
    <section id="pricing" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-heading font-black text-gray-900 text-center mb-4 tracking-tighter uppercase leading-none">Pricing Designed for Your Success</h2>
        <div className="w-24 h-1 bg-blue-500 mx-auto mb-12 rounded-full"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.id}
              className={`glass-card-hover p-8 relative flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                plan.is_featured ? 'ring-2 ring-blue-500 transform scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {plan.is_featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}

              <div className="absolute top-4 left-4">
                <div className="flex items-center justify-center w-10 h-10 border-2 border-blue-500 rounded-full">
                  <span className="text-blue-500 font-bold text-lg">{plan.order_index + 1}</span>
                </div>
              </div>
              
              <div className="text-center mb-8 pt-12">
                <div className="flex justify-center mb-4">
                  <DynamicIcon name={plan.icon as keyof typeof icons} size={48} className="text-blue-600" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2 tracking-tight">
                  {plan.name}
                </h3>
                <div className="text-4xl font-bold text-blue-600 mb-4">
                  {plan.price}
                </div>
              </div>

              <div className="space-y-2 mb-8 flex-grow font-sans tiptap-content whitespace-pre-wrap leading-snug">
                {parse(plan.description || '')}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-20">
          <Button 
            className="btn-primary-glass text-lg px-12 py-4"
            onClick={() => window.open(contactUsLink || '#', '_blank')}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
import React, { useCallback } from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import * as LucideIcons from "lucide-react";
import '../PainPointsCarousel.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useMediaQuery } from '@/hooks/useMediaQuery';

interface PainPoint {
  id: number;
  icon: string;
  title: string;
  description: string;
  order_index: number;
}

interface PainPointsCarouselProps {
  painPoints: PainPoint[];
}

const PainPointsCarousel: React.FC<PainPointsCarouselProps> = ({ painPoints }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, slidesToScroll: 1 }, [Autoplay({ delay: 5000 })]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const getIconComponent = (iconName: string) => {
    const IconComponent = (LucideIcons as any)[iconName];
    return IconComponent ? <IconComponent className="h-14 w-28 text-primary mb-2" /> : null;
  };

  const groupedPainPoints = painPoints.reduce((result, value, index, array) => {
    if (index % 2 === 0) {
      result.push(array.slice(index, index + 2));
    }
    return result;
  }, [] as PainPoint[][]);

  return (
    <div className="relative">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {groupedPainPoints.map((group, index) => (
            <div className="embla__slide" key={index}>
              <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} gap-4`}>
                {group.map((pp) => (
                  <Card key={pp.id} className="animated-border-box flex flex-col items-center text-center h-full w-full pt-6">
                    {getIconComponent(pp.icon)}
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold mb-2">{pp.title}</CardTitle>
                      <CardDescription className="text-gray-600">{pp.description}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="embla__prev" onClick={scrollPrev}>
        <ChevronLeft size={32} />
      </button>
      <button className="embla__next" onClick={scrollNext}>
        <ChevronRight size={32} />
      </button>
    </div>
  );
};

export default PainPointsCarousel;

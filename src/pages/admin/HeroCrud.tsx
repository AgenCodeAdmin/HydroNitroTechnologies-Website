import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Save } from 'lucide-react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getHeroContent } from '@/lib/data/hero';
import { HeroContent } from '@/components/HeroSection'; // Assuming HeroContent interface is exported

const HeroCrud = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: fetchedHeroContent, isLoading, isError } = useQuery<HeroContent | null>({
    queryKey: ['hero_content'],
    queryFn: getHeroContent,
  });

  const [heroContent, setHeroContent] = useState<HeroContent>({
    headline: '',
    subheadline: '',
    background_image_url: '',
    cta_text: 'Get Started Now',
    cta_link: ''
  });

  useEffect(() => {
    if (fetchedHeroContent) {
      setHeroContent(fetchedHeroContent);
    }
  }, [fetchedHeroContent]);

  const saveHeroContent = async () => {
    // The data to upsert, removing null id for insert operations
    const { id, ...contentToSave } = heroContent;
    const upsertData = id ? heroContent : contentToSave;

    const { error } = await supabase.from('hero_content').upsert(upsertData as any); // Cast to any for now, will fix types later

    if (error) {
      toast({ title: 'Error saving hero content', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Success!', description: 'Hero content has been saved.' });
      queryClient.invalidateQueries({ queryKey: ['hero_content'] }); // Invalidate and refetch
    }
  };

  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle>Hero Section</CardTitle>
        <CardDescription>Manage the main hero section content</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="headline">Headline</Label>
          <Input
            id="headline"
            value={heroContent.headline}
            onChange={(e) => setHeroContent({ ...heroContent, headline: e.target.value })}
            maxLength={100}
            className="glass-card"
          />
          <p className="text-sm text-gray-500 text-right">
            {heroContent.headline ? heroContent.headline.length : 0}/100
          </p>
        </div>
        <div>
          <Label htmlFor="subheadline">Subheadline</Label>
          <Textarea
            id="subheadline"
            value={heroContent.subheadline}
            onChange={(e) => setHeroContent({ ...heroContent, subheadline: e.target.value })}
            className="glass-card"
          />
        </div>
        <div>
          <Label htmlFor="bg-image">Background Image URL</Label>
          <Input
            id="bg-image"
            value={heroContent.background_image_url}
            onChange={(e) => setHeroContent({ ...heroContent, background_image_url: e.target.value })}
            className="glass-card"
          />
        </div>
        <div>
          <Label htmlFor="cta-text">CTA Button Text</Label>
          <Input
            id="cta-text"
            value={heroContent.cta_text}
            onChange={(e) => setHeroContent({ ...heroContent, cta_text: e.target.value })}
            className="glass-card"
          />
        </div>
        <div>
          <Label htmlFor="cta-link">CTA Button Link</Label>
          <Input
            id="cta-link"
            value={heroContent.cta_link}
            onChange={(e) => setHeroContent({ ...heroContent, cta_link: e.target.value })}
            className="glass-card"
          />
        </div>
        <Button onClick={saveHeroContent} disabled={isLoading} className="btn-primary-glass">
          <Save className="w-4 h-4 mr-2" />
          Save Hero Content
        </Button>
      </CardContent>
    </Card>
  );
};

export default HeroCrud;

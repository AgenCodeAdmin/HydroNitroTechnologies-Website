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
import { getAboutContent, AboutContent } from '@/lib/data/about';

const AboutCrud = () => {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: fetchedAboutContent, isLoading, isError } = useQuery<AboutContent | null>({
    queryKey: ['about_content'],
    queryFn: getAboutContent,
  });

  const [aboutContent, setAboutContent] = useState<AboutContent>({
    id: '',
    title: '',
    description: '',
    image_url: null,
  });

  useEffect(() => {
    if (fetchedAboutContent) {
      setAboutContent(fetchedAboutContent);
    }
  }, [fetchedAboutContent]);

  const saveAboutContent = async () => {
    // The data to upsert, removing null id for insert operations
    const { id, ...contentToSave } = aboutContent;
    const upsertData = id ? aboutContent : contentToSave;

    const { error } = await supabase.from('about_content').upsert(upsertData as any); // Cast to any for now, will fix types later

    if (error) {
      toast({ title: 'Error saving about content', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Success!', description: 'About content has been saved.' });
      queryClient.invalidateQueries({ queryKey: ['about_content'] }); // Invalidate and refetch
    }
  };

  if (isLoading) {
    return <div className="flex items-center justify-center p-8"><div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div></div>;
  }

  if (isError || !fetchedAboutContent) {
    return <div className="flex items-center justify-center p-8 text-red-500">Error loading about content or no content found.</div>;
  }

  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle>About Section</CardTitle>
        <CardDescription>Manage the about section content</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="about-title">Title</Label>
          <Input id="about-title" value={aboutContent.title} onChange={(e) => setAboutContent({ ...aboutContent, title: e.target.value })} className="glass-card" />
        </div>
        <div>
          <Label htmlFor="about-description">Description</Label>
          <Textarea id="about-description" value={aboutContent.description} onChange={(e) => setAboutContent({ ...aboutContent, description: e.target.value })} className="glass-card" rows={5} />
        </div>
        <div>
          <Label htmlFor="about-image">Image URL</Label>
          <Input id="about-image" value={aboutContent.image_url || ''} onChange={(e) => setAboutContent({ ...aboutContent, image_url: e.target.value })} className="glass-card" />
        </div>
        <Button onClick={saveAboutContent} disabled={isLoading} className="btn-primary-glass"><Save className="w-4 h-4 mr-2" />Save About Content</Button>
      </CardContent>
    </Card>
  );
};

export default AboutCrud;

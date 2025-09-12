import { supabase } from '@/integrations/supabase/client';

export interface AboutContent {
  id: string;
  title: string;
  description: string;
  image_url: string | null;
}

export async function getAboutContent(): Promise<AboutContent | null> {
  const { data, error } = await supabase
    .from('about_content')
    .select('*')
    .limit(1)
    .single();

  if (error && error.code !== 'PGRST116') {
    console.error('Error fetching about content:', error);
    throw new Error(error.message);
  }

  return data || null;
}

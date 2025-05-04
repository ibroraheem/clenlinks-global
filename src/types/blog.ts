export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string | null;
  featured_image: string | null;
  author: string;
  category: string | null;
  created_at: string;
  updated_at: string;
  published: boolean;
  meta_title: string | null;
  meta_description: string | null;
  og_image: string | null;
}

export interface CreateBlogPostInput {
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  featured_image?: string;
  author: string;
  category?: string;
  published?: boolean;
  meta_title?: string;
  meta_description?: string;
  og_image?: string;
}

export interface UpdateBlogPostInput {
  title?: string;
  slug?: string;
  content?: string;
  excerpt?: string;
  featured_image?: string;
  author?: string;
  category?: string;
  published?: boolean;
  meta_title?: string;
  meta_description?: string;
  og_image?: string;
} 
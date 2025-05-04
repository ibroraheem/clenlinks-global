-- Create blog_posts table
CREATE TABLE blog_posts (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    content TEXT NOT NULL,
    excerpt TEXT,
    featured_image TEXT,
    author TEXT NOT NULL,
    category TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    published BOOLEAN DEFAULT false NOT NULL,
    meta_title TEXT,
    meta_description TEXT,
    og_image TEXT
);

-- Create index on slug for faster lookups
CREATE INDEX blog_posts_slug_idx ON blog_posts(slug);

-- Create index on published status for filtering
CREATE INDEX blog_posts_published_idx ON blog_posts(published);

-- Create index on category for filtering
CREATE INDEX blog_posts_category_idx ON blog_posts(category);

-- Enable Row Level Security
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Create policies
-- Allow public read access to published posts
CREATE POLICY "Allow public read access to published posts"
    ON blog_posts FOR SELECT
    USING (published = true);

-- Allow authenticated users to create posts
CREATE POLICY "Allow authenticated users to create posts"
    ON blog_posts FOR INSERT
    TO authenticated
    WITH CHECK (true);

-- Allow authenticated users to update their own posts
CREATE POLICY "Allow authenticated users to update posts"
    ON blog_posts FOR UPDATE
    TO authenticated
    USING (auth.uid() = id)
    WITH CHECK (auth.uid() = id);

-- Allow authenticated users to delete their own posts
CREATE POLICY "Allow authenticated users to delete posts"
    ON blog_posts FOR DELETE
    TO authenticated
    USING (auth.uid() = id);

-- Create function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_blog_posts_updated_at
    BEFORE UPDATE ON blog_posts
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column(); 
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import type { BlogFrontmatter, BlogPost, WorkFrontmatter, WorkProject } from './content.types';

const CONTENT_DIR = path.join(process.cwd(), 'content');

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function getSlug(filename: string): string {
  return filename.replace(/\.mdx?$/, '');
}

function getMdxFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith('.mdx') || f.endsWith('.md'));
}

function parseFrontmatter<T>(filePath: string): { data: T; content: string } {
  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);
  return { data: data as T, content };
}

// ---------------------------------------------------------------------------
// Blog
// ---------------------------------------------------------------------------

export function getAllBlogPosts(): BlogPost[] {
  const dir = path.join(CONTENT_DIR, 'blog');
  const files = getMdxFiles(dir);

  return files
    .map((filename) => {
      const filePath = path.join(dir, filename);
      const { data, content } = parseFrontmatter<BlogFrontmatter>(filePath);
      const stats = readingTime(content);

      return {
        slug: getSlug(filename),
        frontmatter: data,
        readingTime: stats.text,
      } satisfies BlogPost;
    })
    .filter((post) => !post.frontmatter.draft)
    .sort(
      (a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime(),
    );
}

export function getBlogPost(slug: string): {
  frontmatter: BlogFrontmatter;
  content: string;
  readingTime: string;
} | null {
  const filePath = path.join(CONTENT_DIR, 'blog', `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const { data, content } = parseFrontmatter<BlogFrontmatter>(filePath);
  const stats = readingTime(content);

  return { frontmatter: data, content, readingTime: stats.text };
}

// ---------------------------------------------------------------------------
// Work
// ---------------------------------------------------------------------------

export function getAllWorkProjects(): WorkProject[] {
  const dir = path.join(CONTENT_DIR, 'work');
  const files = getMdxFiles(dir);

  return files
    .map((filename) => {
      const filePath = path.join(dir, filename);
      const { data } = parseFrontmatter<WorkFrontmatter>(filePath);

      return {
        slug: getSlug(filename),
        frontmatter: data,
      } satisfies WorkProject;
    })
    .filter((project) => !project.frontmatter.draft)
    .sort(
      (a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime(),
    );
}

export function getWorkProject(slug: string): {
  frontmatter: WorkFrontmatter;
  content: string;
} | null {
  const filePath = path.join(CONTENT_DIR, 'work', `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const { data, content } = parseFrontmatter<WorkFrontmatter>(filePath);
  return { frontmatter: data, content };
}

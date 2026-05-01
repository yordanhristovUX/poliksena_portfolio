/**
 * Frontmatter schemas for MDX content.
 * All fields are validated at build time via parseFrontmatter().
 */

export interface BlogFrontmatter {
  title: string;
  description: string;
  date: string; // ISO 8601: YYYY-MM-DD
  tags: string[];
  coverImage?: string;
  draft?: boolean;
}

export interface WorkFrontmatter {
  title: string;
  description: string;
  date: string; // ISO 8601: YYYY-MM-DD
  tags: string[];
  coverImage?: string;
  url?: string;
  draft?: boolean;
}

export interface BlogPost {
  slug: string;
  frontmatter: BlogFrontmatter;
  readingTime: string;
}

export interface WorkProject {
  slug: string;
  frontmatter: WorkFrontmatter;
}

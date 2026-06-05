import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { getBlogPosts } from '@/lib/ghost';

export const metadata: Metadata = {
  alternates: { canonical: 'https://logisbase.com/blog' },
  title: 'Blog | LogisBase',
  description:
    'Product updates, engineering deep-dives, logistics industry insights, and source-available news from the LogisBase team. Stay up to date with the latest from the platform.',
  keywords: [
    'logisbase blog',
    'logistics technology blog',
    'fleet management insights',
    'source-available logistics news',
  ],
  openGraph: {
    title: 'Blog | LogisBase',
    description:
      'Product updates, engineering deep-dives, and logistics industry insights from LogisBase.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Blog | LogisBase`,
    description: `Product updates, engineering deep-dives, and logistics industry insights from LogisBase.`,
  },
};

export const revalidate = 300;

function formatPublishedDate(value: string) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(value));
}

export default async function BlogPage() {
  const posts = await getBlogPosts({ limit: 7 });
  const featuredPost = posts.find((post) => post.isFeatured) || posts[0];
  const latestPosts = posts.filter((post) => post.id !== featuredPost?.id);

  return (
    <div className="flex flex-col">
      <section className="section-padding container">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-muted-foreground mb-4 inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium">
            Blog
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance md:text-5xl lg:text-6xl">
            Insights from the{' '}
            <span className="text-primary">LogisBase team.</span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed md:text-xl">
            Product updates, engineering deep-dives, logistics industry
            analysis, and source-available news. Written by the people building
            and using LogisBase every day.
          </p>
        </div>
      </section>

      {featuredPost && (
        <section className="py-12 md:py-16">
          <div className="container">
            <div className="bg-card overflow-hidden rounded-3xl border">
              <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="p-8 md:p-12">
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="group focus-visible:ring-primary block rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-offset-4"
                  >
                    <div className="mb-3 flex flex-wrap items-center gap-3">
                      <span className="bg-primary/10 text-primary rounded-full border px-3 py-1 text-xs font-medium">
                        {featuredPost.isFeatured ? 'Featured' : 'Latest'}{' '}
                        article
                      </span>
                      <span className="text-muted-foreground text-sm">
                        {formatPublishedDate(featuredPost.publishedAt)}
                      </span>
                      <span className="text-muted-foreground text-sm">
                        {featuredPost.readingTime}
                      </span>
                    </div>
                    <h2 className="group-hover:text-primary mb-4 max-w-3xl text-3xl font-bold tracking-tight text-balance transition-colors md:text-4xl">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted-foreground mb-6 max-w-3xl leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    {featuredPost.tags.length > 0 && (
                      <div className="mb-8 flex flex-wrap gap-2">
                        {featuredPost.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag.slug}
                            className="bg-muted/40 text-muted-foreground rounded-full border px-2.5 py-1 text-xs"
                          >
                            {tag.name}
                          </span>
                        ))}
                      </div>
                    )}
                  </Link>
                  <Button asChild>
                    <Link href={`/blog/${featuredPost.slug}`}>
                      Read article <ArrowRight className="ml-2 size-4" />
                    </Link>
                  </Button>
                </div>

                {featuredPost.featureImage && (
                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="group focus-visible:ring-primary block border-t outline-none focus-visible:ring-2 focus-visible:ring-offset-4 lg:border-t-0 lg:border-l"
                  >
                    <Image
                      src={featuredPost.featureImage}
                      alt={featuredPost.featureImageAlt || featuredPost.title}
                      width={1600}
                      height={900}
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className="h-full min-h-72 w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="border-t py-12 md:py-16">
        <div className="container">
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight">
              Latest articles
            </h2>
          </div>

          {latestPosts.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {latestPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group bg-card hover:border-primary/50 flex h-full flex-col overflow-hidden rounded-2xl border transition-all hover:shadow-md"
                >
                  {post.featureImage && (
                    <div className="bg-muted/30 aspect-[16/9] overflow-hidden border-b">
                      <Image
                        src={post.featureImage}
                        alt={post.featureImageAlt || post.title}
                        width={1200}
                        height={675}
                        sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    </div>
                  )}

                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      {post.tags[0] && (
                        <span className="bg-muted/40 text-muted-foreground rounded-full border px-2.5 py-0.5 text-xs">
                          {post.tags[0].name}
                        </span>
                      )}
                      <span className="text-muted-foreground text-xs">
                        {post.readingTime}
                      </span>
                    </div>
                    <h3 className="group-hover:text-primary mb-3 flex-1 text-lg leading-snug font-semibold">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground text-xs">
                        {formatPublishedDate(post.publishedAt)}
                      </span>
                      <ArrowRight className="text-muted-foreground group-hover:text-primary size-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="bg-card rounded-2xl border p-8 text-center">
              <h3 className="text-xl font-semibold tracking-tight">
                No blog posts yet
              </h3>
              <p className="text-muted-foreground mt-3">
                Connect your Ghost instance and publish your first article to
                populate the LogisBase blog.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="border-t py-16 md:py-20">
        <div className="container">
          <div className="bg-card relative overflow-hidden rounded-2xl border px-8 py-14 text-center md:px-16">
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
              <div className="bg-primary/5 absolute -top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full blur-3xl" />
            </div>
            <div className="mx-auto max-w-2xl">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance md:text-4xl">
                Explore the platform behind the articles
              </h2>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Dive into the product, docs, and source-available modules that
                power the workflows we share on the LogisBase blog.
              </p>
              <Button asChild>
                <Link href="/product">
                  Explore LogisBase <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

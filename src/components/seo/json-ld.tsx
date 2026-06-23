/**
 * JSON-LD structured data components for SEO.
 * These inject machine-readable schema.org markup that Google uses for rich results.
 */

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'LogisBase',
    url: 'https://logisbase.com',
    logo: 'https://logisbase.com/images/filled-icon.png',
    sameAs: [
      'https://tally.so/r/obgQQx',
      'https://twitter.com/logisbase',
      'https://www.linkedin.com/company/logisbase',
      'https://discord.gg/7xPbDryKDH',
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        email: 'hello@logisbase.com',
        contactType: 'sales',
      },
      {
        '@type': 'ContactPoint',
        email: 'support@logisbase.com',
        contactType: 'customer support',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'NG',
      addressLocality: 'Nigeria',
    },
    foundingDate: '2021',
    founders: [
      { '@type': 'Person', name: 'Chike Ngwu' },
      { '@type': 'Person', name: 'Tek Orakle' },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'LogisBase',
    alternateName:
      'LogisBase — Source-Accessible Logistics & Supply Chain Platform',
    url: 'https://logisbase.com',
    inLanguage: 'en',
    publisher: {
      '@type': 'Organization',
      name: 'LogisBase',
      url: 'https://logisbase.com',
      logo: 'https://logisbase.com/images/filled-icon.png',
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function SoftwareApplicationSchema({
  name = 'LogisBase',
  url = 'https://logisbase.com',
  description = 'Source-accessible fleet management and TMS software. Dispatch, track, and optimize your fleet in real time. Self-hosted or cloud, no per-seat pricing.',
  applicationCategory = 'BusinessApplication',
  operatingSystem = 'Web, Android, iOS',
  price = '25',
}: {
  name?: string;
  url?: string;
  description?: string;
  applicationCategory?: string;
  operatingSystem?: string;
  price?: string;
} = {}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    applicationCategory,
    operatingSystem,
    url,
    description,
    offers: {
      '@type': 'Offer',
      price,
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price,
        priceCurrency: 'USD',
        unitText: 'MONTH',
      },
    },
    author: {
      '@type': 'Organization',
      name: 'LogisBase',
      url: 'https://logisbase.com',
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ProductSchema({
  name,
  description,
  price,
  url,
}: {
  name: string;
  description: string;
  price?: string;
  url: string;
}) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    url,
    brand: {
      '@type': 'Brand',
      name: 'LogisBase',
    },
  };
  if (price) {
    schema.offers = {
      '@type': 'Offer',
      price,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    };
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BlogPostingSchema({
  url,
  headline,
  description,
  image,
  datePublished,
  dateModified,
  authors,
  tags,
}: {
  url: string;
  headline: string;
  description: string;
  image?: string | null;
  datePublished: string;
  dateModified?: string;
  authors: { name: string }[];
  tags?: string[];
}) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    headline,
    description,
    url,
    datePublished,
    dateModified: dateModified || datePublished,
    author: authors.map((author) => ({
      '@type': 'Person',
      name: author.name,
    })),
    publisher: {
      '@type': 'Organization',
      name: 'LogisBase',
      url: 'https://logisbase.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://logisbase.com/images/filled-icon.png',
      },
    },
  };
  if (image) {
    schema.image = image;
  }
  if (tags && tags.length > 0) {
    schema.keywords = tags.join(', ');
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
